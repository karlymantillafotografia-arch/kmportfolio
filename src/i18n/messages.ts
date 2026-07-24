import type { Locale } from "@/i18n/config";

/** UI chrome + page intros. Keep EN/ES lengths close for layout stability. */
export const messages = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      services: "Services",
      beforeAfter: "Before & After",
      videos: "Videos",
      consulting: "Consulting",
      about: "About Me",
      contact: "Contact",
    },
    lang: {
      en: "EN",
      es: "ES",
      switchTo: "Switch language",
    },
    hero: {
      greeting: "Hi, I'm Karly",
      tagline: "Professional Photo Retouching & Visual Editing",
      taglineMobile: "Professional Photo\nRetouching & Visual\nEditing",
      description:
        "High-quality retouching to elevate your images.",
      hire: "Hire me on Upwork",
      portfolio: "View Portfolio",
      connect: "Let's connect",
      imageAlt: "Karly — professional photo retoucher",
    },
    seal: "QUALITY · PRECISION · CREATIVITY",
    cta: {
      title: "Ready to elevate your images?",
      body: "Let's work together and bring your photos to the next level.",
      hire: "Hire me on Upwork",
    },
    footer: {
      rights: "All rights reserved.",
    },
    sections: {
      portfolio: "Portfolio",
      featuredWork: "Featured Work",
      beforeAfter: "Before & After",
      services: "Services",
      reviews: "Reviews",
      videos: "Videos / Process",
      consulting: "Consulting & Mentorship",
    },
    pages: {
      portfolioTitle: "Portfolio",
      portfolioDesc:
        "A selection of retouching work across portraits, fashion, product, and smile enhancement.",
      beforeAfterTitle: "Before & After",
      beforeAfterDesc:
        "Drag the slider to compare original captures with finished retouching.",
      servicesTitle: "Services",
      servicesDesc:
        "End-to-end image finishing for brands, photographers, and growing creative businesses.",
      videosTitle: "Videos / Process",
      videosDesc:
        "Short walkthroughs that show how polished results come together.",
      consultingTitle: "Consulting & Mentorship",
      consultingDesc:
        "Level up your craft, workflow, and client business with guided support.",
      aboutTitle: "About Me",
      aboutIntro: "",
      contactTitle: "Contact",
      contactDesc:
        "Ready to elevate your images? Reach out and let's start a project.",
    },
    about: {
      body1:
        "I'm Karly, a visual editor and photo retoucher with over 6 years of experience working on commercial imagery and digital content.",
      body2:
        "I focus on creating clean, natural, and well-crafted results, paying close attention to light, color, texture, and the small details that make an image look professional without losing realism.",
      body3:
        "My work combines visual judgment, technique, and current tools, including AI when it truly adds value to the final result. I aim for each image not only to look better, but also to feel consistent with the style, purpose, and communication of the project.",
      body4:
        "As a **Top Rated Plus freelancer on Upwork**, I've worked with national and international clients, maintaining clear communication, organized deliveries, and a careful approach to every detail.",
      h1: "Portrait and beauty retouching",
      h2: "Fashion, lifestyle, and commercial content",
      h3: "Product, e-commerce, and real estate",
      h4: "AI, compositing, and batch editing",
      cta: "Get in touch",
      imageAlt: "Karly — professional photo retoucher",
    },
    contact: {
      hire: "Hire me on Upwork",
      email: "Email",
    },
    consulting: {
      title: "Level up your skills and grow your business",
      body: "Get personalized advice, portfolio reviews, and workflow guidance from a professional retoucher.",
      f1: "1-on-1 Coaching",
      f2: "Portfolio Reviews",
      f3: "Workflow Optimization",
      mf1: "1-on-1 Coaching",
      mf2: "Workflow Optimization",
      mf3: "Portfolio Reviews",
      mf4: "Personalized Guidance",
      book: "Book a Session",
      emailMe: "Email Me",
      imageAlt: "Editing workspace for consulting sessions",
    },
    serviceCard: {
      service: "Service",
      included: "What's included",
      how: "How it works",
      close: "Close",
      start: "Start a Project",
      related: "See related work",
    },
    portfolioUi: {
      viewWork: "View Work",
      featured: "Featured Project",
      category: "Category",
      retouching: "Retouching",
      deliverables: "Deliverables",
      start: "Start a Project",
      back: "Back to Portfolio",
    },
    beforeAfterUi: {
      editsHeading: "Edits made on this image",
      showInfo: "Show retouching details",
      close: "Close comparison",
      prev: "Previous comparison",
      next: "Next comparison",
    },
    videoUi: {
      play: "Play video",
      watch: "Watch",
    },
    common: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      portfolio: "Portafolio",
      services: "Servicios",
      beforeAfter: "Antes y después",
      videos: "Videos",
      consulting: "Consultoría",
      about: "Sobre mí",
      contact: "Contacto",
    },
    lang: {
      en: "EN",
      es: "ES",
      switchTo: "Cambiar idioma",
    },
    hero: {
      greeting: "Hola, soy Karly",
      tagline: "Retoque fotográfico y edición visual profesional",
      taglineMobile: "Retoque fotográfico\ny edición visual\nprofesional",
      description:
        "Retoque de alta calidad para elevar tus imágenes.",
      hire: "Contrátame en Upwork",
      portfolio: "Ver portafolio",
      connect: "Conectemos",
      imageAlt: "Karly, retocadora fotográfica profesional",
    },
    seal: "CALIDAD · PRECISIÓN · CREATIVIDAD",
    cta: {
      title: "¿Listo para elevar tus imágenes?",
      body: "Trabajemos juntos y llevemos tus fotos al siguiente nivel.",
      hire: "Contrátame en Upwork",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    sections: {
      portfolio: "Portafolio",
      featuredWork: "Trabajo destacado",
      beforeAfter: "Antes y después",
      services: "Servicios",
      reviews: "Reseñas",
      videos: "Videos / Proceso",
      consulting: "Consultoría y mentoría",
    },
    pages: {
      portfolioTitle: "Portafolio",
      portfolioDesc:
        "Una selección de retoque en retrato, moda, producto y mejora de sonrisa.",
      beforeAfterTitle: "Antes y después",
      beforeAfterDesc:
        "Desliza para comparar la captura original con el retoque final.",
      servicesTitle: "Servicios",
      servicesDesc:
        "Acabado de imagen de principio a fin para marcas, fotógrafos y creativos.",
      videosTitle: "Videos / Proceso",
      videosDesc:
        "Videos cortos que muestran cómo se logra un resultado pulido.",
      consultingTitle: "Consultoría y mentoría",
      consultingDesc:
        "Mejora tu técnica, tu flujo de trabajo y tu negocio creativo con guía cercana.",
      aboutTitle: "Sobre mí",
      aboutIntro: "",
      contactTitle: "Contacto",
      contactDesc:
        "¿Listo para elevar tus imágenes? Escríbeme y empecemos un proyecto.",
    },
    about: {
      body1:
        "Soy Karly, editora y retocadora visual con más de 6 años de experiencia trabajando en imagen comercial y contenido digital.",
      body2:
        "Me enfoco en lograr resultados limpios, naturales y bien cuidados, prestando atención a la luz, el color, la textura y los pequeños detalles que hacen que una imagen se vea profesional sin perder realismo.",
      body3:
        "Mi trabajo combina criterio visual, técnica y herramientas actuales, incluyendo IA cuando realmente aporta al resultado. Busco que cada imagen no solo se vea mejor, sino que tenga coherencia con el estilo, el propósito y la comunicación del proyecto.",
      body4:
        "Como **Top Rated Plus en Upwork**, he trabajado con clientes nacionales e internacionales, manteniendo una comunicación clara, entregas organizadas y un enfoque cuidadoso en cada detalle.",
      h1: "Retoque de retrato y belleza",
      h2: "Moda, lifestyle y contenido comercial",
      h3: "Producto, e-commerce y real estate",
      h4: "IA, composición y edición por lotes",
      cta: "Contáctame",
      imageAlt: "Karly, retocadora fotográfica profesional",
    },
    contact: {
      hire: "Contrátame en Upwork",
      email: "Correo",
    },
    consulting: {
      title: "Sube tu nivel y haz crecer tu negocio",
      body: "Consejos personalizados, revisión de portafolio y guía de flujo de trabajo de una retocadora profesional.",
      f1: "Mentoría uno a uno",
      f2: "Revisión de portafolio",
      f3: "Optimización de flujo",
      mf1: "Mentoría uno a uno",
      mf2: "Optimización de flujo",
      mf3: "Revisión de portafolio",
      mf4: "Guía personalizada",
      book: "Reservar sesión",
      emailMe: "Escríbeme",
      imageAlt: "Espacio de edición para sesiones de consultoría",
    },
    serviceCard: {
      service: "Servicio",
      included: "Qué incluye",
      how: "Cómo funciona",
      close: "Cerrar",
      start: "Iniciar proyecto",
      related: "Ver trabajo relacionado",
    },
    portfolioUi: {
      viewWork: "Ver trabajo",
      featured: "Proyecto destacado",
      category: "Categoría",
      retouching: "Retoque",
      deliverables: "Entregables",
      start: "Iniciar proyecto",
      back: "Volver al portafolio",
    },
    beforeAfterUi: {
      editsHeading: "Ediciones realizadas en la imagen",
      showInfo: "Ver detalles del retoque",
      close: "Cerrar comparación",
      prev: "Comparación anterior",
      next: "Siguiente comparación",
    },
    videoUi: {
      play: "Reproducir video",
      watch: "Ver",
    },
    common: {
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
