export type Language = "ko" | "es" | "en";

export const translations = {
  ko: {
    hero: {
      headline: "한국인 PM과 글로벌 개발팀이 함께 만듭니다.",
      primaryButton: "프로젝트 문의하기",
      secondaryButton: "포트폴리오 보기 >",
    },
    problems: {
      title: "해외 외주 시 자주 겪는 문제",
      items: {
        communication: {
          title: "소통 문제",
          description: "전미대륙에서 5년간 거주한 통역사 출신 PM이 해결합니다.",
          image: "/소통문제.png",
        },
        delay: {
          title: "일정 지연",
          description: "한국인 PM의 리드와 오랜기간 함께한 팀원들로, 일정 지연없이 진행합니다.",
          image: "/일정지연.png",
        },
        support: {
          title: "사후관리",
          description: "현지 외주=사후관리 걱정 국내 사업자 등록된 업체로 안전한 사후관리가 가능합니다.",
          image: "/사후관리.png",
        },
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
      title: "대표 PM",
      name: "대표 PM",
      role: "Founder & Product Manager",
      bio: "스타트업 창업자 출신으로, 창업 초기, 해외 진출 단계의 어려움을 직접 경험했습니다. 이러한 경험에서 시작된 웹아메리카는 같은 고민을 하는 창업자들을 돕고자 합니다.",
      experiences: [
        "중남미 커뮤니티 플랫폼 CTO",
        "글로벌 개발팀 웹아메리카 PM",
        "국내 수출 기업 전미 주재원 5년",
        "프리랜서 스페인어 통역사 4년",
        "앱 개발 및 홈페이지 다수 개발",
      ],
    },
    contact: {
      title: "문의하기",
      subtitle: "아직 방향이 명확하지 않아도 괜찮습니다. 함께 정리해보는 시간으로 생각해주세요.",
      step1: {
        question: "어떤 시장을 대상으로 준비 중이신가요?",
        options: {
          korea: "한국 시장",
          latin: "중남미 시장",
          northAmerica: "북미(미국) 시장",
          undecided: "아직 정하지 못함",
          other: "기타 (직접 입력)",
        },
      },
      step2: {
        question: "현재 프로젝트 단계는 어디쯤인가요?",
        options: {
          idea: "아이디어 단계",
          mvp: "MVP 준비 중",
          operating: "운영 중",
          expansion: "해외 확장 고민 중",
        },
      },
      step3: {
        question: "프로젝트를 한 줄로 설명해주세요.",
        placeholder: "예: 한국 시장에서 검증된 서비스를 중남미로 확장하고 싶습니다.",
      },
      nameLabel: "이름",
      emailLabel: "이메일",
      submitButton: "무료 전략 상담 신청하기 >",
      submitting: "제출 중...",
      success: {
        title: "문의가 성공적으로 전송되었습니다!",
        message: "빠른 시일 내에 연락드리겠습니다.",
      },
      error: {
        title: "오류가 발생했습니다",
        message: "다시 시도해주시거나, 직접 연락주시기 바랍니다.",
      },
    },
    team: {
      title: "글로벌 전문 파트너 팀",
      subtitle: "검증된 전문가들과 함께합니다",
      members: {
        frontend: {
          name: "마리아",
          role: "Frontend",
          experience: "React, Next.js 전문 개발",
          image: "/마리아.png",
          career: "5년 이상 프론트엔드 개발 경력",
        },
        backend: {
          name: "호르헤",
          role: "Backend",
          experience: "Node.js, Python 기반 API 개발",
          image: "/호르헤.png",
          career: "5년 이상 백엔드 개발 경력",
        },
        qa: {
          name: "안드레스",
          role: "QA",
          experience: "자동화 테스트 및 품질 관리",
          image: "/안드레스.png",
          career: "3년 이상 QA 경력",
        },
      },
    },
    process: {
      title: "진행 프로세스",
      steps: {
        planning: {
          label: "기획 상담",
          image: "/기획 상담.png",
        },
        design: {
          label: "흐름 설계",
          image: "/흐름 설계.png",
        },
        development: {
          label: "개발 진행",
          image: "/개발 진행.png",
        },
        test: {
          label: "테스트",
          image: "/테스트.png",
        },
        launch: {
          label: "런칭 완료",
          image: "/런칭 완료.png",
        },
      },
    },
    portfolio: {
      title: "어떤 프로젝트를 시작하시나요?",
      subtitle: "다양한 산업과 시장에서 검증된 프로젝트를 확인하세요",
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
      headline: "Un PM coreano y un equipo de desarrollo global trabajan juntos.",
      primaryButton: "Consultar Proyecto",
      secondaryButton: "Ver Portafolio >",
    },
    problems: {
      title: "Problemas comunes en outsourcing internacional",
      items: {
        communication: {
          title: "Problemas de comunicación",
          description: "Un PM ex intérprete que ha residido en las Américas durante 5 años lo resuelve.",
          image: "/소통문제.png",
        },
        delay: {
          title: "Retrasos en el cronograma",
          description: "Con el liderazgo del PM coreano y miembros del equipo que han trabajado juntos durante mucho tiempo, avanzamos sin retrasos en el cronograma.",
          image: "/일정지연.png",
        },
        support: {
          title: "Soporte post-lanzamiento",
          description: "Outsourcing local = preocupación por el soporte post-lanzamiento. Empresa registrada en el país para un soporte post-lanzamiento seguro.",
          image: "/사후관리.png",
        },
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
      title: "PM Representativo",
      name: "PM Representativo",
      role: "Fundador y Gerente de Producto",
      bio: "Como fundador de una startup, he experimentado directamente las dificultades de las etapas iniciales y la expansión internacional. Web America, que comenzó con estas experiencias, quiere ayudar a los emprendedores con las mismas preocupaciones.",
      experiences: [
        "CTO de plataforma comunitaria de América Latina",
        "PM de Web America, equipo de desarrollo global",
        "Residente de empresa exportadora coreana en las Américas durante 5 años",
        "Intérprete de español freelance durante 4 años",
        "Desarrollo de múltiples aplicaciones y sitios web",
      ],
    },
    contact: {
      title: "Consulta",
      subtitle: "Está bien si la dirección aún no está clara. Piensa en esto como un tiempo para organizar juntos.",
      step1: {
        question: "¿Para qué mercado se está preparando?",
        options: {
          korea: "Mercado Coreano",
          latin: "Mercado de América Latina/Central",
          northAmerica: "Mercado de América del Norte (EE.UU.)",
          undecided: "Aún no lo he decidido",
          other: "Otro (escribir directamente)",
        },
      },
      step2: {
        question: "¿En qué etapa se encuentra actualmente su proyecto?",
        options: {
          idea: "Etapa de idea",
          mvp: "Preparando MVP",
          operating: "En operación",
          expansion: "Considerando expansión internacional",
        },
      },
      step3: {
        question: "Describa su proyecto en una línea.",
        placeholder: "Ej: Quiero expandir un servicio verificado en el mercado coreano a América Latina.",
      },
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      submitButton: "Solicitar Consultoría Estratégica Gratuita >",
      submitting: "Enviando...",
      success: {
        title: "¡Consulta enviada con éxito!",
        message: "Nos pondremos en contacto contigo pronto.",
      },
      error: {
        title: "Ocurrió un error",
        message: "Por favor, inténtalo de nuevo o contáctanos directamente.",
      },
    },
    team: {
      title: "Equipo de Socios Expertos Globales",
      subtitle: "Trabajamos con expertos verificados",
      members: {
        frontend: {
          name: "María",
          role: "Frontend",
          experience: "Desarrollo especializado en React, Next.js",
          image: "/마리아.png",
          career: "Más de 5 años de experiencia en desarrollo frontend",
        },
        backend: {
          name: "Jorge",
          role: "Backend",
          experience: "Desarrollo de API basado en Node.js, Python",
          image: "/호르헤.png",
          career: "Más de 5 años de experiencia en desarrollo backend",
        },
        qa: {
          name: "Andrés",
          role: "QA",
          experience: "Pruebas automatizadas y gestión de calidad",
          image: "/안드레스.png",
          career: "Más de 3 años de experiencia en QA",
        },
      },
    },
    process: {
      title: "Proceso de Desarrollo",
      steps: {
        planning: {
          label: "Consultoría de Planificación",
          image: "/기획 상담.png",
        },
        design: {
          label: "Diseño de Flujo",
          image: "/흐름 설계.png",
        },
        development: {
          label: "Desarrollo en Progreso",
          image: "/개발 진행.png",
        },
        test: {
          label: "Pruebas",
          image: "/테스트.png",
        },
        launch: {
          label: "Lanzamiento Completado",
          image: "/런칭 완료.png",
        },
      },
    },
    portfolio: {
      title: "¿Qué proyecto va a iniciar?",
      subtitle: "Consulte proyectos verificados en diversas industrias y mercados",
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
      headline: "A Korean PM and a global development team work together.",
      primaryButton: "Inquire Project",
      secondaryButton: "View Portfolio >",
    },
    problems: {
      title: "Common problems in international outsourcing",
      items: {
        communication: {
          title: "Communication issues",
          description: "A former interpreter PM who has resided in the Americas for 5 years solves it.",
          image: "/소통문제.png",
        },
        delay: {
          title: "Schedule delays",
          description: "With the leadership of a Korean PM and team members who have worked together for a long time, we proceed without schedule delays.",
          image: "/일정지연.png",
        },
        support: {
          title: "Post-launch support",
          description: "Local outsourcing = post-launch support concerns. Domestically registered company for safe post-launch support.",
          image: "/사후관리.png",
        },
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
      title: "Representative PM",
      name: "Representative PM",
      role: "Founder & Product Manager",
      bio: "As a startup founder, I have directly experienced the difficulties of the initial stages and international expansion. Web America, which started from these experiences, wants to help entrepreneurs with the same concerns.",
      experiences: [
        "CTO of Latin American community platform",
        "PM of Web America, global development team",
        "Resident of Korean export company in the Americas for 5 years",
        "Freelance Spanish interpreter for 4 years",
        "Development of multiple apps and websites",
      ],
    },
    contact: {
      title: "Inquiry",
      subtitle: "It's okay if the direction isn't clear yet. Think of this as time to organize together.",
      step1: {
        question: "Which market are you preparing for?",
        options: {
          korea: "Korean Market",
          latin: "Latin/Central American Market",
          northAmerica: "North American (US) Market",
          undecided: "Haven't decided yet",
          other: "Other (write directly)",
        },
      },
      step2: {
        question: "What stage is your project currently at?",
        options: {
          idea: "Idea stage",
          mvp: "Preparing MVP",
          operating: "In operation",
          expansion: "Considering international expansion",
        },
      },
      step3: {
        question: "Describe your project in one line.",
        placeholder: "Ex: I want to expand a service verified in the Korean market to Latin America.",
      },
      nameLabel: "Name",
      emailLabel: "Email",
      submitButton: "Request Free Strategic Consultation >",
      submitting: "Submitting...",
      success: {
        title: "Inquiry sent successfully!",
        message: "We will contact you soon.",
      },
      error: {
        title: "An error occurred",
        message: "Please try again or contact us directly.",
      },
    },
    team: {
      title: "Global Expert Partner Team",
      subtitle: "We work with verified experts",
      members: {
        frontend: {
          name: "María",
          role: "Frontend",
          experience: "Specialized development in React, Next.js",
          image: "/마리아.png",
          career: "Over 5 years of frontend development experience",
        },
        backend: {
          name: "Jorge",
          role: "Backend",
          experience: "Node.js, Python-based API development",
          image: "/호르헤.png",
          career: "Over 5 years of backend development experience",
        },
        qa: {
          name: "Andrés",
          role: "QA",
          experience: "Automated testing and quality management",
          image: "/안드레스.png",
          career: "Over 3 years of QA experience",
        },
      },
    },
    process: {
      title: "Development Process",
      steps: {
        planning: {
          label: "Planning Consultation",
          image: "/기획 상담.png",
        },
        design: {
          label: "Flow Design",
          image: "/흐름 설계.png",
        },
        development: {
          label: "Development in Progress",
          image: "/개발 진행.png",
        },
        test: {
          label: "Test",
          image: "/테스트.png",
        },
        launch: {
          label: "Launch Complete",
          image: "/런칭 완료.png",
        },
      },
    },
    portfolio: {
      title: "What project are you starting?",
      subtitle: "Check out verified projects across various industries and markets",
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

