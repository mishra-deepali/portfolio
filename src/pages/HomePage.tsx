import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Profilepic from "/images/profile-pic.jpg";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Deepali Mishra
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Ph.D Scholar in DataScience and AI
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I am a researcher specializing in Artificial Intelligence, focusing
            on multimodal learning at the intersection of computer vision and
            natural language processing. My work centers on developing
            intelligent systems for medical image understanding and clinical
            decision support. Currently, I am pursuing a Ph.D. in AI and
            Healthcare at the Asian Institute of Technology (AIT), Thailand, in
            collaboration with the Indian Institute of Technology (IIT) Kanpur,
            India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/research"
              className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              View Research
            </Link>
            <Link
              to="/cv"
              className="px-6 py-3 rounded-md bg-secondary text-primary font-semibold hover:bg-secondary/90 transition-colors"
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent">
            <img
              src={Profilepic}
              style={{ width: "350px", height: "400px" }}
              alt="Deepali Mishra"
              className="w-full h-full object-cover object-center  "
            />
          </div>
        </motion.div>
      </div>

      {/* Stats/Overview Section
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className="text-accent text-4xl font-bold mb-2">15+</h3>
          <p className="text-gray-600">Publications</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <h3 className="text-accent text-4xl font-bold mb-2">8</h3>
          <p className="text-gray-600">Years of Research</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <h3 className="text-accent text-4xl font-bold mb-2">5</h3>
          <p className="text-gray-600">Research Grants</p>
        </motion.div>
      </div> */}

      {/* Latest Updates Section */}
      {/* <div className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <span className="text-sm text-accent font-semibold">
              July 15, 2023
            </span>
            <h3 className="text-xl font-bold mt-2 mb-3">
              New Research Paper Published
            </h3>
            <p className="text-gray-600">
              "Understanding Neural Networks in Low-Resource Environments" has
              been published in the Journal of Machine Learning Research.
            </p>
            <Link
              to="/publications"
              className="mt-4 inline-block text-primary font-semibold hover:text-primary/80"
            >
              Read more →
            </Link>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <span className="text-sm text-accent font-semibold">
              May 28, 2023
            </span>
            <h3 className="text-xl font-bold mt-2 mb-3">
              Keynote Speaker at AI Conference
            </h3>
            <p className="text-gray-600">
              I'll be delivering a keynote address at the International
              Conference on Artificial Intelligence in Toronto.
            </p>
            <Link
              to="/news"
              className="mt-4 inline-block text-primary font-semibold hover:text-primary/80"
            >
              Read more →
            </Link>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
