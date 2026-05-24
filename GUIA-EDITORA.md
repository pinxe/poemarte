# Guia ràpida del CMS Poemarte

## Accés

Entra a https://www.poemarte.com/keystatic i fes login amb GitHub.

## Regla principal: branca de treball

**Sempre treballa amb la branca `keystatic/edicions` seleccionada** al desplegable de dalt a l'esquerra.

No facis servir `main` ni creïs branques noves. La branca `keystatic/edicions` és la que es publica directament a la web — cada Save desplega automàticament.

**No cal crear Pull Requests.** Els canvis es publiquen sols.

## Consell: acumula canvis abans de guardar

Cada cop que cliques **Save** es dispara un desplegament a Vercel. Per estalviar recursos:

- Edita diversos camps o fins i tot diverses pàgines.
- Clica **Save** una sola vegada al final.

## No canviïs mai el slug

A les col·laboracions hi ha un camp **Slug** (la part final de la URL, ex: `xavier-vives`). **No el canviïs després de crear la col·laboració** — provoca un error de GraphQL i no es pot guardar.

Si vols canviar la URL d'una col·laboració ja creada, demana-li a en Manel que ho faci des del codi.

El **Títol** sí que es pot canviar lliurement, és diferent del slug.

## Problema conegut amb imatges

De vegades, en canviar una imatge i guardar, apareix l'error:

> `[GraphQL] A path was requested for deletion which does not exist...`

**Solució (en dos passos):**

1. Clica **Remove** al camp de la imatge problemàtica.
2. Clica **Save** (això elimina la referència antiga).
3. Clica **Choose file** i puja la nova imatge.
4. Clica **Save** un altre cop.

## Indicadors

- **"Unsaved"** o **punt blau** al costat d'una pàgina: hi ha canvis pendents de guardar.
- Després de guardar, els canvis triguen entre 30 segons i 1 minut a aparèixer a la web.
