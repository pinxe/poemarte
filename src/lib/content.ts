import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

export async function getHome() {
  const data = await reader.singletons.home.read();
  if (!data) throw new Error('Falta contenido: home');
  return data;
}

export async function getSobre() {
  const data = await reader.singletons.sobre.read();
  if (!data) throw new Error('Falta contenido: sobre');
  return data;
}

export async function getServicios() {
  const data = await reader.singletons.servicios.read();
  if (!data) throw new Error('Falta contenido: servicios');
  return data;
}

export async function getContacto() {
  const data = await reader.singletons.contacto.read();
  if (!data) throw new Error('Falta contenido: contacto');
  return data;
}

export async function getColaboraciones() {
  const slugs = await reader.collections.colaboraciones.list();
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.colaboraciones.read(slug);
      return entry ? { slug, ...entry } : null;
    })
  );
  return items
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .sort((a, b) => (a.orden ?? 0) - (b.orden ?? 0));
}

export async function getColaboracion(slug: string) {
  const entry = await reader.collections.colaboraciones.read(slug);
  if (!entry) return null;
  return { slug, ...entry };
}
