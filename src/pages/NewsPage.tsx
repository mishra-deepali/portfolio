import { motion } from 'framer-motion';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  category: 'conference' | 'award' | 'publication' | 'media' | 'grant';
  link?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Keynote Speaker at International Conference on AI",
    date: "2023-09-18",
    description: "I'll be delivering a keynote address on 'The Future of Human-AI Collaboration' at the International Conference on Artificial Intelligence in Toronto.",
    category: "conference",
    link: "https://example.com/conference"
  },
  {
    id: 2,
    title: "Research Grant Awarded",
    date: "2023-07-05",
    description: "Our lab has been awarded a $1.2 million grant from the National Science Foundation to support our work on 'Efficient Fine-tuning of Large Language Models for Specific Domains'.",
    category: "grant",
    link: "https://example.com/grant-announcement"
  },
  {
    id: 3,
    title: "Best Paper Award at NeurIPS",
    date: "2023-05-12",
    description: "Our paper on 'Parameter-Efficient Fine-tuning of Large Language Models' received the Best Paper Award at this year's NeurIPS conference.",
    category: "award",
    link: "https://example.com/award-announcement"
  },
  {
    id: 4,
    title: "New Publication in Nature Machine Intelligence",
    date: "2023-03-30",
    description: "Our research on 'Human-AI Collaborative Learning through Natural Dialogue' has been published in Nature Machine Intelligence.",
    category: "publication",
    link: "https://example.com/nature-publication"
  },
  {
    id: 5,
    title: "Featured in MIT Technology Review",
    date: "2023-02-15",
    description: "My work on self-supervised learning for natural language understanding was featured in a special issue of MIT Technology Review on AI breakthroughs.",
    category: "media",
    link: "https://example.com/mit-tech-review"
  },
  {
    id: 6,
    title: "Invited Talk at Google AI",
    date: "2023-01-20",
    description: "I delivered an invited talk on 'Efficient Adaptation of Large Language Models' at Google AI research center.",
    category: "conference"
  },
  {
    id: 7,
    title: "Panel Discussion at AI Ethics Summit",
    date: "2022-11-10",
    description: "I participated in a panel discussion on 'Responsible AI Development' at the International AI Ethics Summit in Berlin.",
    category: "conference",
    link: "https://example.com/ethics-summit"
  },
  {
    id: 8,
    title: "Teaching Excellence Award",
    date: "2022-09-05",
    description: "I received the Teaching Excellence Award from Stanford's Computer Science Department for my graduate-level course on Natural Language Processing.",
    category: "award"
  },
  {
    id: 9,
    title: "Research Featured in The New York Times",
    date: "2022-08-12",
    description: "My research on explainable AI was featured in a New York Times article on transparency in artificial intelligence systems.",
    category: "media",
    link: "https://example.com/nyt-article"
  },
  {
    id: 10,
    title: "New Research Partnership with Microsoft Research",
    date: "2022-06-30",
    description: "Our lab has established a new research partnership with Microsoft Research to collaborate on large language model applications in healthcare.",
    category: "grant"
  }
];

const NewsPage = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'conference':
        return 'bg-blue-100 text-blue-800';
      case 'award':
        return 'bg-purple-100 text-purple-800';
      case 'publication':
        return 'bg-green-100 text-green-800';
      case 'media':
        return 'bg-amber-100 text-amber-800';
      case 'grant':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'conference':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'award':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'publication':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'media':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'grant':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">News & Updates</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Recent events, awards, publications, and other updates about my research and academic activities.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

        {/* News Items */}
        <div className="relative z-10">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* Date bubble */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className={`w-7 h-7 rounded-full ${getCategoryStyle(item.category)} flex items-center justify-center`}>
                  {getCategoryIcon(item.category)}
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                <div className="bg-white rounded-lg shadow-md p-6 ml-10 md:ml-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{formatDate(item.date)}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryStyle(item.category)}`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
