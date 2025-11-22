import { Link } from "next-view-transitions";
import { getAllBlogPosts } from "../lib/blog";
import Headbar from "../components/Headbar";

export default function DevBlog() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-stone-950 text-stone-200">
      <Headbar />

      {/* Header */}
      <div className="bg-gradient-to-b from-stone-950 to-stone-900 border-b border-stone-800 py-8 px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-2 dev-blog-transition">Dev Blog</h1>
          <p className="text-stone-400">
            Development updates and progress reports
          </p>
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex flex-col gap-10">
          {posts.length === 0 ? (
            <div className="text-center text-stone-400 py-12">
              No blog posts yet.
            </div>
          ) : (
            posts.map((post) => (
              <Link key={post.id} href={`/dev_blog/${post.id}`}>
                <article
                  className="group p-6 bg-stone-900 border border-stone-800 rounded-lg hover:border-cyan-700 hover:shadow-lg hover:shadow-cyan-900/20 transition-all cursor-pointer"
                  style={{ viewTransitionName: `post-card-${post.id}` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h2
                      className="text-2xl font-bold group-hover:text-cyan-400 transition-colors"
                      style={{ viewTransitionName: `post-title-${post.id}` }}
                    >
                      {post.title}
                    </h2>
                    {post.date && (
                      <time className="text-sm text-stone-500 whitespace-nowrap ml-4">
                        {post.date}
                      </time>
                    )}
                  </div>

                  <p className="text-stone-400 line-clamp-3">{post.excerpt}</p>

                  <div className="mt-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Read more →
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
