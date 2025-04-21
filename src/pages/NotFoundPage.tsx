import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center justify-center">
      <motion.div
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-primary font-bold text-7xl mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/research"
            className="px-6 py-3 bg-secondary text-primary rounded-md font-medium hover:bg-secondary/90 transition-colors"
          >
            View Research
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
