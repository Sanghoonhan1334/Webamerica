export type Language = "ko" | "es" | "en";

export const translations = {
  ko: {
    hero: {
      headline: "한국 감성을 이해하는 PM과 글로벌 개발팀이 함께 만드는 웹·앱",
      primaryButton: "프로젝트 문의하기",
      secondaryButton: "포트폴리오 보기 >",
    },
    problems: {
      title: "해외 외주 시 자주 겪는 문제",
      items: {
        communication: "소통 문제",
        misunderstanding: "요구사항 오해",
        delay: "일정 지연",
        schedule: "시차/스케쥴 충돌",
      },
    },
    solution: {
      title: "웹아메리카의 해결 구조",
      items: {
        pm: "한국 PM 직접 관리",
        pmDesc: "한국 감성을 이해하는 PM이 프로젝트 전 과정을 관리합니다",
        team: "글로벌 전문 개발팀",
        teamDesc: "검증된 글로벌 개발팀과의 체계적인 협업 프로세스",
      },
    },
    profile: {
      title: "대표 PM 소개",
      name: "대표 PM",
      role: "Founder & Product Manager",
      bio: "스타트업 창업자 출신으로, 초기 단계의 부담과 어려움을 직접 경험했습니다. 개발이 막막했던 경험에서 시작된 이 PM 모델을 통해, 같은 고민을 하는 창업자들을 돕고자 합니다.",
      experiences: [
        "스타트업 창업 경험",
        "풀스택 프로젝트 참여 경험",
        "글로벌 개발팀 협업",
        "스페인어 커뮤니케이션 가능",
      ],
    },
    contact: {
      title: "프로젝트 문의",
      nameLabel: "이름",
      emailLabel: "이메일",
      messageLabel: "프로젝트 내용",
      submitButton: "상담 신청하기 >",
    },
    team: {
      title: "글로벌 전문 파트너 팀",
      subtitle: "검증된 전문가들과 함께합니다",
      members: {
        frontend: {
          name: "Frontend Developer",
          role: "Frontend",
          experience: "React, Next.js 전문 개발",
        },
        backend: {
          name: "Backend Developer",
          role: "Backend",
          experience: "Node.js, Python 기반 API 개발",
        },
        qa: {
          name: "QA Engineer",
          role: "QA",
          experience: "자동화 테스트 및 품질 관리",
        },
      },
    },
    process: {
      title: "진행 프로세스",
      steps: {
        planning: "기획 상담",
        design: "흐름 설계",
        development: "개발 진행",
        test: "테스트",
        launch: "런칭 완료",
      },
    },
    portfolio: {
      title: "포트폴리오",
      subtitle: "다양한 산업과 시장에서 검증된 프로젝트 경험을 보유하고 있습니다.",
      items: {
        corporate: {
          title: "글로벌 기업 홈페이지",
          description: "북미 및 중남미 시장을 위한 다국어 홈페이지 개발",
          category: "웹사이트",
        },
        startup: {
          title: "스타트업 앱 개발",
          description: "초기 단계부터 MVP까지 전 과정 PM 및 개발 지원",
          category: "앱 개발",
        },
        landing: {
          title: "다국어 랜딩 페이지",
          description: "한국어, 영어, 스페인어 지원 랜딩 페이지",
          category: "랜딩 페이지",
        },
        ecommerce: {
          title: "E-commerce 플랫폼",
          description: "해외 진출을 위한 전자상거래 플랫폼 구축",
          category: "E-commerce",
        },
        system: {
          title: "기업용 관리 시스템",
          description: "글로벌 팀 협업을 위한 관리 시스템 개발",
          category: "시스템 개발",
        },
        mobile: {
          title: "모바일 앱 개발",
          description: "React Native 기반 크로스 플랫폼 앱 개발",
          category: "모바일 앱",
        },
      },
    },
  },
  es: {
    hero: {
      headline: "Aplicaciones web creadas por un PM que entiende la sensibilidad coreana y un equipo de desarrollo global",
      primaryButton: "Consultar Proyecto",
      secondaryButton: "Ver Portafolio >",
    },
    problems: {
      title: "Problemas comunes en outsourcing internacional",
      items: {
        communication: "Problemas de comunicación",
        misunderstanding: "Malentendidos de requisitos",
        delay: "Retrasos en el cronograma",
        schedule: "Conflictos de zona horaria/horario",
      },
    },
    solution: {
      title: "Estructura de solución de Web America",
      items: {
        pm: "Gestión directa por PM coreano",
        pmDesc: "Un PM que entiende la sensibilidad coreana gestiona todo el proceso del proyecto",
        team: "Equipo de desarrollo global especializado",
        teamDesc: "Proceso de colaboración sistemático con un equipo de desarrollo global verificado",
      },
    },
    profile: {
      title: "Introducción del PM Representativo",
      name: "PM Representativo",
      role: "Fundador y Gerente de Producto",
      bio: "Como fundador de una startup, he experimentado directamente las cargas y dificultades de las etapas iniciales. A través de este modelo PM que comenzó con la experiencia de desarrollo abrumador, quiero ayudar a los emprendedores con las mismas preocupaciones.",
      experiences: [
        "Experiencia en fundación de startup",
        "Experiencia en proyectos full-stack",
        "Colaboración con equipo de desarrollo global",
        "Comunicación en español posible",
      ],
    },
    contact: {
      title: "Consulta de Proyecto",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      messageLabel: "Contenido del proyecto",
      submitButton: "Solicitar Consulta >",
    },
    team: {
      title: "Equipo de Socios Expertos Globales",
      subtitle: "Trabajamos con expertos verificados",
      members: {
        frontend: {
          name: "Frontend Developer",
          role: "Frontend",
          experience: "Desarrollo especializado en React, Next.js",
        },
        backend: {
          name: "Backend Developer",
          role: "Backend",
          experience: "Desarrollo de API basado en Node.js, Python",
        },
        qa: {
          name: "QA Engineer",
          role: "QA",
          experience: "Pruebas automatizadas y gestión de calidad",
        },
      },
    },
    process: {
      title: "Proceso de Desarrollo",
      steps: {
        planning: "Consultoría de Planificación",
        design: "Diseño de Flujo",
        development: "Desarrollo en Progreso",
        test: "Pruebas",
        launch: "Lanzamiento Completado",
      },
    },
    portfolio: {
      title: "Portafolio",
      subtitle: "Tenemos experiencia en proyectos verificados en diversas industrias y mercados.",
      items: {
        corporate: {
          title: "Página Web Corporativa Global",
          description: "Desarrollo de página web multilingüe para mercados de América del Norte y Central/Sur",
          category: "Sitio Web",
        },
        startup: {
          title: "Desarrollo de App para Startup",
          description: "Soporte completo de PM y desarrollo desde la etapa inicial hasta MVP",
          category: "Desarrollo de App",
        },
        landing: {
          title: "Página de Aterrizaje Multilingüe",
          description: "Página de aterrizaje que soporta coreano, inglés y español",
          category: "Página de Aterrizaje",
        },
        ecommerce: {
          title: "Plataforma E-commerce",
          description: "Construcción de plataforma de comercio electrónico para expansión internacional",
          category: "E-commerce",
        },
        system: {
          title: "Sistema de Gestión Empresarial",
          description: "Desarrollo de sistema de gestión para colaboración de equipos globales",
          category: "Desarrollo de Sistema",
        },
        mobile: {
          title: "Desarrollo de App Móvil",
          description: "Desarrollo de app multiplataforma basado en React Native",
          category: "App Móvil",
        },
      },
    },
  },
  en: {
    hero: {
      headline: "Web apps created by a PM who understands Korean sensibility and a global development team",
      primaryButton: "Inquire Project",
      secondaryButton: "View Portfolio >",
    },
    problems: {
      title: "Common problems in international outsourcing",
      items: {
        communication: "Communication issues",
        misunderstanding: "Requirement misunderstandings",
        delay: "Schedule delays",
        schedule: "Time zone/schedule conflicts",
      },
    },
    solution: {
      title: "Web America's Solution Structure",
      items: {
        pm: "Direct management by Korean PM",
        pmDesc: "A PM who understands Korean sensibility manages the entire project process",
        team: "Specialized global development team",
        teamDesc: "Systematic collaboration process with a verified global development team",
      },
    },
    profile: {
      title: "Representative PM Introduction",
      name: "Representative PM",
      role: "Founder & Product Manager",
      bio: "As a startup founder, I have directly experienced the burdens and difficulties of the initial stages. Through this PM model that started from the overwhelming development experience, I want to help entrepreneurs with the same concerns.",
      experiences: [
        "Startup founding experience",
        "Full-stack project participation experience",
        "Global development team collaboration",
        "Spanish communication possible",
      ],
    },
    contact: {
      title: "Project Inquiry",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Project content",
      submitButton: "Request Consultation >",
    },
    team: {
      title: "Global Expert Partner Team",
      subtitle: "We work with verified experts",
      members: {
        frontend: {
          name: "Frontend Developer",
          role: "Frontend",
          experience: "Specialized development in React, Next.js",
        },
        backend: {
          name: "Backend Developer",
          role: "Backend",
          experience: "Node.js, Python-based API development",
        },
        qa: {
          name: "QA Engineer",
          role: "QA",
          experience: "Automated testing and quality management",
        },
      },
    },
    process: {
      title: "Development Process",
      steps: {
        planning: "Planning Consultation",
        design: "Flow Design",
        development: "Development in Progress",
        test: "Test",
        launch: "Launch Complete",
      },
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "We have experience in verified projects across various industries and markets.",
      items: {
        corporate: {
          title: "Global Corporate Homepage",
          description: "Multilingual homepage development for North American and Central/South American markets",
          category: "Website",
        },
        startup: {
          title: "Startup App Development",
          description: "Full process PM and development support from initial stage to MVP",
          category: "App Development",
        },
        landing: {
          title: "Multilingual Landing Page",
          description: "Landing page supporting Korean, English, and Spanish",
          category: "Landing Page",
        },
        ecommerce: {
          title: "E-commerce Platform",
          description: "E-commerce platform construction for international expansion",
          category: "E-commerce",
        },
        system: {
          title: "Enterprise Management System",
          description: "Management system development for global team collaboration",
          category: "System Development",
        },
        mobile: {
          title: "Mobile App Development",
          description: "Cross-platform app development based on React Native",
          category: "Mobile App",
        },
      },
    },
  },
};

