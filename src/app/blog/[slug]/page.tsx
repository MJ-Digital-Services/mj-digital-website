import { notFound } from 'next/navigation';
import BlogPostContent from '@/components/blog/BlogPostContent';
import { getBlogBySlug, getBlogs } from '@/lib/blogApi';
import Link from 'next/link';
import { User, Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import BlogFAQs from '@/components/blog/BlogFAQs';

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
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: blog.coverImage ? [blog.coverImage] : [],
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
            category: categorySlug,  // ← only same category
            });
            relatedPosts = recent.blogs
            .filter((p: any) => p.slug !== slug)
            .slice(0, 3)
            .map((p: any) => ({ slug: p.slug, title: p.title }));
        } catch {}
    }

  const faqs = blog.faqs ?? [];
  const faqsTitle = blog.faqsTitle || 'Frequently Asked Questions';

  return (
    <>

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

          {/* Content */}
          <BlogPostContent content={blog.content ?? ''} />

          {/* FAQs */}
          {faqs.length > 0 && (
            <BlogFAQs faqs={faqs} title={faqsTitle} />
        )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="blog-post-related">
              <h2 className="blog-post-related-title">Related Posts</h2>
              <div className="blog-post-related-list">
                {relatedPosts.map((post: any) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-post-related-item">
                    <span>{post.title}</span>
                    <ArrowLeft size={14} className="blog-post-related-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back */}
          <Link href="/blog" className="blog-post-back">
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

        </div>
      </main>
    </>
  );
}