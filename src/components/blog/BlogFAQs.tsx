'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function BlogFAQs({ faqs, title }: { faqs: FAQ[]; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="blog-post-faqs">
      <h2 className="blog-post-faqs-title">{title}</h2>
      <div className="blog-post-faqs-list">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`blog-post-faq-item ${openIndex === i ? 'blog-post-faq-open' : ''}`}
          >
            <button
              className="blog-post-faq-trigger"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="blog-post-faq-question">{faq.question}</span>
              <span className="blog-post-faq-icon">
                <Plus size={16} />
              </span>
            </button>
            <div className="blog-post-faq-answer-wrapper">
              <div className="blog-post-faq-answer-inner">
                <div
                  className="blog-post-faq-answer"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}