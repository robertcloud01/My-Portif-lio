export type Dictionary = typeof pt;

export const pt = {
    nav: {
        expertise: "Serviços",
        pricing: "Preços",
        projects: "Projetos",
        about: "Sobre",
        contact: "Vamos Conversar",
    },
    hero: {
        badge: "Disponível para novos projetos",
        title_prefix: "Criando",
        title_highlight: "Experiências",
        title_suffix: "Digitais",
        description: "Construo aplicações web acessíveis, pixel-perfect e de alta performance que ajudam negócios a crescer e se destacar na era digital.",
        cta_primary: "Ver Portfólio",
        cta_secondary: "Entrar em Contato",
        trust_label: "Avaliação de clientes",
        trust_rating: "4.9 de 32 avaliações",
        stat_1_value: "50+",
        stat_1_label: "Projetos entregues",
        stat_2_value: "5+",
        stat_2_label: "Anos de experiência",
        stat_3_value: "98%",
        stat_3_label: "Clientes satisfeitos",
    },
    services: {
        title: "Meus Serviços",
        subtitle: "Escolha a solução ideal para o seu negócio. Projetos sob medida com foco em qualidade, velocidade e elegância.",
        cta: "Solicitar Orçamento",
        items: [
            {
                category: "Web",
                title: "Desenvolvimento Web Moderno",
                description: "Sites rápidos, responsivos e sofisticados construídos com Next.js, React e Tailwind CSS.",
                price: "A partir de R$ 1.500",
            },
            {
                category: "Marketing",
                title: "Landing Pages de Alta Conversão",
                description: "Layouts estratégicos desenhados para escalar negócios com máxima performance e copy persuasiva.",
                price: "A partir de R$ 900",
            },
            {
                category: "E-commerce",
                title: "E-commerce & Sistemas",
                description: "Lojas virtuais sob medida e painéis administrativos completos para gerenciar seu negócio digital.",
                price: "A partir de R$ 3.500",
            },
            {
                category: "Automação",
                title: "Integração com IA",
                description: "Geração inteligente de código e automação para acelerar processos de desenvolvimento.",
                price: "A partir de R$ 1.200",
            },
            {
                category: "Design",
                title: "UI/UX Design Premium",
                description: "Interfaces refinadas e minimalistas focadas em experiências de usuário de alto padrão.",
                price: "A partir de R$ 800",
            },
            {
                category: "Backend",
                title: "Automação & APIs",
                description: "Chatbots, webhooks e fluxos inteligentes para otimizar suas operações.",
                price: "A partir de R$ 1.000",
            },
        ],
    },
    process: {
        title: "Como Funciona",
        subtitle: "Um processo simples e transparente, do primeiro contato até o site no ar.",
        cta: "Começar Agora",
        steps: [
            {
                title: "Contato",
                description: "Você me conta sobre seu projeto, objetivos e prazos através do formulário ou WhatsApp.",
            },
            {
                title: "Proposta",
                description: "Envio um orçamento detalhado com escopo, prazo e tecnologias que serão utilizadas.",
            },
            {
                title: "Desenvolvimento",
                description: "Construo seu projeto com atualizações periódicas para você acompanhar cada etapa.",
            },
            {
                title: "Entrega",
                description: "Site publicado, testado e com suporte incluso para garantir que tudo funcione perfeitamente.",
            },
        ],
    },
    pricing: {
        title: "Planos e Preços",
        subtitle: "Pacotes transparentes para todo tipo de projeto. Sem taxas escondidas.",
        popular: "Mais Popular",
        cta: "Escolher Plano",
        custom_title: "Precisa de algo diferente?",
        custom_subtitle: "Todo projeto é único. Vamos conversar e montar uma proposta sob medida para você.",
        custom_cta: "Falar sobre meu projeto",
        plans: [
            {
                name: "Essencial",
                price: "R$ 900",
                period: "projeto único",
                description: "Ideal para landing pages e sites institucionais simples.",
                features: [
                    "Até 3 seções",
                    "Design responsivo",
                    "Otimização básica de SEO",
                    "1 rodada de revisão",
                    "Entrega em até 7 dias",
                ],
            },
            {
                name: "Profissional",
                price: "R$ 2.500",
                period: "projeto único",
                description: "Para negócios que precisam de um site completo e robusto.",
                features: [
                    "Até 8 páginas",
                    "Animações premium",
                    "Painel administrativo",
                    "Integração com APIs",
                    "3 rodadas de revisão",
                    "Suporte por 30 dias",
                ],
            },
            {
                name: "Empresarial",
                price: "R$ 5.000+",
                period: "sob consulta",
                description: "E-commerce, sistemas e plataformas SaaS completas.",
                features: [
                    "Páginas ilimitadas",
                    "E-commerce completo",
                    "Integração com IA",
                    "Painel administrativo avançado",
                    "Revisões ilimitadas",
                    "Suporte prioritário por 90 dias",
                ],
            },
        ],
    },
    projects: {
        title: "Projetos em Destaque",
        subtitle: "Uma seleção dos meus trabalhos recentes, destacando profundidade técnica e polimento visual.",
        cta_github: "Ver GitHub",
        cta_case: "Ver Case Study",
        in_progress: "Em Desenvolvimento",
        items: [
            {
                title: "Porsche Experience",
                category: "Automotive Showcase",
                description: "Uma experiência digital cinematográfica para a Porsche, focada em performance visual, animações fluidas e design de luxo.",
            },
            {
                title: "Miracle House Architecture",
                category: "Showcase Arquitetura",
                description: "Um santuário contemporâneo projetado para harmonizar com as colinas enevoadas. Uma aula mestre em modernismo orgânico.",
            },
            {
                title: "Plataforma de Histórias Lumina",
                category: "SaaS Full Stack",
                description: "Uma plataforma abrangente para criadores escreverem, gerenciarem e monetizarem suas histórias animadas.",
            },
            {
                title: "Camaleão Store Engine",
                category: "Motor E-Commerce",
                description: "Motor de e-commerce headless de alta performance com inventário em tempo real e recomendações via IA.",
            },
            {
                title: "Saitama Sushi",
                category: "Aplicação Web",
                description: "Plataforma de delivery premium de sushi com tema escuro, animações sofisticadas e sistema de fidelidade gamificado.",
            },
            {
                title: "Valhallas Motors",
                category: "Showcase Automotivo",
                description: "Um showcase premium para veículos de alta performance, apresentando galerias dinâmicas e especificações detalhadas.",
            },
            {
                title: "Aston Martin Experience",
                category: "Luxury Showcase",
                description: "Uma experiência digital imersiva para a marca Aston Martin, focada em elegância visual e interatividade de alto nível.",
            },
            {
                title: "Ilíria Psicologia",
                category: "Website Institucional",
                description: "Website profissional para clínica de psicologia, com design acolhedor, apresentação da equipe e agendamento de consultas.",
            },
        ],
    },
    about: {
        title: "Além do Código",
        p1: "Meu nome é Roberto Pereira, e minha história com a programação começou de um jeito quase mágico: meu sonho sempre foi criar jogos, mundos interativos onde tudo fosse possível. No início, cada linha de código era uma porta para um universo novo, um pequeno laboratório de possibilidades infinitas.",
        p2: "Com o tempo, percebi que minha paixão ia além dos jogos. A programação me permitiu dar vida à criatividade das pessoas, transformar ideias, sonhos e conceitos em experiências digitais reais. Hoje, cada projeto que crio é mais do que apenas código: é uma ponte entre a imaginação e a realidade, um espaço onde o design, a tecnologia e a inovação se encontram para contar histórias que impactam, inspiram e conectam.",
        p3: "Aqui, no meu portfólio, você não vê apenas sites ou sistemas; vê ideias ganhando forma, criatividade sendo materializada e experiências digitais pensadas para impressionar. É essa busca por transformar inspiração em realidade que guia meu trabalho e define meu caminho como desenvolvedor e criador.",
        timeline_title: "Jornada",
        timeline: [
            {
                year: "2024",
                role: "Dev Full Stack Sênior",
                company: "Freelance / Agência",
                description: "Liderando o desenvolvimento de plataformas SaaS complexas e soluções de e-commerce de alta performance.",
            },
            {
                year: "2022",
                role: "Especialista Frontend",
                company: "Tech Startups",
                description: "Focado no ecossistema React, otimização de performance e criação de interações de UI fluidas.",
            },
            {
                year: "2020",
                role: "Desenvolvedor Web",
                company: "Estúdio Digital",
                description: "Início da jornada construindo temas WordPress personalizados e landing pages responsivas.",
            },
        ],
    },
    testimonials: {
        title: "Confiança do Cliente",
        items: [
            {
                quote: "Simplesmente excepcional. O nível de detalhe e a capacidade técnica demonstrada na nossa nova plataforma são inigualáveis.",
                role: "CTO, Fintech Startup"
            },
            {
                quote: "Transformou nossa presença digital completamente. O site não é apenas bonito, mas incrivelmente rápido e funcional.",
                role: "Founder, Marca E-com"
            },
            {
                quote: "Um verdadeiro profissional que entende tanto de código quanto de design. Entregar o projeto antes do prazo foi um bônus.",
                role: "Gerente de Produto"
            }
        ]
    },
    benefits: {
        title: "Por Que Trabalhar Comigo",
        subtitle: "Mais do que código: um parceiro comprometido com o resultado do seu projeto.",
        items: [
            { title: "Comunicação Direta", description: "Fale direto comigo, sem intermediários, do briefing à entrega final." },
            { title: "Código de Qualidade", description: "Projetos escaláveis, bem documentados e seguindo as melhores práticas do mercado." },
            { title: "Prazos Cumpridos", description: "Cronogramas realistas e atualizações constantes para você acompanhar cada etapa." },
            { title: "Design Premium", description: "Interfaces modernas e cuidadosamente pensadas para converter e encantar usuários." },
            { title: "Performance Real", description: "Sites otimizados para carregar rápido e ranquear bem nos mecanismos de busca." },
            { title: "Suporte Pós-Entrega", description: "Acompanhamento após o lançamento para ajustes, dúvidas e pequenas melhorias." },
            { title: "Tecnologia Atual", description: "Uso das ferramentas mais modernas do mercado: Next.js, React, IA e mais." },
            { title: "Preço Justo", description: "Orçamentos transparentes, sem surpresas ou taxas escondidas no meio do caminho." },
        ],
    },
    faq: {
        title: "Perguntas Frequentes",
        subtitle: "Tudo o que você precisa saber antes de começar seu projeto.",
        items: [
            {
                question: "Quanto tempo leva para desenvolver meu site?",
                answer: "Depende do escopo: landing pages ficam prontas em cerca de 7 dias, sites institucionais em 2-3 semanas e sistemas/e-commerce completos entre 4-8 semanas."
            },
            {
                question: "Como funciona o pagamento?",
                answer: "Trabalho com 50% no início do projeto para reserva de agenda e 50% na entrega final. Para projetos maiores, posso dividir em mais etapas."
            },
            {
                question: "Vocês oferecem suporte depois da entrega?",
                answer: "Sim, todos os planos incluem um período de suporte gratuito para ajustes e dúvidas. Também ofereço planos de manutenção mensal."
            },
            {
                question: "Posso pedir alterações no site depois de pronto?",
                answer: "Claro. Cada plano inclui rodadas de revisão durante o desenvolvimento, e após a entrega alterações extras podem ser orçadas à parte."
            },
            {
                question: "Meu site vai funcionar bem no celular?",
                answer: "Sim, todos os projetos são desenvolvidos com design responsivo, garantindo uma ótima experiência em qualquer dispositivo."
            },
        ],
    },
    finalCta: {
        title: "Pronto para tirar seu projeto do papel?",
        subtitle: "Vamos transformar sua ideia em um site rápido, bonito e que gera resultado de verdade.",
        cta_primary: "Solicitar Orçamento Gratuito",
        cta_secondary: "Ver Planos",
    },
    contact: {
        title: "Pronto para Elevar sua Marca?",
        subtitle: "Seja para um projeto específico ou apenas para explorar possibilidades, estou aqui para ajudar você a construir algo extraordinário.",
        form: {
            name: "Nome",
            name_placeholder: "Seu nome",
            email: "Email",
            email_placeholder: "seu@email.com",
            message: "Mensagem",
            message_placeholder: "Me conte sobre seu projeto...",
            submit: "Enviar Mensagem"
        }
    },
    footer: {
        rights: "Todos os direitos reservados.",
        tagline: "Construindo experiências digitais que impulsionam negócios.",
        company_title: "Empresa",
        services_title: "Serviços",
        explore_title: "Mais Serviços",
        social_title: "Redes Sociais",
        privacy_policy: "Política de Privacidade",
        cookie_policy: "Política de Cookies",
        back_to_top: "Voltar ao topo",
        marquee_text: "SEU FUTURO ESTÁ NA TECNOLOGIA —",
    }
};

