import { getBlogsGrouped, getCategories } from '@/lib/blogApi';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | MJ Digital Services',
  description: 'Insights on fintech, digital payments, and technology from the MJ Digital team.',
};

function BlogCard({ blog }: { blog: any }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="blog-card">
      <div className="blog-card-image">
        {blog.coverImage ? (
          <img src={blog.coverImage} alt={blog.title} className="blog-card-img" />
        ) : (
          <div className="blog-card-img-placeholder">No cover</div>
        )}
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          {blog.category?.name && (
            <span className="blog-card-category">{blog.category.name}</span>
          )}
          {blog.readTime && (
            <span className="blog-card-readtime">
              <Clock size={11} />
              {blog.readTime}
            </span>
          )}
        </div>
        <h3 className="blog-card-title">{blog.title}</h3>
        <p className="blog-card-excerpt">{blog.excerpt}</p>
        {blog.publishedAt && (
          <div className="blog-card-date">
            <Calendar size={11} />
            {new Date(blog.publishedAt).toLocaleDateString('en-IN', {
              year: 'numeric', month: 'short', day: 'numeric',
            })}
          </div>
        )}
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const [grouped] = await Promise.all([
    getBlogsGrouped().catch(() => []),
    getCategories().catch(() => []),
  ]);

  return (
    <>
      {/* Hero — gradient card */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-card">
            <span className="blog-hero-eyebrow">
              <span className="hero-badge-dot" />
              Insights &amp; Updates
            </span>
            <h1 className="blog-hero-headline">
              MJ Digital <span>Blog</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="blog-listing-section">
        <div className="container">
          {grouped.length === 0 ? (
            <p className="blog-empty">No blogs published yet</p>
          ) : (
            <div className="blog-groups">
              {grouped.map((group) => (
                <div key={group.category._id} className="blog-group">
                  <div className="blog-group-header">
                    <h2 className="blog-group-title">{group.category.name}</h2>
                  </div>
                  <div className="blog-grid">
                    {group.blogs.map((blog) => (
                      <BlogCard key={blog._id} blog={blog} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}