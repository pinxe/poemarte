type Node = {
  type: string;
  tag?: string;
  attributes?: Record<string, any>;
  children?: Node[];
  content?: string;
  [k: string]: any;
};

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c] as string));
}

const TAG_MAP: Record<string, string> = {
  paragraph: 'p',
  heading: 'h2',
  strong: 'strong',
  em: 'em',
  link: 'a',
  list: 'ul',
  item: 'li',
  blockquote: 'blockquote',
  hr: 'hr',
  br: 'br',
  hardbreak: 'br',
  softbreak: 'br',
};

export function renderMarkdoc(node: Node | string | null | undefined): string {
  if (!node) return '';
  if (typeof node === 'string') return escape(node);

  if (node.type === 'text') return escape(node.content ?? '');
  if (node.type === 'hardbreak' || node.type === 'softbreak') return '<br/>';

  const children = (node.children ?? []).map(renderMarkdoc).join('');

  const tag = TAG_MAP[node.type] ?? (node.type === 'document' ? '' : null);
  if (tag === null) return children;
  if (tag === '') return children;

  const attrs = node.attributes ?? {};
  let attrStr = '';
  if (node.type === 'link' && attrs.href) {
    attrStr = ` href="${escape(String(attrs.href))}"`;
  }
  if (node.type === 'heading' && attrs.level) {
    return `<h${attrs.level}${attrStr}>${children}</h${attrs.level}>`;
  }

  return `<${tag}${attrStr}>${children}</${tag}>`;
}
