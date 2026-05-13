# Guía para editar la web de Poemarte

Esta guía es para ti, la persona que edita los textos e imágenes de la web. No necesitas saber nada de programación. Sigue los pasos tal cual.

---

## 1. Lo que vas a hacer

La web tiene un **panel de edición** donde puedes:

- Cambiar cualquier texto (títulos, párrafos, frases).
- Cambiar imágenes (subir una nueva en lugar de la actual).
- Crear nuevas colaboraciones.
- Borrar colaboraciones que ya no quieras mostrar.

Cuando guardas un cambio, la web pública se actualiza sola al cabo de un minuto. **Tú no tienes que hacer nada más** que guardar.

---

## 2. La primera vez: crear cuenta y entrar

### a) Crea tu cuenta de GitHub (gratis, 1 minuto)

GitHub es la plataforma donde "vive" la web. Para editarla necesitas una cuenta allí.

1. Abre https://github.com/signup
2. Pon tu email, una contraseña y un nombre de usuario (el que quieras).
3. Confirma el email cuando te llegue.

### b) Acepta la invitación al proyecto

La persona que te ha pasado esta guía te habrá invitado al proyecto. Recibirás un email de GitHub que dice "you've been invited to collaborate on pinxe/poemarte".

1. Abre ese email.
2. Click en **"View invitation"**.
3. Click en **"Accept invitation"**.

Ya tienes acceso. Sólo hay que hacer esto una vez.

### c) Entra al panel de edición

1. Abre en el navegador: **https://poemarte.vercel.app/keystatic**
   *(O el dominio definitivo cuando lo tengamos. Tu interlocutor te lo confirmará.)*
2. Te pedirá hacer login con GitHub. Click en el botón verde y autoriza.
3. Verás un panel oscuro con un menú a la izquierda. Eso es el editor.

---

## 3. La regla de oro: usa siempre una "branch" antes de editar

Esto es lo único técnico que tienes que entender, y es muy fácil:

**Una branch es una copia de la web donde puedes probar cosas sin afectar a la web real.** Cuando termines, "fusionas" la branch y entonces sí se actualiza la web pública.

¿Por qué? Porque cada vez que guardas un cambio en la web real, el sistema "redespliega" todo. Si haces 30 cambios sueltos, redespliega 30 veces. Si los haces todos en una branch y luego fusionas, redespliega **una sola vez**.

### Cómo crear una branch (al empezar a editar)

1. En el panel, arriba a la izquierda, verás un selector que pone **"main"** con una flechita.
2. Click ahí → abajo del todo aparece un botón **"New branch…"**.
3. Ponle un nombre descriptivo de lo que vas a tocar. Por ejemplo:
   - `cambios-pagina-sobre`
   - `nueva-colaboracion-marzo`
   - `actualizacion-precios`

   *(Usa guiones en lugar de espacios, sin acentos ni eñes ni mayúsculas.)*
4. Click en el botón para crearla.

Ahora todo lo que edites se guarda en esa copia, no en la web real. **Verás el nombre de la branch arriba a la izquierda en todo momento.** Si pone "main", PARA — no estás en una branch, estás editando la web real directamente.

---

## 4. Editar textos e imágenes

### Cambiar un texto

1. En el menú izquierdo, click en la sección donde está el texto (por ejemplo "Página · Home", o "Colaboraciones" → una colaboración concreta).
2. Verás un formulario con cada texto en su casilla. Edítalo.
3. Click en **"Save"** arriba a la derecha. Listo.

Puedes guardar tantos cambios como quieras seguidos. Cada Save se acumula en tu branch.

### Cambiar una imagen

1. Localiza la imagen en el formulario (verás una vista previa pequeña).
2. Click en la imagen → "Replace".
3. Selecciona el archivo nuevo desde tu ordenador (JPG o PNG).
4. Click en **"Save"**.

### Crear una nueva colaboración

