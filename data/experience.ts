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
    company: "Bulut İletişim ve Telekomünikasyon",
    role: {
      tr: "IT Sorumlusu",
      en: "IT Officer"
    },
    period: {
      tr: "2026 - Halen",
      en: "2026 - Present"
    },
    description: {
      tr: "IT departmanında şirketin bilgi teknolojileri altyapısının yönetimi, sistem sürekliliğinin sağlanması, ağ güvenliği, sunucu bakımları, teknik operasyonlar ve IT destek süreçlerinden sorumluyum.",
      en: "Responsible for managing the company's IT infrastructure, ensuring system continuity, maintaining network security, performing server maintenance, overseeing technical operations, and providing IT support."
    }
  },
  {
    company: "EGY Yazılım ve Bilişim Teknolojileri",
    role: {
      tr: "Web Developer & Web Designer",
      en: "Web Developer & Web Designer"
    },
    period: {
      tr: "2025 - 2026",
      en: "2025 - 2026"
    },
    description: {
      tr: "EGY Yazılım bünyesinde kurumsal kimlik çalışmaları, modern e-ticaret çözümleri (WooCommerce) ve kullanıcı deneyimi odaklı web tasarımları geliştirdim. Teknik operasyonlar tarafında Mail Server yönetimi, sunucu bakımı ve genel IT altyapı süreçlerini profesyonelce yöneterek dijital sistemlerin kesintisiz çalışmasını sağladım.",
      en: "At EGY Yazılım, I developed corporate identity works, modern e-commerce solutions (WooCommerce), and user experience-oriented web designs. On the technical operations side, I professionally managed Mail Server management, server maintenance, and general IT infrastructure processes, ensuring the uninterrupted operation of digital systems."
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
        name: "eg06isg.com",
        description: {
          tr: "İş sağlığı ve güvenliği alanında hizmet veren, profesyonel içerik yönetimi ve kurumsal profile sahip web sitesi.",
          en: "A web site providing services in the field of occupational health and safety, with professional content management and corporate profile."
        }
      },

      {
        name: "eggrupsaleg.com",
        description: {
          tr: "Endüstriyel Pompalarda Yeni Nesil Akıllı Koruma Teknolojisi için tasarlanan SALEG tanıtım web sitesi.",
          en: "SALEG's promotional website is designed for next-generation intelligent protection technology in industrial pumps."
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
