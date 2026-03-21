import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Download, Printer, Eye, EyeOff } from 'lucide-react';

import { profile } from '../data/profile';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PageTransition from '../components/PageTransition';

const Resume: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  const resumeUrl = '/Ajith_Srikanth_Resume_M.pdf';
  const googleDocsUrl = `https://docs.google.com/gview?url=${encodeURIComponent(window.location.origin + resumeUrl)}&embedded=true`;
  const pdfSource = isDev ? resumeUrl : googleDocsUrl;

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ajith_Srikanth_Resume_M.pdf';
    link.download = 'Ajith_Srikanth_Resume_M.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.open('/Ajith_Srikanth_Resume_M.pdf', '_blank');
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Resume - {profile.name}</title>
        <meta name="description" content="Download Ajith Srikanth's resume and professional experience." />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen py-20"
      >
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Resume
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download my resume or view it online. Feel free to reach out if you'd like to discuss opportunities.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={handleDownload}
              size="lg"
              className="flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
            <Button
              onClick={handlePrint}
              variant="outline"
              size="lg"
              className="flex items-center"
            >
              <Printer className="w-5 h-5 mr-2" />
              Print Resume
            </Button>
            <Button
              onClick={() => setIsFullscreen(!isFullscreen)}
              variant="ghost"
              size="lg"
              className="flex items-center"
            >
              {isFullscreen ? (
                <>
                  <EyeOff className="w-5 h-5 mr-2" />
                  Exit Fullscreen
                </>
              ) : (
                <>
                  <Eye className="w-5 h-5 mr-2" />
                  Fullscreen
                </>
              )}
            </Button>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div variants={itemVariants}>
            <Card className={`${isFullscreen ? 'fixed inset-4 z-50' : ''}`}>
              <div className={`${isFullscreen ? 'h-full' : 'h-96 md:h-[800px]'} relative`}>
                <iframe
                  src={pdfSource}
                  className="w-full h-full rounded-lg bg-white/50"
                  title="Ajith Srikanth Resume"
                  onLoad={(e) => {
                    // Modern browsers handle PDF natively, no special scripts needed
                    console.log('PDF Loaded');
                  }}
                />
                {/* Fallback link if iframe fails */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href="/Ajith_Srikanth_Resume_M.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary underline transition-colors"
                  >
                    Open PDF directly ↗
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Interested in Working Together?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm always open to discussing new opportunities and collaborations.
                  Feel free to reach out if you'd like to connect.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="https://calendly.com/d/cqp7-3p3-jwq/30-minute-meeting" target="_blank" size="lg">
                    Get In Touch
                  </Button>
                  <Button href={profile.linkedin} target="_blank" variant="outline" size="lg">
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </PageTransition>
  );
};

export default Resume;