1. Menú izquierdo → **"Colaboraciones"**.
2. Click en **"+ Create"** (arriba a la derecha).
3. Rellena los campos:
   - **Título**: nombre del artista o de la obra.
   - **Artista**: quién es.
   - **Fecha**: cuándo.
   - **Etiqueta corta**: ej. "Exposición", "Pieza única".
   - **Imagen principal**: la grande, obligatoria.
   - **El poema**: el texto del poema, respeta los saltos de línea.
   - **Sobre la colaboración**: texto largo de contexto.
   - **Destacada en home**: déjalo marcado si quieres que aparezca en la página principal.
   - **Orden**: un número (los más bajos salen primero).
4. **"Save"**.

### Borrar una colaboración

1. Menú izquierdo → **"Colaboraciones"** → click en la que quieres borrar.
2. Arriba a la derecha, junto a Save, hay un menú con tres puntitos. Click → **"Delete"**.
3. Confirma. **"Save"**.

---

## 5. Cuando hayas terminado: publicar tus cambios

Tus cambios están en la branch — **todavía no están en la web pública**. Para publicarlos:

1. En el selector de branch arriba a la izquierda, asegúrate de seguir en tu branch (no en "main").
2. Click en el botón con los tres puntitos (al lado del selector de branch).
3. Click en **"Create Pull Request"** (o, si Keystatic te lo ofrece en otro sitio, busca "Pull Request" o "Merge").
4. Te llevará a GitHub. Click en el botón verde **"Create pull request"**.
5. En la página siguiente, click en **"Merge pull request"** → **"Confirm merge"**.

En 30-60 segundos la web pública estará actualizada con todos tus cambios.

---

## 6. Cosas que ayudan

### Ver cómo quedaría la web ANTES de publicar

Cuando creas una branch, Vercel genera una **URL de previsualización**. Para encontrarla:

1. Ve a https://github.com/pinxe/poemarte/branches
2. Localiza tu branch en la lista.
3. Click en el icono que pone "Open" o busca el comentario de Vercel con el link de preview.

Esa URL te enseña la web **como quedaría** tras mergear. Útil para revisar antes de publicar.

### Volver atrás si me equivoco

Cualquier cambio se puede deshacer:

1. Ve a https://github.com/pinxe/poemarte/commits/main
2. Encuentra el cambio que quieres revertir.
3. Click en los tres puntitos → **"Revert"**.

Esto crea un commit nuevo que deshace el anterior. **Nada se borra nunca de verdad** — siempre puedes recuperar el estado anterior.

### Imágenes: peso y tamaño

- Usa imágenes a **máximo 2000px de ancho** para no penalizar la carga.
- Formato **JPG** para fotos, **PNG** para logos o cosas con transparencia.
- Si tienes Photoshop o similar, exporta con calidad "alta" (no máxima); pesarán menos.

### Textos: respeta el carácter del sitio

- No uses MAYÚSCULAS al final de las frases (la web ya pone mayúsculas donde toca).
- Respeta los párrafos: deja una línea en blanco entre párrafos cuando edites textos largos.
- Comillas tipográficas: «...» o "...", no `"..."` (rectas).

---

## 7. Si algo no funciona

**Caso: He guardado pero no veo el cambio en la web.**
- ¿Estás en una branch o en "main"? Si estás en branch, todavía no se ha publicado. Sigue el paso 5.
- Si ya hiciste el merge, espera 1-2 minutos. Vercel necesita redesplegar.

**Caso: Subo una imagen y sale "imagen rota".**
- Comprueba el formato (debe ser .jpg, .jpeg o .png).
- Si pesa más de 5 MB puede que el subir falle. Reduce el tamaño antes.

**Caso: No me deja entrar a `/keystatic`.**
- ¿Aceptaste la invitación al repo? Mira en https://github.com/pinxe/poemarte/settings/access — debes aparecer ahí.
- Limpia cookies del navegador y vuelve a hacer login.

**Caso: Lo he roto todo.**
- No has roto nada. Cualquier cambio se puede revertir. Avisa al desarrollador y restaurará el estado anterior en 1 minuto.

---

## Resumen ultra-rápido

1. Login en `/keystatic`.
2. **Crea una branch** ("New branch…") — siempre.
3. Edita lo que necesites, Save cuantas veces quieras.
4. Cuando termines: **Pull Request → Merge** → la web se actualiza sola.
5. Si te equivocas: revertir el commit en GitHub. Sin miedo.
