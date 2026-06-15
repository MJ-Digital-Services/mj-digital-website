'use client';

import { useEffect, useRef } from 'react';

export default function BlogPostContent({ content }: { content: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const panels = Array.from(root.querySelectorAll<HTMLDetailsElement>('details.pdf-embed'));
    const cleanups = panels.map((panel) => {
      const onToggle = () => {
        if (panel.open) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
      panel.addEventListener('toggle', onToggle);
      return () => panel.removeEventListener('toggle', onToggle);
    });
    return () => cleanups.forEach((fn) => fn());
  }, [content]);

  return (
    <div
      ref={rootRef}
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}