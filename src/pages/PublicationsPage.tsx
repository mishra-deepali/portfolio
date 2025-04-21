import { useState } from 'react';
import { motion } from 'framer-motion';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  pdf?: string;
  abstract: string;
  type: 'journal' | 'conference' | 'book' | 'thesis';
  tags: string[];
}

const publications: Publication[] = [
  {
    id: 1,
    title: "ContrastiveNLP: A Framework for Self-Supervised Language Representation Learning",
    authors: ["Smith, J.", "Doe, J.", "Johnson, S."],
    journal: "Journal of Machine Learning Research",
    year: 2022,
    doi: "10.1234/jmlr.2022.001",
    pdf: "https://example.com/papers/contrastivenpl.pdf",
    abstract: "We present ContrastiveNLP, a novel framework for self-supervised learning for natural language processing tasks. Our approach leverages contrastive learning objectives to learn high-quality text representations without requiring large amounts of labeled data. We demonstrate state-of-the-art results on multiple benchmarks.",
    type: "journal",
    tags: ["NLP", "Self-Supervised Learning", "Contrastive Learning"]
  },
  {
    id: 2,
    title: "Parameter-Efficient Fine-tuning of Large Language Models for Domain Adaptation",
    authors: ["Smith, J.", "Chang, M.", "Johnson, S."],
    journal: "Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics",
    year: 2023,
    doi: "10.1234/acl.2023.123",
    pdf: "https://example.com/papers/parameter-efficient.pdf",
    abstract: "We propose a method for fine-tuning large language models to specific domains without requiring extensive computational resources. Our approach utilizes adapter modules and selective layer freezing to adapt pretrained models while minimizing the number of trainable parameters.",
    type: "conference",
    tags: ["NLP", "Transfer Learning", "Large Language Models"]
  },
  {
    id: 3,
    title: "Human-AI Collaborative Learning through Natural Dialogue",
    authors: ["Smith, J.", "Williams, D.", "Chen, L."],
    journal: "IEEE Transactions on Neural Networks and Learning Systems",
    year: 2023,
    doi: "10.1234/tnnls.2023.456",
    pdf: "https://example.com/papers/human-ai.pdf",
    abstract: "This paper explores how humans and AI systems can learn from each other through natural language dialogue. We present a framework for building interactive learning systems that collect feedback from humans and incorporate it into model training, creating a feedback loop that benefits both parties.",
    type: "journal",
    tags: ["Human-Computer Interaction", "Interactive Learning", "Dialogue Systems"]
  },
  {
    id: 4,
    title: "Knowledge Distillation Techniques for Efficient Transformer Models",
    authors: ["Smith, J.", "Zhang, E.", "Thompson, R."],
    journal: "Proceedings of NeurIPS",
    year: 2021,
    doi: "10.1234/neurips.2021.789",
    pdf: "https://example.com/papers/knowledge-distillation.pdf",
    abstract: "We investigate various knowledge distillation techniques to reduce the size and computational requirements of transformer-based models while maintaining their performance. Our approach compresses BERT-like architectures by up to 60% with minimal loss in accuracy across multiple benchmarks.",
    type: "conference",
    tags: ["Model Compression", "Knowledge Distillation", "Transformers"]
  },
  {
    id: 5,
    title: "Cross-Lingual Transfer Learning for Low-Resource Languages",
    authors: ["Smith, J.", "Rodriguez, M.", "Lee, J."],
    journal: "Computational Linguistics",
    year: 2021,
    doi: "10.1234/compling.2021.987",
    pdf: "https://example.com/papers/cross-lingual.pdf",
    abstract: "We present a novel approach for transferring knowledge from high-resource languages to improve NLP systems for low-resource languages. Our method leverages shared semantic spaces and syntactic structures across languages to enable effective cross-lingual transfer, showing significant improvements on multiple tasks for several low-resource languages.",
    type: "journal",
    tags: ["Cross-Lingual Transfer", "Low-Resource Languages", "NLP"]
  },
  {
    id: 6,
    title: "Self-Supervised Learning for Natural Language Understanding",
    authors: ["Smith, J."],
    journal: "PhD Thesis, Massachusetts Institute of Technology",
    year: 2021,
    pdf: "https://example.com/papers/thesis.pdf",
    abstract: "This dissertation explores novel self-supervised learning methods for natural language understanding tasks. I present several approaches that leverage large amounts of unlabeled data to learn high-quality representations that transfer well to downstream tasks with limited labeled data.",
    type: "thesis",
    tags: ["NLP", "Self-Supervised Learning", "Thesis"]
  },
  {
    id: 7,
    title: "Analyzing the Attention Patterns in Multilingual Transformer Models",
    authors: ["Smith, J.", "Garcia, A.", "Kim, T."],
    journal: "Proceedings of EMNLP",
    year: 2020,
    doi: "10.1234/emnlp.2020.234",
    pdf: "https://example.com/papers/attention-patterns.pdf",
    abstract: "We conduct a comprehensive analysis of attention patterns in multilingual transformer models. Our findings reveal how these models handle different languages and identify cross-lingual alignment in attention distributions. We discuss the implications for improving multilingual model design.",
    type: "conference",
    tags: ["NLP", "Transformers", "Multilingual Models", "Interpretability"]
  }
];

const PublicationsPage = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique years for filter
  const years = Array.from(new Set(publications.map(pub => pub.year))).sort((a, b) => b - a);

  // Filter publications
  const filteredPublications = publications.filter(pub => {
    // Filter by publication type
    if (filterType !== 'all' && pub.type !== filterType) return false;

    // Filter by year
    if (filterYear !== null && pub.year !== filterYear) return false;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const inTitle = pub.title.toLowerCase().includes(query);
      const inAuthors = pub.authors.some(author => author.toLowerCase().includes(query));
      const inTags = pub.tags.some(tag => tag.toLowerCase().includes(query));
      const inJournal = pub.journal.toLowerCase().includes(query);

      if (!(inTitle || inAuthors || inTags || inJournal)) return false;
    }

    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Publications</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          A collection of my academic publications including journal articles, conference papers, and more.
        </p>
      </motion.div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Type
            </label>
            <select
              id="type-filter"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="journal">Journal Articles</option>
              <option value="conference">Conference Papers</option>
              <option value="book">Book Chapters</option>
              <option value="thesis">Thesis</option>
            </select>
          </div>

          <div>
            <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Year
            </label>
            <select
              id="year-filter"
              value={filterYear || ''}
              onChange={(e) => setFilterYear(e.target.value ? Number.parseInt(e.target.value) : null)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Publications
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by title, author, journal, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-8">
        {filteredPublications.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg text-gray-500">No publications match your current filters.</p>
            <button
              onClick={() => {
                setFilterType('all');
                setFilterYear(null);
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-primary mb-2 max-w-3xl">{pub.title}</h2>
                  <span className="bg-accent/20 text-accent font-semibold px-3 py-1 rounded-full text-sm">
                    {pub.year}
                  </span>
                </div>

                <p className="mb-3 text-gray-700">
                  {pub.authors.join(', ')}
                </p>

                <p className="text-primary font-semibold mb-4">
                  {pub.journal}
                </p>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2 text-gray-700">Abstract</h3>
                  <p className="text-gray-600 text-sm">{pub.abstract}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag) => (
                    <span
                      key={`${pub.id}-${tag}`}
                      className="bg-gray-100 text-primary/80 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-primary-dark"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF
                    </a>
                  )}

                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-primary-dark"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      DOI
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default PublicationsPage;
