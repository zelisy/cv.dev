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
    role: "Web Developer & Web Designer",
    period: "2025 - Halen",
    description: "EGY Yazılım bünyesinde kurumsal kimlik çalışmaları, modern e-ticaret çözümleri (WooCommerce) ve kullanıcı deneyimi odaklı web tasarımları geliştiriyorum. Teknik operasyonlar tarafında Mail Server yönetimi, sunucu bakımı ve genel IT altyapı süreçlerini profesyonelce yöneterek dijital sistemlerin kesintisiz çalışmasını sağlıyorum.",
    projects: [
      {
        name: "blackdead.com",
        description: "Kurumsal marka kimliğini yansıtan, modern tasarım hatlarına ve dinamik bir yapıya sahip web platformu."
      },
      {
        name: "baskentoutlet.com.tr",
        description: "Kullanıcı dostu arayüz ve gelişmiş alışveriş deneyimi sunan, WooCommerce tabanlı kapsamlı e-ticaret sitesi."
      },
      {
        name: "eg06isg.com",
        description: "İş sağlığı ve güvenliği alanında hizmet veren, profesyonel içerik yönetimi ve kurumsal profile sahip web sitesi."
      },
      {
        name: "EGO Makine İkmal Uygulaması",
        description: "Belediye demirbaş ve makine ikmal süreçlerinin dijital ortamda yönetilmesini sağlayan kurumsal sistem."
      }
    ]
  }
];
