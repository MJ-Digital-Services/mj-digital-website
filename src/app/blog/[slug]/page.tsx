import { notFound } from 'next/navigation';
import BlogPostContent from '@/components/blog/BlogPostContent';
import { getBlogBySlug, getBlogs } from '@/lib/blogApi';
import Link from 'next/link';
import { User, Calendar, Clock, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import BlogFAQs from '@/components/blog/BlogFAQs';

export async function generateStaticParams() {
  try {
    const data = await getBlogs({ limit: "1000" });
    const blogs = data?.blogs ?? data ?? [];
    return blogs.map((blog: { slug: string }) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const blog = await getBlogBySlug(slug);
    const title = blog.metaTitle || `${blog.title} | MJ Digital Services`;
    const description = blog.metaDescription || blog.excerpt;
    const canonical = `https://www.mjdigitalservices.com/blog/${slug}`;
    const ogImage = blog.coverImage
      ? blog.coverImage
      : "https://www.mjdigitalservices.com/og-image.png";

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "MJ Digital Services",
        type: "article",
        publishedTime: blog.publishedAt ?? undefined,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let blog: any;

  try {
    blog = await getBlogBySlug(slug);
  } catch {
    notFound();
  }

  const categoryName = typeof blog.category === 'object' ? blog.category.name : blog.category;
  const categorySlug = typeof blog.category === 'object' ? blog.category.slug : blog.category;

  const publishedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : '';

  let relatedPosts = (blog.relatedPosts || []).slice(0, 3);
  if (relatedPosts.length === 0) {
    try {
      const recent = await getBlogs({
        limit: '4',
        category: categorySlug, // ← only same category
      });
      relatedPosts = recent.blogs
        .filter((p: any) => p.slug !== slug)
        .slice(0, 3)
        .map((p: any) => ({ slug: p.slug, title: p.title, coverImage: p.coverImage }));
    } catch {}
  }

  const faqs = blog.faqs ?? [];
  const faqsTitle = blog.faqsTitle || 'Frequently Asked Questions';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage ?? "https://www.mjdigitalservices.com/og-image.png",
    author: {
      "@type": "Person",
      name: blog.createdBy?.name ?? "MJ Digital Team",
    },
    publisher: {
      "@type": "Organization",
      name: "MJ Digital Services",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mjdigitalservices.com/og-image.png",
      },
    },
    datePublished: blog.publishedAt ?? undefined,
    dateModified: blog.updatedAt ?? blog.publishedAt ?? undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mjdigitalservices.com/blog/${blog.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mjdigitalservices.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.mjdigitalservices.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://www.mjdigitalservices.com/blog/${blog.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="blog-post-main blog-post-main-no-cover">
        <div className="blog-post-container">

          {/* Breadcrumb */}
          <nav className="blog-post-breadcrumb">
            <Link href="/blog" className="blog-post-breadcrumb-link">Blog</Link>
            <ChevronRight size={12} />
            {categoryName && (
              <>
                <Link href={`/blog?category=${categorySlug}`} className="blog-post-breadcrumb-link">
                  {categoryName}
                </Link>
                <ChevronRight size={12} />
              </>
            )}
            <span className="blog-post-breadcrumb-current">
              {blog.title.length > 50 ? blog.title.slice(0, 50) + '…' : blog.title}
            </span>
          </nav>

          {/* Title */}
          <h1 className="blog-post-title">{blog.title}</h1>

          {/* Meta */}
          <div className="blog-post-meta">
            <span className="blog-post-meta-item">
              <User size={14} />
              {blog.createdBy?.name ?? 'MJ Digital Team'}
            </span>
            {publishedDate && (
              <span className="blog-post-meta-item">
                <Calendar size={14} />
                {publishedDate}
              </span>
            )}
            {blog.readTime && (
              <span className="blog-post-meta-item">
                <Clock size={14} />
                {blog.readTime}
              </span>
            )}
            {categoryName && (
              <Link href={`/blog?category=${categorySlug}`} className="blog-post-category-pill">
                {categoryName}
              </Link>
            )}
            {blog.tags?.map((tag: string) => (
              <span key={tag} className="blog-post-tag">{tag}</span>
            ))}
          </div>

          {/* ── Two-column layout: article + sidebar ── */}
          <div className="blog-post-layout">

            {/* LEFT — article body */}
            <div className="blog-post-body">
              <BlogPostContent content={blog.content ?? ''} />

              {/* FAQs */}
              {faqs.length > 0 && (
                <BlogFAQs faqs={faqs} title={faqsTitle} />
              )}

              {/* Back */}
              <Link href="/blog" className="blog-post-back">
                <ArrowLeft size={14} />
                Back to Blog
              </Link>
            </div>

            {/* RIGHT — sticky sidebar */}
            <aside className="blog-post-aside">

              {relatedPosts.length > 0 && (
                <div className="blog-aside-section">
                  <h2 className="blog-aside-title">Related Posts</h2>
                  <div className="blog-aside-related-list">
                    {relatedPosts.map((post: any) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="blog-aside-related-card"
                      >
                        <div className="blog-aside-related-thumb">
                          {post.coverImage ? (
                            <img src={post.coverImage} alt={post.title} />
                          ) : (
                            <span className="blog-aside-related-thumb-empty">MJ</span>
                          )}
                        </div>
                        <div className="blog-aside-related-body">
                          <span className="blog-aside-related-text">{post.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA card — keeps the sidebar balanced; remove if not needed */}
              <div className="blog-aside-cta">
                <span className="blog-aside-cta-eyebrow">MJ Digital Services</span>
                <h3 className="blog-aside-cta-title">Have a project in mind?</h3>
                <p className="blog-aside-cta-text">
                  From fintech platforms to high-converting websites — let&apos;s build it together.
                </p>
                <Link href="/contact" className="blog-aside-cta-btn">
                  Get in touch
                  <ArrowRight size={15} />
                </Link>
              </div>

            </aside>

          </div>
        </div>
      </main>
    </>
  );
}