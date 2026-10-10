export interface SkillGroup {
  category: string;
  items: string[];
}

/** Toolbox sesuai CV. Tidak ada teknologi yang ditambah tanpa sumber. */
export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "Golang (GoFiber, gRPC)",
      "PHP (Laravel, Inertia.js, Livewire, Yii2)",
      "Node.js (Hapi.js, React, Express, Nest.js)",
      "Python (FastAPI, Flask, AWS Chalice)",
    ],
  },
  {
    category: "SQL Database",
    items: ["PostgreSQL", "MySQL/MariaDB", "EDB"],
  },
  {
    category: "Web Development",
    items: ["HTML5", "CSS3", "jQuery", "Bootstrap", "Tailwind"],
  },
  {
    category: "Cloud Platform",
    items: [
      "AWS Lambda",
      "AWS EC2",
      "AWS RDS",
      "AWS MQ",
      "AWS Lightsail",
      "AWS SQS",
      "AWS SNS",
      "Kubernetes",
    ],
  },
  {
    category: "System Administration",
    items: ["Linux (Debian, Ubuntu, CentOS)", "MikroTik", "pfSense"],
  },
  {
    category: "Virtualization",
    items: ["Proxmox", "QEMU/KVM"],
  },
  {
    category: "Storage",
    items: ["Ceph Cluster", "NAS (FreeNAS & TrueNAS)"],
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "Redis", "RabbitMQ", "WHM/cPanel", "Bash", "Soketi", "CloudPanel"],
  },
];