export const en: Dictionary = {
    nav: {
        expertise: "Services",
        pricing: "Pricing",
        projects: "Projects",
        about: "About",
        contact: "Let's Talk",
    },
    hero: {
        badge: "Available for new projects",
        title_prefix: "Crafting",
        title_highlight: "Digital",
        title_suffix: "Experiences",
        description: "I build accessible, pixel-perfect, and performant web experiences that help businesses grow and stand out in the digital era.",
        cta_primary: "View Portfolio",
        cta_secondary: "Contact Me",
        trust_label: "Client rating",
        trust_rating: "4.9 from 32 reviews",
        stat_1_value: "50+",
        stat_1_label: "Projects delivered",
        stat_2_value: "5+",
        stat_2_label: "Years of experience",
        stat_3_value: "98%",
        stat_3_label: "Happy clients",
    },
    services: {
        title: "My Services",
        subtitle: "Pick the right solution for your business. Custom projects focused on quality, speed, and elegance.",
        cta: "Request a Quote",
        items: [
            {
                category: "Web",
                title: "Modern Web Development",
                description: "Fast, responsive, and sophisticated websites built with Next.js, React, and Tailwind CSS.",
                price: "From $300",
            },
            {
                category: "Marketing",
                title: "High-Conversion Landing Pages",
                description: "Strategic layouts designed to scale businesses with maximum performance and copy.",
                price: "From $180",
            },
            {
                category: "E-commerce",
                title: "E-commerce & Custom Systems",
                description: "Tailor-made online stores and full admin panels for managing your digital business.",
                price: "From $700",
            },
            {
                category: "Automation",
                title: "AI Integration",
                description: "Smart code generation and automation to accelerate development processes.",
                price: "From $240",
            },
            {
                category: "Design",
                title: "Premium UI/UX Design",
                description: "Refined, minimalist interfaces focused on high-standard user experiences.",
                price: "From $160",
            },
            {
                category: "Backend",
                title: "Automation & API",
                description: "Chatbots, webhooks, and intelligent workflows to streamline your operations.",
                price: "From $200",
            },
        ],
    },
    process: {
        title: "How It Works",
        subtitle: "A simple, transparent process from first contact to launch.",
        cta: "Get Started",
        steps: [
            { title: "Contact", description: "You tell me about your project, goals, and timeline via the form or WhatsApp." },
            { title: "Proposal", description: "I send a detailed quote with scope, timeline, and technologies to be used." },
            { title: "Development", description: "I build your project with regular updates so you can follow every step." },
            { title: "Delivery", description: "Your site goes live, tested, with support included to make sure everything works." },
        ],
    },
    pricing: {
        title: "Plans & Pricing",
        subtitle: "Transparent packages for every kind of project. No hidden fees.",
        popular: "Most Popular",
        cta: "Choose Plan",
        custom_title: "Need something different?",
        custom_subtitle: "Every project is unique. Let's talk and build a custom proposal for you.",
        custom_cta: "Talk about my project",
        plans: [
            {
                name: "Essential",
                price: "$180",
                period: "one-time project",
                description: "Ideal for simple landing pages and institutional sites.",
                features: ["Up to 3 sections", "Responsive design", "Basic SEO optimization", "1 revision round", "Delivery in 7 days"],
            },
            {
                name: "Professional",
                price: "$500",
                period: "one-time project",
                description: "For businesses that need a complete, robust website.",
                features: ["Up to 8 pages", "Premium animations", "Admin dashboard", "API integrations", "3 revision rounds", "30-day support"],
            },
            {
                name: "Enterprise",
                price: "$1,000+",
                period: "custom quote",
                description: "E-commerce, systems, and full SaaS platforms.",
                features: ["Unlimited pages", "Full e-commerce", "AI integration", "Advanced admin dashboard", "Unlimited revisions", "90-day priority support"],
            },
        ],
    },
    projects: {
        title: "Featured Projects",
        subtitle: "A selection of my recent work, highlighting technical depth and visual polish.",
        cta_github: "View GitHub",
        cta_case: "View Case Study",
        in_progress: "In Development",
        items: [
            {
                title: "Porsche Experience",
                category: "Automotive Showcase",
                description: "A cinematic digital experience for Porsche, focused on visual performance, fluid animations, and luxury design.",
            },
            {
                title: "Miracle House Architecture",
                category: "Architectural Showcase",
                description: "A contemporary sanctuary designed to harmonize with the misty hills. A masterclass in organic modernism.",
            },
            {
                title: "Lumina Story Platform",
                category: "Full Stack SaaS",
                description: "A comprehensive platform for creators to write, manage and monetize their animated stories.",
            },
            {
                title: "Camaleão Store Engine",
                category: "E-Commerce",
                description: "High-performance headless e-commerce engine with real-time inventory and AI recommendations.",
            },
            {
                title: "Saitama Sushi",
                category: "Web Application",
                description: "Premium sushi delivery platform featuring a sleek dark theme, sophisticated animations, and a gamified loyalty system.",
            },
            {
                title: "Valhallas Motors",
                category: "Automotive Showcase",
                description: "A premium showcase for high-performance vehicles, featuring dynamic galleries and detailed specifications.",
            },
            {
                title: "Aston Martin Experience",
                category: "Luxury Showcase",
                description: "An immersive digital experience for the Aston Martin brand, focused on visual elegance and high-level interactivity.",
            },
            {
                title: "Ilíria Psicologia",
                category: "Institutional Website",
                description: "Professional website for a psychology clinic, featuring a welcoming design, team presentation, and appointment scheduling.",
            },
        ],
    },
    about: {
        title: "Beyond the Code",
        p1: "My name is Roberto Pereira, and my story with programming began in an almost magical way: my dream was always to create games, interactive worlds where anything was possible. In the beginning, every line of code was a door to a new universe, a small laboratory of infinite possibilities.",
        p2: "Over time, I realized my passion went beyond games. Programming allowed me to breathe life into people's creativity, transforming ideas, dreams, and concepts into real digital experiences. Today, every project I create is more than just code: it's a bridge between imagination and reality, a space where design, technology, and innovation meet to tell stories that impact, inspire, and connect.",
        p3: "Here in my portfolio, you don't just see websites or systems; you see ideas taking shape, creativity being materialized, and digital experiences thoughtfully designed to impress. It is this quest to turn inspiration into reality that guides my work and defines my path as a developer and creator.",
        timeline_title: "Journey",
        timeline: [
            {
                year: "2024",
                role: "Senior Full Stack Dev",
                company: "Freelance / Agency",
                description: "Leading development of complex SaaS platforms and high-performance e-commerce solutions.",
            },
            {
                year: "2022",
                role: "Frontend Specialist",
                company: "Tech Startups",
                description: "Focused on React ecosystem, performance optimization, and creating fluid UI interactions.",
            },
            {
                year: "2020",
                role: "Web Developer",
                company: "Digital Studio",
                description: "Started journey building custom WordPress themes and responsive landing pages.",
            },
        ],
    },
    testimonials: {
        title: "Client Trust",
        items: [
            {
                quote: "Simply outstanding. The level of detail and technical prowess displayed in our new platform is unmatched.",
                role: "CTO, FinTech Startup"
            },
            {
                quote: "Transformed our digital presence completely. The site is not just beautiful, but incredibly fast and functional.",
                role: "Founder, E-com Brand"
            },
            {
                quote: "A true professional who understands both code and design. Delivering the project ahead of schedule was a bonus.",
                role: "Product Manager"
            }
        ]
    },
    benefits: {
        title: "Why Work With Me",
        subtitle: "More than code: a partner committed to the outcome of your project.",
        items: [
            { title: "Direct Communication", description: "Talk to me directly, no middlemen, from briefing to final delivery." },
            { title: "Quality Code", description: "Scalable, well-documented projects following industry best practices." },
            { title: "Deadlines Met", description: "Realistic timelines and constant updates so you can follow every step." },
            { title: "Premium Design", description: "Modern interfaces carefully crafted to convert and delight users." },
            { title: "Real Performance", description: "Sites optimized to load fast and rank well on search engines." },
            { title: "Post-Launch Support", description: "Follow-up after launch for adjustments, questions, and small improvements." },
            { title: "Modern Tech", description: "Using the most modern tools on the market: Next.js, React, AI, and more." },
            { title: "Fair Pricing", description: "Transparent quotes, no surprises or hidden fees along the way." },
        ],
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know before starting your project.",
        items: [
            {
                question: "How long does it take to build my site?",
                answer: "It depends on scope: landing pages are ready in about 7 days, institutional sites in 2-3 weeks, and full systems/e-commerce in 4-8 weeks."
            },
            {
                question: "How does payment work?",
                answer: "I work with 50% upfront to reserve the schedule and 50% on final delivery. For larger projects, I can split it into more milestones."
            },
            {
                question: "Do you offer support after delivery?",
                answer: "Yes, all plans include a free support period for adjustments and questions. I also offer monthly maintenance plans."
            },
            {
                question: "Can I request changes after the site is ready?",
                answer: "Of course. Each plan includes revision rounds during development, and extra changes after delivery can be quoted separately."
            },
            {
                question: "Will my site work well on mobile?",
                answer: "Yes, all projects are built with responsive design, ensuring a great experience on any device."
            },
        ],
    },
    finalCta: {
        title: "Ready to bring your project to life?",
        subtitle: "Let's turn your idea into a fast, beautiful website that drives real results.",
        cta_primary: "Request a Free Quote",
        cta_secondary: "See Plans",
    },
    contact: {
        title: "Ready to Elevate Your Brand?",
        subtitle: "Whether you have a specific project in mind or just want to explore possibilities, I'm here to help you build something extraordinary.",
        form: {
            name: "Name",
            name_placeholder: "John Doe",
            email: "Email",
            email_placeholder: "john@example.com",
            message: "Message",
            message_placeholder: "Tell me about your project...",
            submit: "Send Message"
        }
    },
    footer: {
        rights: "All rights reserved.",
        tagline: "Building digital experiences that drive business growth.",
        company_title: "Company",
        services_title: "Services",
        explore_title: "More Services",
        social_title: "Social",
        privacy_policy: "Privacy Policy",
        cookie_policy: "Cookie Policy",
        back_to_top: "Back to top",
        marquee_text: "YOUR FUTURE IS IN TECHNOLOGY —",
    }
};
