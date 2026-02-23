export interface ExperienceProject {
  name: string;
  description: {
    tr: string;
    en: string;
  };
}

export interface Experience {
  company: string;
  role: {
    tr: string;
    en: string;
  };
  period: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  projects?: ExperienceProject[];
}

export const experiences: Experience[] = [
  {
    company: "EGY Yazılım ve Bilişim Teknolojileri",
    role: {
      tr: "Web Developer & Web Designer",
      en: "Web Developer & Web Designer"
    },
    period: {
      tr: "2025 - Halen",
      en: "2025 - Present"
    },
    description: {
      tr: "EGY Yazılım bünyesinde kurumsal kimlik çalışmaları, modern e-ticaret çözümleri (WooCommerce) ve kullanıcı deneyimi odaklı web tasarımları geliştiriyorum. Teknik operasyonlar tarafında Mail Server yönetimi, sunucu bakımı ve genel IT altyapı süreçlerini profesyonelce yöneterek dijital sistemlerin kesintisiz çalışmasını sağlıyorum.",
      en: "At EGY Yazılım, I develop corporate identity works, modern e-commerce solutions (WooCommerce), and user experience-oriented web designs. On the technical operations side, I professionally manage Mail Server management, server maintenance, and general IT infrastructure processes, ensuring the uninterrupted operation of digital systems."
    },
    projects: [
      {
        name: "blackdead.com",
        description: {
          tr: "Kurumsal marka kimliğini yansıtan, modern tasarım hatlarına ve dinamik bir yapıya sahip web platformu.",
          en: "A web platform reflecting corporate brand identity, with modern design lines and a dynamic structure."
        }
      },
      {
        name: "baskentoutlet.com.tr",
        description: {
          tr: "Kullanıcı dostu arayüz ve gelişmiş alışveriş deneyimi sunan, WooCommerce tabanlı kapsamlı e-ticaret sitesi.",
          en: "A comprehensive WooCommerce-based e-commerce site offering a user-friendly interface and advanced shopping experience."
        }
      },
      {
        name: "eg06isg.com",
        description: {
          tr: "İş sağlığı ve güvenliği alanında hizmet veren, profesyonel içerik yönetimi ve kurumsal profile sahip web sitesi.",
          en: "A web site providing services in the field of occupational health and safety, with professional content management and corporate profile."
        }
      },
      {
        name: "EGO Makine İkmal Uygulaması",
        description: {
          tr: "Belediye demirbaş ve makine ikmal süreçlerinin dijital ortamda yönetilmesini sağlayan kurumsal sistem.",
          en: "A corporate system that enables digital management of municipal fixed assets and machine supply processes."
        }
      }
    ]
  }
];
