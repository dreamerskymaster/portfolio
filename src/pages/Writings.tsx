import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Search,
  Tag,
  BookOpen,
  Calendar,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import newsletterData from '../data/newsletter.json';
import PageTransition from '../components/PageTransition';
import Button from '../components/ui/Button';

/**
 * Converts an ISO date string (e.g. '2025-01-20') to a
 * human-readable format like 'Jan 20, 2025'.
 */
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/** Newsletter entries sorted newest-first. */
const sortedNewsletter = [...newsletterData].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const Writings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeTab, setActiveTab] = useState<'articles' | 'newsletter'>('articles');

  // Extract all unique tags from profile.writings
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    profile.writings.forEach(writing => {
      writing.tags?.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags).sort()];
  }, []);

  const filteredWritings = useMemo(() => {
    let filtered = profile.writings;

    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter(writing =>
        writing.tags?.includes(selectedTag)
      );
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(writing =>
        writing.title.toLowerCase().includes(term) ||
        writing.summary.toLowerCase().includes(term) ||
        writing.tags?.some(tag => tag.toLowerCase().includes(term))
      );
    }

    return filtered;
  }, [searchTerm, selectedTag]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Writings & Research | Ajith Srikanth</title>
        <meta name="description" content="Technical articles, research papers, and industrial insights by Ajith Srikanth. Exploring AI, smart manufacturing, and the future of industrial automation." />
      </Helmet>
      <div className="min-h-screen bg-bg">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Writings & Research
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exploring the frontiers of manufacturing innovation, automation, and sustainable technology through technical research and thought leadership.
            </p>
          </motion.div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-card border border-border p-1 rounded-2xl inline-flex shadow-sm">
              <button
                onClick={() => setActiveTab('articles')}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'articles'
                  ? 'bg-primary text-primary-contrast shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                Main Articles
              </button>
              <button
                onClick={() => setActiveTab('newsletter')}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'newsletter'
                  ? 'bg-primary text-primary-contrast shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                LinkedIn Newsletter
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between max-w-5xl mx-auto">
              {/* Search */}
              <div className="relative flex-1 w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles and papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-card text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm hover:shadow-md"
                />
              </div>

              {/* Tags Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                <Tag className="text-muted-foreground w-5 h-5 flex-shrink-0" />
                <div className="flex gap-2">
                  {allTags.map((tag) => (
                    <motion.button
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${selectedTag === tag
                        ? 'bg-primary text-primary-contrast shadow-md'
                        : 'bg-card border border-border text-foreground hover:bg-muted hover:border-primary/30'
                        }`}
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {activeTab === 'articles' ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              <AnimatePresence mode="wait">
                {filteredWritings.map((writing) => (
                  <motion.article
                    key={writing.title}
                    variants={itemVariants}
                    layout
                    className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <BookOpen className="w-8 h-8 text-primary" />
                      </div>
                      {writing.date && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(writing.date)}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {writing.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow line-clamp-3">
                      {writing.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {writing.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                      {writing.tags && writing.tags.length > 3 && (
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700">
                          +{writing.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="mt-auto pt-6 border-t border-border">
                      {writing.url.startsWith('http') ? (
                        <motion.a
                          href={writing.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                        >
                          Read Article <ArrowRight className="w-4 h-4" />
                        </motion.a>
                      ) : (
                        <Link
                          to={writing.url}
                          className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                        >
                          Read Article <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-6 max-w-4xl mx-auto"
            >
              {sortedNewsletter.map((article) => (
                <motion.a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group flex flex-col md:flex-row bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="md:w-64 h-48 bg-muted relative shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-1/20 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.summary}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-bold">
                      View Newsletter <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}

          {/* No Results */}
          {filteredWritings.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-block p-6 bg-muted rounded-full mb-4">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No writings found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Interested in Collaboration?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always interested in discussing new research opportunities,
                technical collaborations, and knowledge sharing in manufacturing innovation.
              </p>
              <Button
                to="/contact"
                size="lg"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-contrast rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                Let's Connect <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Writings;

