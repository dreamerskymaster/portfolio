import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

import PageTransition from '../components/PageTransition';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.history.back()}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </Button>

              <Button
                to="/"
                className="flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;