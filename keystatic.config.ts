import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'github', repo: 'pinxe/poemarte' },

  ui: {
    brand: { name: 'Poemarte CMS' },
    navigation: {
      Páginas: ['home', 'sobre', 'servicios', 'contacto'],
      Colaboraciones: ['colaboraciones'],
    },
  },

  singletons: {
    // ──────────────────────────────────────────────
    // HOME
    // ──────────────────────────────────────────────
    home: singleton({
      label: 'Página · Home',
      path: 'src/content/pages/home/',
      schema: {
        heroTitle:    fields.text({ label: 'Hero · Título', defaultValue: 'POEMARTE' }),
        heroSubtitle: fields.text({ label: 'Hero · Subtítulo', defaultValue: 'Banda Sonora de Palabras' }),
        heroTagline:  fields.text({
          label: 'Hero · Tagline',
          multiline: true,
          defaultValue: 'El arte se escucha en silencio, hasta que las palabras componen su banda sonora',
        }),
        heroImage: fields.image({
          label: 'Hero · Imagen de fondo',
          directory: 'public/images/cms',
          publicPath: '/images/cms/',
        }),

        presentationEyebrow: fields.text({ label: 'Presentación · Etiqueta', defaultValue: 'Poemarte' }),
        presentationConcept: fields.text({ label: 'Presentación · Concepto', defaultValue: 'El arte también se escucha' }),
        presentationQuote:   fields.text({ label: 'Presentación · Cita destacada', multiline: true }),
        presentationBody1:   fields.text({ label: 'Presentación · Párrafo 1', multiline: true }),
        presentationBody2:   fields.text({ label: 'Presentación · Párrafo 2', multiline: true }),
        presentationBody3:   fields.text({ label: 'Presentación · Cierre poético', multiline: true }),
        presentationImage: fields.image({
          label: 'Presentación · Imagen',
          directory: 'public/images/cms',
          publicPath: '/images/cms/',
        }),

        servicesHeading: fields.text({ label: 'Servicios · Título sección', defaultValue: 'Lo que hacemos' }),

        collabsTitle:   fields.text({ label: 'Colaboraciones · Eyebrow', defaultValue: 'Colaboraciones recientes' }),
        collabsTagline: fields.text({ label: 'Colaboraciones · Tagline', multiline: true }),
      },
    }),

    // ──────────────────────────────────────────────
    // SOBRE
    // ──────────────────────────────────────────────
    sobre: singleton({
      label: 'Página · Sobre',
      path: 'src/content/pages/sobre/',
      schema: {
        heroEyebrow: fields.text({ label: 'Hero · Etiqueta', defaultValue: 'Banda Sonora de Palabras' }),
        heroTitle:   fields.text({ label: 'Hero · Título', defaultValue: 'Sobre Poemarte' }),
        heroImage: fields.image({
          label: 'Hero · Imagen',
          directory: 'public/images/cms',
          publicPath: '/images/cms/',
        }),

        whatTitle: fields.text({ label: '¿Qué es Poemarte? · Título', defaultValue: '¿Qué es Poemarte?' }),
        whatQuote: fields.text({ label: '¿Qué es Poemarte? · Cita destacada', multiline: true }),
        whatBody:  fields.text({ label: '¿Qué es Poemarte? · Cuerpo', multiline: true, description: 'Separa párrafos con una línea en blanco' }),
        whatImage: fields.image({
          label: '¿Qué es Poemarte? · Imagen',
          directory: 'public/images/cms',
          publicPath: '/images/cms/',
        }),

        passionTitle: fields.text({ label: 'Pasión · Título', defaultValue: 'Nuestra pasión' }),
        passionIntroQuote: fields.text({ label: 'Pasión · Cita introductoria', multiline: true }),
        passionIntroBody:  fields.text({ label: 'Pasión · Párrafo intro', multiline: true }),
        passionBanner: fields.image({
          label: 'Pasión · Imagen banner',
          directory: 'public/images/cms',
          publicPath: '/images/cms/',
        }),
        passionBannerQuote: fields.text({ label: 'Pasión · Cita sobre el banner', multiline: true }),
        passionTips: fields.array(
          fields.object({
            title: fields.text({ label: 'Título' }),
            body:  fields.text({ label: 'Texto', multiline: true }),
          }),
          {
            label: 'Pasión · Tres ideas',
            itemLabel: (p) => p.fields.title.value || 'Idea',
          }
        ),

        processTitle: fields.text({ label: 'Proceso · Título', defaultValue: 'El proceso de creación poética' }),
        processIntro: fields.text({ label: 'Proceso · Intro', multiline: true }),
        processFases: fields.array(
          fields.object({
            title: fields.text({ label: 'Título de la fase' }),
            sub:   fields.text({ label: 'Subtítulo', multiline: true }),
            body:  fields.text({ label: 'Cuerpo', multiline: true }),
            image: fields.image({
              label: 'Imagen',
              directory: 'public/images/cms',
              publicPath: '/images/cms/',
            }),
          }),
          {
            label: 'Proceso · Fases',
            itemLabel: (p) => p.fields.title.value || 'Fase',
          }
        ),

        goalTitle: fields.text({ label: 'Objetivo · Título', defaultValue: 'Nuestro objetivo' }),
        goalQuote: fields.text({ label: 'Objetivo · Cita', multiline: true }),
        goalBody:  fields.text({ label: 'Objetivo · Cuerpo', multiline: true, description: 'Separa párrafos con una línea en blanco' }),
        goalImage: fields.image({
          label: 'Objetivo · Imagen',
          directory: 'public/images/cms',
          publicPath: '/images/cms/',
        }),

        pricesTitle: fields.text({ label: 'Precios · Título', defaultValue: 'Guía de precios' }),
        pricesIntro: fields.text({ label: 'Precios · Intro', multiline: true }),
        pricesOpts: fields.array(
          fields.object({
            title: fields.text({ label: 'Título plan' }),
            desc:  fields.text({ label: 'Descripción', multiline: true }),
            items: fields.array(fields.text({ label: 'Item' }), {
              label: 'Lo que incluye',
              itemLabel: (p) => p.value,
            }),
          }),
          {
            label: 'Precios · Planes',
            itemLabel: (p) => p.fields.title.value || 'Plan',
          }
        ),
        pricesCtaText: fields.text({ label: 'Precios · Texto CTA', multiline: true }),
        pricesCtaLabel: fields.text({ label: 'Precios · Botón CTA', defaultValue: 'Hablemos de tu proyecto' }),
      },
    }),

    // ──────────────────────────────────────────────
    // SERVICIOS
    // ──────────────────────────────────────────────
    servicios: singleton({
      label: 'Página · Servicios',
      path: 'src/content/pages/servicios/',
      schema: {
        heroTitle:   fields.text({ label: 'Hero · Título', defaultValue: 'Servicios' }),
        heroTagline: fields.text({ label: 'Hero · Tagline', multiline: true }),
        heroImage: fields.image({
          label: 'Hero · Imagen',
          directory: 'public/images/cms',
          publicPath: '/images/cms/',
        }),
        items: fields.array(
          fields.object({
            title:    fields.text({ label: 'Título' }),
            subtitle: fields.text({ label: 'Subtítulo' }),
            body:     fields.text({ label: 'Descripción', multiline: true }),
            image: fields.image({
              label: 'Imagen',
              directory: 'public/images/cms',
              publicPath: '/images/cms/',
            }),
            imageList: fields.image({
              label: 'Imagen (vista lista en Home)',
              directory: 'public/images/cms',
              publicPath: '/images/cms/',
            }),
          }),
          {
            label: 'Servicios',
            itemLabel: (p) => p.fields.title.value || 'Servicio',
          }
        ),
      },
    }),

    // ──────────────────────────────────────────────
    // CONTACTO
    // ──────────────────────────────────────────────
    contacto: singleton({
      label: 'Página · Contacto',
      path: 'src/content/pages/contacto/',
      schema: {
        eyebrow: fields.text({ label: 'Etiqueta', defaultValue: 'Hablemos' }),
        title:   fields.text({ label: 'Título', defaultValue: 'Cuéntanos tu proyecto' }),
        tagline: fields.text({ label: 'Tagline', multiline: true }),
        email:   fields.text({ label: 'Email de contacto', defaultValue: 'hola@poemarte.com' }),
        orLabel: fields.text({ label: 'Texto "o escríbenos a"', defaultValue: 'o escríbenos directamente a' }),
        formspreeId: fields.text({ label: 'Formspree ID', description: 'Tras la barra final de la URL' }),
      },
    }),
  },

  collections: {
    // ──────────────────────────────────────────────
    // COLABORACIONES
    // ──────────────────────────────────────────────
    colaboraciones: collection({
      label: 'Colaboraciones',
      slugField: 'titulo',
      path: 'src/content/colaboraciones/*',
      format: { contentField: 'about' },
      schema: {
        titulo: fields.slug({
          name: { label: 'Título', description: 'Nombre del artista u obra' },
        }),
        artista: fields.text({ label: 'Artista / autor' }),
        fecha:   fields.date({ label: 'Fecha' }),
        eyebrow: fields.text({
          label: 'Etiqueta corta',
          description: 'Ej: "Exposición", "Pieza única"',
        }),
        subtitulo: fields.text({
          label: 'Subtítulo / lema',
          description: 'Frase corta que acompaña al título',
          multiline: true,
        }),
        imagenPrincipal: fields.image({
          label: 'Imagen principal',
          description: 'Aparece en el hero y en el listado',
          directory: 'public/images/colaboraciones',
          publicPath: '/images/colaboraciones/',
          validation: { isRequired: true },
        }),
        imagenSecundaria: fields.image({
          label: 'Imagen secundaria (opcional)',
          description: 'Acompaña al poema. Si la dejas vacía, el poema ocupará todo el ancho.',
          directory: 'public/images/colaboraciones',
          publicPath: '/images/colaboraciones/',
        }),
        poema: fields.text({
          label: 'El poema',
          description: 'Los saltos de línea se respetan',
          multiline: true,
        }),
        about: fields.markdoc({
          label: 'Sobre la colaboración',
          description: 'Texto largo: contexto, cómo nació el poema, etc.',
        }),
        galeria: fields.array(
          fields.object({
            imagen: fields.image({
              label: 'Imagen',
              directory: 'public/images/colaboraciones',
              publicPath: '/images/colaboraciones/',
            }),
            alt: fields.text({ label: 'Texto alternativo' }),
          }),
          {
            label: 'Galería',
            itemLabel: (p) => p.fields.alt.value || 'Imagen',
          }
        ),
        destacada: fields.checkbox({
          label: 'Destacada en home',
          description: 'Aparece en la rejilla de la página principal',
          defaultValue: true,
        }),
        orden: fields.integer({
          label: 'Orden',
          description: 'Menor = aparece antes',
          defaultValue: 0,
        }),
      },
    }),
  },
});
