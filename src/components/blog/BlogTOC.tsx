'use client';

import { useEffect, useRef, useState } from 'react';
import type { TocItem } from '@/lib/toc';

export default function BlogTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const headingEls = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    );
    headingEls.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const minLevel = Math.min(...items.map((i) => i.level));

  return (
    <nav className="blog-toc">
      <span className="blog-toc-title">On This Page</span>
      <ul className="blog-toc-list">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - minLevel) * 14}px` }}>
            <a
              href={`#${item.id}`}
              className={`blog-toc-link blog-toc-link-level-${item.level} ${activeId === item.id ? 'blog-toc-link-active' : ''}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
