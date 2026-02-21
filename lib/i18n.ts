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
      name: "한상훈",
      nameEn: "Sang hoon Han",
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
      additionalNote: "웹 개발은 우리가 수행하는 프로젝트 중 가장 기본적인 영역입니다. 실제로는 금융 시스템, 마켓플레이스, AI 기반 서비스 등 더 복잡한 구조의 제품을 설계하고 개발해온 팀입니다.",
      members: {
        frontend: {
          name: "마리아",
          role: "프로젝트 및 프로세스 매니저",
          experience: "프로젝트 관리 및 프로세스 최적화 전문",
          image: "/마리아.png",
          career: "María E. Arévalo L.",
        },
        backend: {
          name: "안드레스",
          role: "풀스택 기술 리더",
          experience: "풀스택 개발 및 기술 리더십",
          image: "/안드레스.png",
          career: "Andrés Dominguez",
        },
        qa: {
          name: "호르헤",
          role: "BI 개발자",
          experience: "비즈니스 인텔리전스 및 데이터 분석",
          image: "/호르헤.png",
          career: "Jorge Cuauro",
        },
      },
    },
    howWeOperate: {
      title: "우리는 이렇게 운영합니다",
      items: [
        "고정 인건비 중심의 조직이 아닌, 프로젝트 중심의 유연한 구조",
        "한국 PM과 글로벌 개발팀이 직접 협업하는 체계",
        "개발팀과 바로 연결되는 구조",
        "불필요한 에이전시 마진을 최소화",
      ],
      resultTitle: "그 결과,",
      resultDescription: "한국 내 동일 수준의 프로젝트 대비 불필요한 중간 비용 없이 보다 효율적인 예산으로 제안드립니다.",
      note: "※ 프로젝트 범위와 난이도에 따라 달라질 수 있습니다.",
    },
    process: {
      title: "진행 프로세스",
      steps: {
        planning: {
          label: "기획 상담",
          description: "프로젝트 목표와 요구사항을 파악하고 전략을 수립합니다.",
          image: "/기획 상담.png",
        },
        design: {
          label: "흐름 설계",
          description: "사용자 경험과 시스템 아키텍처를 설계합니다.",
          image: "/흐름 설계.png",
        },
        development: {
          label: "개발 진행",
          description: "체계적인 개발 프로세스로 안정적인 제품을 구현합니다.",
          image: "/개발 진행.png",
        },
        test: {
          label: "테스트",
          description: "품질 검증을 통해 완성도를 높입니다.",
          image: "/테스트.png",
        },
        launch: {
          label: "런칭 완료",
          description: "성공적인 런칭과 지속적인 사후 관리를 제공합니다.",
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
    businessExpansion: {
      title: "웹 제작을 넘어, 비즈니스 확장을 설계합니다.",
      description1: "우리는 단순한 홈페이지 제작팀이 아닙니다.",
      description2: "MVP 웹부터 기업용 시스템, AI 기반 서비스까지 확장 가능한 구조로 설계합니다.",
    },
    capabilities: {
      title: "개발 역량",
      levels: [
        {
          level: 1,
          title: "Level 1 — 기본 구축",
          subtitle: "기업 웹·앱 수준",
          description: "안정적인 온라인 존재감을 구축합니다",
          items: [
            {
              title: "웹 & 앱 개발",
              description: "회사 홈페이지부터 서비스 플랫폼까지, 사용자가 접하는 모든 화면을 제작합니다",
            },
            {
              title: "다국어 글로벌 구조 설계",
              description: "한국·북미·중남미 시장을 동시에 고려한 서비스로, 한 번의 구축으로 여러 시장에 진출할 수 있습니다",
            },
          ],
        },
        {
          level: 2,
          title: "Level 2 — 플랫폼 구조",
          subtitle: "회원·결제·수익 구조 포함",
          description: "사용자와 수익을 관리하는 비즈니스 플랫폼을 구축합니다",
          items: [
            {
              title: "백엔드 및 API 설계",
              description: "회원 관리, 결제 처리, 데이터 저장 등 비즈니스 로직을 안전하게 처리하는 시스템을 설계합니다",
            },
            {
              title: "마켓플레이스 구축",
              description: "판매자와 구매자가 함께 거래할 수 있는 플랫폼을 구축하여, 중개 수수료 등 새로운 수익 모델을 만들 수 있습니다",
            },
          ],
        },
        {
          level: 3,
          title: "Level 3 — 고난도 시스템",
          subtitle: "AI·금융·자동화·블록체인 등",
          description: "차별화된 경쟁력을 만드는 고도화된 시스템을 구축합니다",
          items: [
            {
              title: "AI 에이전트 구축",
              description: "24시간 자동 상담과 업무 처리가 가능한 AI 시스템으로, 인력 비용을 절감하고 서비스 품질을 향상시킵니다",
            },
            {
              title: "AI API 연동 서비스",
              description: "ChatGPT 등 최신 AI 기능을 서비스에 연결하여, 고객에게 차별화된 경험을 제공합니다",
            },
            {
              title: "금융·정산 시스템",
              description: "결제, 수익 분배, 급여 관리까지 자동화하여, 복잡한 금융 거래를 안전하고 효율적으로 처리합니다",
            },
            {
              title: "블록체인 및 크립토 지갑",
              description: "디지털 자산을 안전하게 관리할 수 있는 시스템으로, 새로운 비즈니스 모델을 실현합니다",
            },
            {
              title: "자동화 봇 개발",
              description: "반복적인 업무를 자동화하여 인력 효율을 극대화하고, 팀이 더 중요한 일에 집중할 수 있게 합니다",
            },
          ],
        },
      ],
    },
    team: {
      title: "글로벌 전문 파트너 팀",
      subtitle: "검증된 전문가들과 함께합니다",
      additionalNote: "웹 개발은 우리가 수행하는 프로젝트 중 가장 기본적인 영역입니다. 실제로는 금융 시스템, 마켓플레이스, AI 기반 서비스 등 더 복잡한 구조의 제품을 설계하고 개발해온 팀입니다.",
      members: {
        frontend: {
          name: "마리아",
          role: "프로젝트 및 프로세스 매니저",
          experience: "프로젝트 관리 및 프로세스 최적화 전문",
          image: "/마리아.png",
          career: "María E. Arévalo L.",
        },
        backend: {
          name: "안드레스",
          role: "풀스택 기술 리더",
          experience: "풀스택 개발 및 기술 리더십",
          image: "/안드레스.png",
          career: "Andrés Dominguez",
        },
        qa: {
          name: "호르헤",
          role: "BI 개발자",
          experience: "비즈니스 인텔리전스 및 데이터 분석",
          image: "/호르헤.png",
          career: "Jorge Cuauro",
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
      name: "Samuel Han",
      nameEn: "Sang hoon Han",
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
    businessExpansion: {
      title: "Más allá de la creación web, diseñamos la expansión empresarial.",
      description1: "No somos simplemente un equipo de creación de páginas web.",
      description2: "Diseñamos estructuras escalables desde MVP web hasta sistemas empresariales y servicios basados en IA.",
    },
    capabilities: {
      title: "Capacidades de Desarrollo",
      levels: [
        {
          level: 1,
          title: "Nivel 1 — Construcción Básica",
          subtitle: "Nivel de web y app empresarial",
          description: "Construimos una presencia online estable",
          items: [
            {
              title: "Desarrollo Web y de Apps",
              description: "Desde páginas web corporativas hasta plataformas de servicios, creamos todas las interfaces que los usuarios encuentran",
            },
            {
              title: "Diseño de Estructura Global Multilingüe",
              description: "Servicio que considera simultáneamente los mercados de Corea, América del Norte y América Latina, permitiendo ingresar a múltiples mercados con una sola construcción",
            },
          ],
        },
        {
          level: 2,
          title: "Nivel 2 — Estructura de Plataforma",
          subtitle: "Incluye estructura de miembros, pagos y ingresos",
          description: "Construimos plataformas de negocio que gestionan usuarios e ingresos",
          items: [
            {
              title: "Diseño de Backend y API",
              description: "Diseñamos sistemas que procesan de manera segura la lógica de negocio como gestión de miembros, procesamiento de pagos y almacenamiento de datos",
            },
            {
              title: "Construcción de Marketplace",
              description: "Construimos plataformas donde vendedores y compradores pueden realizar transacciones juntos, creando nuevos modelos de ingresos como comisiones de intermediación",
            },
          ],
        },
        {
          level: 3,
          title: "Nivel 3 — Sistemas de Alta Complejidad",
          subtitle: "IA, finanzas, automatización, blockchain, etc.",
          description: "Construimos sistemas avanzados que crean ventajas competitivas diferenciadas",
          items: [
            {
              title: "Construcción de Agentes de IA",
              description: "Sistema de IA que permite consultas y procesamiento de trabajo automático 24 horas, reduciendo costos de personal y mejorando la calidad del servicio",
            },
            {
              title: "Servicios de Integración de API de IA",
              description: "Conectamos funciones de IA de última generación como ChatGPT al servicio, proporcionando experiencias diferenciadas a los clientes",
            },
            {
              title: "Sistemas Financieros y de Liquidación",
              description: "Automatizamos desde pagos hasta distribución de ingresos y gestión de nómina, procesando transacciones financieras complejas de manera segura y eficiente",
            },
            {
              title: "Blockchain y Billetera Cripto",
              description: "Sistema que permite gestionar activos digitales de manera segura, realizando nuevos modelos de negocio",
            },
            {
              title: "Desarrollo de Bots de Automatización",
              description: "Automatizamos trabajos repetitivos para maximizar la eficiencia del personal, permitiendo que el equipo se concentre en tareas más importantes",
            },
          ],
        },
      ],
    },
    team: {
      title: "Equipo de Socios Expertos Globales",
      subtitle: "Trabajamos con expertos verificados",
      additionalNote: "El desarrollo web es el área más básica entre los proyectos que realizamos. En realidad, somos un equipo que ha diseñado y desarrollado productos de estructuras más complejas como sistemas financieros, marketplaces y servicios basados en IA.",
      members: {
        frontend: {
          name: "María",
          role: "Gerente de Proyectos y Procesos",
          experience: "Especialista en gestión de proyectos y optimización de procesos",
          image: "/마리아.png",
          career: "María E. Arévalo L.",
        },
        backend: {
          name: "Andrés",
          role: "Líder Técnico Full Stack",
          experience: "Desarrollo Full Stack y liderazgo técnico",
          image: "/안드레스.png",
          career: "Andrés Dominguez",
        },
        qa: {
          name: "Jorge",
          role: "BI Developer",
          experience: "Inteligencia de Negocios y Análisis de Datos",
          image: "/호르헤.png",
          career: "Jorge Cuauro",
        },
      },
    },
    howWeOperate: {
      title: "Así es como operamos",
      items: [
        "Estructura flexible centrada en proyectos, no en una organización centrada en costos fijos de personal",
        "Sistema de colaboración directa entre PM coreano y equipo de desarrollo global",
        "Estructura conectada directamente con el equipo de desarrollo",
        "Minimización de márgenes de agencia innecesarios",
      ],
      resultTitle: "Como resultado,",
      resultDescription: "Proponemos un presupuesto más eficiente sin costos intermedios innecesarios en comparación con proyectos del mismo nivel en Corea.",
      note: "※ Puede variar según el alcance y la dificultad del proyecto.",
    },
    process: {
      title: "Proceso de Desarrollo",
      steps: {
        planning: {
          label: "Consultoría de Planificación",
          description: "Comprendemos los objetivos y requisitos del proyecto para establecer estrategias.",
          image: "/기획 상담.png",
        },
        design: {
          label: "Diseño de Flujo",
          description: "Diseñamos la experiencia del usuario y la arquitectura del sistema.",
          image: "/흐름 설계.png",
        },
        development: {
          label: "Desarrollo en Progreso",
          description: "Implementamos productos estables mediante un proceso de desarrollo sistemático.",
          image: "/개발 진행.png",
        },
        test: {
          label: "Pruebas",
          description: "Mejoramos la calidad mediante verificación de calidad.",
          image: "/테스트.png",
        },
        launch: {
          label: "Lanzamiento Completado",
          description: "Proporcionamos un lanzamiento exitoso y gestión post-lanzamiento continua.",
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
      name: "Samuel Han",
      nameEn: "Sang hoon Han",
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
    businessExpansion: {
      title: "Beyond web creation, we design business expansion.",
      description1: "We are not simply a website creation team.",
      description2: "We design scalable structures from MVP web to enterprise systems and AI-based services.",
    },
    capabilities: {
      title: "Development Capabilities",
      levels: [
        {
          level: 1,
          title: "Level 1 — Basic Construction",
          subtitle: "Enterprise web and app level",
          description: "We build a stable online presence",
          items: [
            {
              title: "Web & App Development",
              description: "From corporate websites to service platforms, we create all interfaces that users encounter",
            },
            {
              title: "Multilingual Global Structure Design",
              description: "Service that simultaneously considers Korean, North American, and Latin American markets, allowing entry into multiple markets with a single build",
            },
          ],
        },
        {
          level: 2,
          title: "Level 2 — Platform Structure",
          subtitle: "Includes member, payment, and revenue structure",
          description: "We build business platforms that manage users and revenue",
          items: [
            {
              title: "Backend and API Design",
              description: "We design systems that securely process business logic such as member management, payment processing, and data storage",
            },
            {
              title: "Marketplace Construction",
              description: "We build platforms where sellers and buyers can transact together, creating new revenue models such as intermediary commissions",
            },
          ],
        },
        {
          level: 3,
          title: "Level 3 — High-Complexity Systems",
          subtitle: "AI, finance, automation, blockchain, etc.",
          description: "We build advanced systems that create differentiated competitive advantages",
          items: [
            {
              title: "AI Agent Construction",
              description: "AI system that enables 24-hour automated consultation and work processing, reducing personnel costs and improving service quality",
            },
            {
              title: "AI API Integration Services",
              description: "We connect cutting-edge AI functions like ChatGPT to services, providing differentiated experiences to customers",
            },
            {
              title: "Financial and Settlement Systems",
              description: "We automate everything from payments to revenue distribution and payroll management, processing complex financial transactions securely and efficiently",
            },
            {
              title: "Blockchain and Crypto Wallet",
              description: "System that enables secure management of digital assets, realizing new business models",
            },
            {
              title: "Automation Bot Development",
              description: "We automate repetitive tasks to maximize personnel efficiency, allowing the team to focus on more important work",
            },
          ],
        },
      ],
    },
    team: {
      title: "Global Expert Partner Team",
      subtitle: "We work with verified experts",
      additionalNote: "Web development is the most basic area among the projects we undertake. In reality, we are a team that has designed and developed products with more complex structures such as financial systems, marketplaces, and AI-based services.",
      members: {
        frontend: {
          name: "María",
          role: "Project and Process Manager",
          experience: "Specialist in project management and process optimization",
          image: "/마리아.png",
          career: "María E. Arévalo L.",
        },
        backend: {
          name: "Andrés",
          role: "Full Stack Technical Leader",
          experience: "Full Stack development and technical leadership",
          image: "/안드레스.png",
          career: "Andrés Dominguez",
        },
        qa: {
          name: "Jorge",
          role: "BI Developer",
          experience: "Business Intelligence and Data Analysis",
          image: "/호르헤.png",
          career: "Jorge Cuauro",
        },
      },
    },
    howWeOperate: {
      title: "How We Operate",
      items: [
        "Flexible project-centered structure, not a fixed personnel cost-centered organization",
        "System of direct collaboration between Korean PM and global development team",
        "Structure directly connected to the development team",
        "Minimizing unnecessary agency margins",
      ],
      resultTitle: "As a result,",
      resultDescription: "We propose a more efficient budget without unnecessary intermediate costs compared to projects of the same level in Korea.",
      note: "※ May vary depending on project scope and difficulty.",
    },
    process: {
      title: "Development Process",
      steps: {
        planning: {
          label: "Planning Consultation",
          description: "We understand project goals and requirements to establish strategies.",
          image: "/기획 상담.png",
        },
        design: {
          label: "Flow Design",
          description: "We design user experience and system architecture.",
          image: "/흐름 설계.png",
        },
        development: {
          label: "Development in Progress",
          description: "We implement stable products through systematic development processes.",
          image: "/개발 진행.png",
        },
        test: {
          label: "Test",
          description: "We enhance quality through quality verification.",
          image: "/테스트.png",
        },
        launch: {
          label: "Launch Complete",
          description: "We provide successful launch and continuous post-launch management.",
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

