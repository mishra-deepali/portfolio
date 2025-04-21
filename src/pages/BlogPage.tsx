import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: number;
  thumbnail?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Large Language Models in Research",
    date: "2023-06-15",
    author: "Jane Smith",
    excerpt: "An exploration of how large language models are transforming academic research and what the future might hold for AI-assisted scientific discovery.",
    content: "This is the full content of the blog post...",
    tags: ["AI", "LLMs", "Research"],
    readingTime: 8,
    thumbnail: "https://images.unsplash.com/photo-1655720828018-ae1934ed0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Ethical Considerations in AI Development",
    date: "2023-04-22",
    author: "Jane Smith",
    excerpt: "A discussion on the ethical challenges we face as AI researchers and practitioners, and how we can work towards more responsible AI development.",
    content: "This is the full content of the blog post...",
    tags: ["Ethics", "AI", "Responsible AI"],
    readingTime: 12,
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
  },
  {
    id: 3,
    title: "Bridging Academia and Industry in AI Research",
    date: "2023-02-10",
    author: "Jane Smith",
    excerpt: "Insights on how academic researchers can collaborate effectively with industry partners to drive innovation in artificial intelligence.",
    content: "This is the full content of the blog post...",
    tags: ["Academia", "Industry", "Collaboration"],
    readingTime: 6,
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Improving Diversity in Computer Science Education",
    date: "2022-11-15",
    author: "Jane Smith",
    excerpt: "Strategies for creating more inclusive computer science programs and promoting diversity in the field.",
    content: "This is the full content of the blog post...",
    tags: ["Education", "Diversity", "CS Education"],
    readingTime: 10,
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  {
    id: 5,
    title: "My Journey from PhD Student to Assistant Professor",
    date: "2022-09-03",
    author: "Jane Smith",
    excerpt: "Personal reflections on the transition from doctoral studies to a faculty position, with advice for current graduate students.",
    content: "This is the full content of the blog post...",
    tags: ["Academic Career", "PhD", "Advice"],
    readingTime: 7,
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 6,
    title: "Explainable AI: Making Black-Box Models Transparent",
    date: "2022-07-18",
    author: "Jane Smith",
    excerpt: "An overview of techniques for making AI systems more interpretable and transparent, with implications for trust and adoption.",
    content: "This is the full content of the blog post...",
    tags: ["Explainable AI", "Transparency", "AI"],
    readingTime: 9,
    thumbnail: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

// Get all unique tags
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts by search query and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Blog</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Thoughts, insights, and reflections on artificial intelligence, academia, and more.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">All Topics</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-gray-500 mb-4">No blog posts match your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {post.thumbnail && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime} min read</span>
                </div>

                <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2 hover:text-primary/80">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={`${post.id}-${tag}`}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium cursor-pointer hover:bg-gray-200"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogPage;
