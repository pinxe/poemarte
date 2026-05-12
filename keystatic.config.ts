import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: { name: 'Poemarte CMS' },
  },

  collections: {
    // ─────────────────────────────────────────────
    // Colaboraciones (multidioma)
    // ─────────────────────────────────────────────
    colaboracionesEs: collection({
      label:    'Colaboraciones (ES)',
      slugField: 'titulo',
      path:     'src/content/colaboraciones/es/*',
      format:   { contentField: 'descripcion' },
      schema: {
        titulo: fields.slug({
          name: { label: 'Título' },
        }),
        artista: fields.text({ label: 'Artista' }),
        fecha:   fields.date({ label: 'Fecha' }),
        imagen:  fields.image({
          label:        'Imagen principal',
          directory:    'public/images/colaboraciones',
          publicPath:   '/images/colaboraciones/',
        }),
        descripcion: fields.markdoc({ label: 'Descripción' }),
      },
    }),

    colaboracionesCa: collection({
      label:    'Col·laboracions (CA)',
      slugField: 'titulo',
      path:     'src/content/colaboraciones/ca/*',
      format:   { contentField: 'descripcion' },
      schema: {
        titulo:      fields.slug({ name: { label: 'Títol' } }),
        artista:     fields.text({ label: 'Artista' }),
        fecha:       fields.date({ label: 'Data' }),
        imagen:      fields.image({
          label:      'Imatge principal',
          directory:  'public/images/colaboraciones',
          publicPath: '/images/colaboraciones/',
        }),
        descripcion: fields.markdoc({ label: 'Descripció' }),
      },
    }),

    colaboracionesEn: collection({
      label:    'Collaborations (EN)',
      slugField: 'titulo',
      path:     'src/content/colaboraciones/en/*',
      format:   { contentField: 'descripcion' },
      schema: {
        titulo:      fields.slug({ name: { label: 'Title' } }),
        artista:     fields.text({ label: 'Artist' }),
        fecha:       fields.date({ label: 'Date' }),
        imagen:      fields.image({
          label:      'Main image',
          directory:  'public/images/colaboraciones',
          publicPath: '/images/colaboraciones/',
        }),
        descripcion: fields.markdoc({ label: 'Description' }),
      },
    }),
  },
});
