# Guia ràpida del CMS Poemarte

## Accés

Entra a https://www.poemarte.com/keystatic i fes login amb GitHub.

## On treballes

Treballes directament sobre `main`, que ja apareix seleccionada per defecte al desplegable de dalt a l'esquerra. **Ja no cal la branca `keystatic/edicions`** (s'ha retirat).

`main` és la branca que es publica a la web: cada **Save** desplega automàticament. **No cal crear Pull Requests ni branques noves** — simplement edita i guarda.

## Consell: acumula canvis abans de guardar

Cada cop que cliques **Save** es dispara un desplegament a Vercel. Per estalviar recursos:

- Edita diversos camps o fins i tot diverses pàgines.
- Clica **Save** una sola vegada al final.

## Canviar el slug (la URL)

El camp **Slug** és la part final de la URL (ex: `xavier-vives`). Canviar-lo **canvia la URL pública** i pot deixar enllaços antics trencats, així que per als canvis de URL millor **demana-li a en Manel**.

El **Títol** sí que es pot canviar lliurement (és diferent del slug).

## Canviar imatges

Ja pots canviar imatges amb normalitat: **Choose file** → tria la nova → **Save**.

Si algun cop apareix un error de GraphQL en guardar (`A path was requested for deletion...`), recarrega la pàgina amb **Ctrl+Shift+R** i torna-ho a provar. Si persisteix, avisa en Manel.

## Indicadors

- **"Unsaved"** o **punt blau** al costat d'una pàgina: hi ha canvis pendents de guardar.
- Després de guardar, els canvis triguen entre 30 segons i 1 minut a aparèixer a la web.
