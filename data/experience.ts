export interface ExperienceProject {
  name: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  projects?: ExperienceProject[];
}

export const experiences: Experience[] = [
  {
    company: "EGY Yazılım ve Bilişim Teknolojileri",
    role: "Full Stack Developer",
    period: "2024 - Halen",
    description: "Web tabanlı uygulamaların geliştirilmesi, analizi ve test süreçlerinde aktif rol alıyorum. Modern teknolojiler kullanarak sürdürülebilir çözümler üretiyorum.",
    projects: [
      {
        name: "EGO Makine İkmal Uygulaması",
        description: "Belediye demirbaş ve makine ikmal süreçlerinin dijital ortamda yönetilmesini sağlayan kapsamlı bir sistem."
      },
      {
        name: "Kaldırım Sahaf Kitap Stok Takip Sistemi",
        description: "Kitap stoklarının dijital ortamda takip edilmesini sağlayan kapsamlı bir stok yönetim sistemi."
      }
    ]
  }
];
