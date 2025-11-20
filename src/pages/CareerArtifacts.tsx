import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Search,
  Filter,
  Calendar,
  Download,
  ExternalLink,
  Award,
  BookOpen,
  Presentation,
  File,
  CheckCircle,
  Target,
  Users,
  Wrench,
  BarChart3,
  Shield,
  Brain,
  Zap,
  Globe
} from 'lucide-react';
import { documents } from '../data/documents';

interface Document {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  company?: string;
  year: number;
  filePath: string;
  verified?: boolean;
  highlights?: string[];
  skills?: string[];
  pages?: number;
  relevance: string;
}

const CareerArtifacts: React.FC = () => {
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Document viewer modal states
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const documentTypes = ['All', 'Report', 'Experience Letter', 'Recommendation', 'Presentation', 'Manual', 'Certificate'];
  const documentCategories = ['All', ...new Set(documents.map(doc => doc.category))];

  /**
   * Closes the document viewer modal and clears selected document
   */
  const closeDocumentViewer = () => {
    console.log('Closing document viewer');
    setSelectedDocument(null);
    setIsViewerOpen(false);
  };

  /**
   * Filters documents based on search term, type, and category
   * Uses useMemo for performance optimization
   */
  const filteredDocuments = useMemo(() => {
    let filtered = documents;

    // Filter by document type
    if (selectedType !== 'All') {
      filtered = filtered.filter(doc => doc.type === selectedType);
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(doc => doc.category === selectedCategory);
    }

    // Filter by search term (title, description, category, or company)
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(doc =>
        doc.title.toLowerCase().includes(term) ||
        doc.description.toLowerCase().includes(term) ||
        doc.category.toLowerCase().includes(term) ||
        doc.company?.toLowerCase().includes(term)
      );
    }

    console.log(`Filtered ${filtered.length} documents from ${documents.length} total`);
    return filtered;
  }, [searchTerm, selectedType, selectedCategory]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Report": return BarChart3;
      case "Experience Letter": return Award;
      case "Recommendation": return Users;
      case "Presentation": return Presentation;
      case "Manual": return BookOpen;
      case "Certificate": return Shield;
      default: return FileText;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Manufacturing Analysis": return Wrench;
      case "Industrial Analysis": return Target;
      case "Technical Analysis": return Brain;
      case "Professional Experience": return Award;
      case "Technical Training": return BookOpen;
      case "Industry 4.0": return Zap;
      case "TPM Methodology": return Shield;
      case "SAP ERP": return Globe;
      case "TPM Training": return BookOpen;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Report": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Experience Letter": return "bg-green-100 text-green-800 border-green-200";
      case "Recommendation": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Presentation": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Manual": return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "Certificate": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

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
    <div className="min-h-screen bg-bg">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Documents
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive collection of reports, experience letters, training materials, and professional documentation
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-muted-foreground w-5 h-5" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                {documentTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-muted-foreground w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                {documentCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredDocuments.map((doc) => {
              const TypeIcon = getTypeIcon(doc.type);
              const CategoryIcon = getCategoryIcon(doc.category);

              return (
                <motion.div
                  key={doc.id}
                  variants={itemVariants}
                  layout
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <TypeIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {doc.title}
                        </h3>
                        {doc.company && (
                          <div className="text-sm text-primary font-medium">
                            {doc.company}
                          </div>
                        )}
                      </div>
                    </div>
                    {doc.verified && (
                      <div className="w-6 h-6 bg-accent-1 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CategoryIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{doc.category}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(doc.type)}`}>
                      {doc.type}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {doc.description}
                  </p>

                  {doc.highlights && doc.highlights.length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs font-medium text-foreground mb-2">Key Highlights:</div>
                      <div className="flex flex-wrap gap-1">
                        {doc.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="px-2 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs rounded border border-emerald-500/20">
                            {highlight}
                          </span>
                        ))}
                        {doc.highlights.length > 3 && (
                          <span className="px-2 py-1 bg-slate-500/10 text-slate-600 dark:text-slate-400 text-xs rounded border border-slate-500/20">
                            +{doc.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {doc.skills && doc.skills.length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs font-medium text-foreground mb-2">Skills Demonstrated:</div>
                      <div className="flex flex-wrap gap-1">
                        {doc.skills.slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-accent-1/10 text-accent-1 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                        {doc.skills.length > 3 && (
                          <span className="px-2 py-1 bg-slate-500/10 text-slate-600 dark:text-slate-400 text-xs rounded border border-slate-500/20">
                            +{doc.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{doc.year}</span>
                      </div>
                      {doc.pages && (
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>{doc.pages} pages</span>
                        </div>
                      )}
                    </div>

                    <motion.a
                      href={doc.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-contrast rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      View
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredDocuments.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No documents found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent-1/5 border border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Document Portfolio Summary
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {documents.length}
                </div>
                <div className="text-sm text-muted-foreground">Total Documents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-1 mb-2">
                  {new Set(documents.map(d => d.type)).size}
                </div>
                <div className="text-sm text-muted-foreground">Document Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-2 mb-2">
                  {new Set(documents.map(d => d.category)).size}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {documents.filter(d => d.verified).length}
                </div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Document Viewer Modal */}
        <AnimatePresence>
          {isViewerOpen && selectedDocument && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeDocumentViewer}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                        {selectedDocument.title}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {selectedDocument.type} • {selectedDocument.year}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeDocumentViewer}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-2xl"
                  >
                    ×
                  </motion.button>
                </div>

                {/* Document Content */}
                <div className="h-[70vh] border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                  {selectedDocument.filePath.endsWith('.pdf') ? (
                    <iframe
                      src={selectedDocument.filePath}
                      className="w-full h-full"
                      title={selectedDocument.title}
                    />
                  ) : selectedDocument.filePath.endsWith('.pptx') || selectedDocument.filePath.endsWith('.ppt') ? (
                    <div className="flex items-center justify-center h-full bg-slate-50 dark:bg-slate-700">
                      <div className="text-center">
                        <Presentation className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600 dark:text-slate-300 mb-2">
                          PowerPoint presentations are best viewed in their native application
                        </p>
                        <motion.a
                          href={selectedDocument.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Open in New Tab
                        </motion.a>
                      </div>
                    </div>
                  ) : selectedDocument.filePath.endsWith('.docx') || selectedDocument.filePath.endsWith('.doc') ? (
                    <div className="flex items-center justify-center h-full bg-slate-50 dark:bg-slate-700">
                      <div className="text-center">
                        <File className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600 dark:text-slate-300 mb-2">
                          Word documents are best viewed in their native application
                        </p>
                        <motion.a
                          href={selectedDocument.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Open in New Tab
                        </motion.a>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-slate-50 dark:bg-slate-700">
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600 dark:text-slate-300 mb-2">
                          This document type cannot be previewed inline
                        </p>
                        <motion.a
                          href={selectedDocument.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Open in New Tab
                        </motion.a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Document Info */}
                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Description:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">{selectedDocument.description}</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Relevance:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">{selectedDocument.relevance}</p>
                    </div>
                  </div>
                  {selectedDocument.highlights && selectedDocument.highlights.length > 0 && (
                    <div className="mt-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">Key Highlights:</span>
                      <ul className="mt-2 space-y-1">
                        {selectedDocument.highlights.map((highlight: string, index: number) => (
                          <li key={index} className="text-slate-600 dark:text-slate-400 flex items-center">
                            <Target className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CareerArtifacts;
