#!/usr/bin/env bash
#
# Deploy situs statis ke server via rsync.
#
#   ./scripts/deploy.sh          # build lalu rsync
#   ./scripts/deploy.sh --no-build
#
# Target default: root@172.16.1.108:/root/services/web
# Override lewat env: DEPLOY_HOST, DEPLOY_USER, DEPLOY_PATH, DEPLOY_SSH_KEY
#
# Catatan: rsync harus terpasang di server tujuan (sudah dipasang).
# `--delete` membuat mirror: file yang tidak ada lagi di dist/ ikut terhapus.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"

DEPLOY_HOST="${DEPLOY_HOST:-172.16.1.108}"
DEPLOY_USER="${DEPLOY_USER:-root}"
DEPLOY_PATH="${DEPLOY_PATH:-/root/services/web}"
DEPLOY_SSH_KEY="${DEPLOY_SSH_KEY:-}"

BUILD=1
for arg in "$@"; do
  case "$arg" in
    --no-build) BUILD=0 ;;
    -h|--help)
      sed -n '2,12p' "${BASH_SOURCE[0]}"
      exit 0
      ;;
    *)
      echo "Argumen tidak dikenal: $arg" >&2
      exit 1
      ;;
  esac
done

if [[ $BUILD -eq 1 ]]; then
  echo "==> Build ($DIST_DIR)"
  cd "$ROOT_DIR"
  bun run build
fi

if [[ ! -f "$DIST_DIR/index.html" ]]; then
  echo "Error: $DIST_DIR/index.html tidak ada. Jalankan build dulu." >&2
  exit 1
fi

SSH_OPTS=(-o BatchMode=yes -o ConnectTimeout=10)
if [[ -n "$DEPLOY_SSH_KEY" ]]; then
  SSH_OPTS+=(-i "$DEPLOY_SSH_KEY")
fi

echo "==> Cek target $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH"
ssh "${SSH_OPTS[@]}" "$DEPLOY_USER@$DEPLOY_HOST" "mkdir -p '$DEPLOY_PATH'"

echo "==> Rsync $DIST_DIR/ -> $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/"
rsync -az --delete \
  --human-readable \
  --info=stats2 \
  -e "ssh ${SSH_OPTS[*]}" \
  "$DIST_DIR/" "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/"

echo "==> Selesai."
