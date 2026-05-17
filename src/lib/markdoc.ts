import Markdoc from '@markdoc/markdoc';

/**
 * Renderiza el contenido markdoc de Keystatic a HTML.
 * Acepta un nodo ya transformado, un AST, una función (cuando se usa
 * `resolveLinkedFiles`) o una cadena markdown.
 */
export async function renderMarkdoc(input: any): Promise<string> {
  if (!input) return '';
  const node = typeof input === 'function' ? await input() : input;
  if (!node) return '';

  if (typeof node === 'string') {
    const ast = Markdoc.parse(node);
    const rendered = Markdoc.transform(ast);
    return Markdoc.renderers.html(rendered);
  }

  // node ya es un RenderableTreeNode / AST
  if ('type' in node && node.type === 'document') {
    const transformed = Markdoc.transform(node);
    return Markdoc.renderers.html(transformed);
  }

  return Markdoc.renderers.html(node);
}
