import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";

const CVPage = () => {
  // Mock URL for CV PDF - replace with actual URL when deployed
  const cvPdfUrl =
    "https://drive.google.com/file/d/1U3Vg_syjvyEXdEBKacR7BquPS_3wNcI3/view?usp=sharing";

  const handleDownload = () => {
    window.open(cvPdfUrl, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Curriculum Vitae
        </h1>
      </motion.div>

      <div className="max-w-4xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* QR Code Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-primary mb-4">
              Scan to View CV
            </h3>
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <QRCodeSVG
                value={cvPdfUrl}
                size={180}
                bgColor="#FFFFFF"
                fgColor="#004080"
                level="H"
                includeMargin={false}
              />
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Scan this QR code with your mobile device to view or download my
              CV
            </p>
          </motion.div>

          {/* Download Section */}
          <motion.div
            className="md:col-span-2 bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-primary mb-4">Download CV</h3>

            <p className="text-gray-700 mb-6">
              My CV includes a comprehensive overview of my academic background,
              , teaching experience, and professional activities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </button>

              <a
                href={`mailto:?subject=Dr.%20Jane%20Smith%20CV&body=Please%20find%20my%20CV%20at%20${encodeURIComponent(cvPdfUrl)}`}
                className="bg-secondary hover:bg-secondary/90 text-primary font-semibold py-3 px-6 rounded-md flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* CV Preview Section */}
        <motion.div
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-6">CV Preview</h2>

          {/* Education Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">
                    Ph.D. in Data Science and AI
                  </h4>
                  <span className="text-accent">2023-Present</span>
                </div>
                <p className="text-primary font-medium">
                  Asian Institute of Technology, Thailand and IIT Kanpur, India
                </p>
                <p className="text-gray-600">
                  Thesis: Multimodal AI for Healthcare
                </p>
                <p className="text-gray-600"></p>
              </div>

              <div>
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">
                    MCA (Master of Computer Applications)
                  </h4>
                  <span className="text-accent">2018-2021</span>
                </div>
                <p className="text-primary font-medium">
                  University of Allahabad
                </p>
                <p className="text-gray-600">
                  Focus: Cyber Security- Developed AES algoritmhms with W7
                  algoritmhms for image encryption
                </p>
              </div>

              <div>
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">
                    B.S.c. in Computer Application
                  </h4>
                  <span className="text-accent">2015-2018</span>
                </div>
                <p className="text-primary font-medium">
                  Ewing Christian College, University of Allahabad
                </p>
                <p className="text-gray-600">Minor: Computer Application</p>
                {/* <p className="text-gray-600">Graduated Summa Cum Laude</p> */}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">Teaching Assistant</h4>
                  <span className="text-accent">
                    August 2024- December 2024
                  </span>
                </div>
                <p className="text-primary font-medium">
                  Asian Institute of Technology, Department of Computer Science
                  and Information Management
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>
                    Assisted in delivering the lectures and tutorials, helping
                    students grasp key concepts in machine learning
                  </li>
                  <li>
                    Provided hands-on support during lab sessions, guiding
                    students through practical exercises and projects
                  </li>
                  <li>
                    Evaluated coursework and projects, offering detailed
                    feedback to enhance students' understanding of practical
                    machine learning application
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">Guest Faculty</h4>
                  <span className="text-accent">November 2021-July 2023</span>
                </div>
                <p className="text-primary font-medium">
                  Ewing Christian College, Prayagraj
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>
                    During this period, I taught various subjects like Basic
                    Electronics, Image Processing, Data Communication and
                    Networking, Probability and Statistics.
                  </li>
                  <li>
                    Delivered lectures on communication skills to foster student
                    growth and strengthen their professional development
                  </li>
                  <li>
                    Attended and organized various workshops and seminars to
                    enhance the learning experience of students.
                  </li>
                </ul>
              </div>

              {/* <div>
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">
                    Graduate Research Assistant
                  </h4>
                  <span className="text-accent">2017-2021</span>
                </div>
                <p className="text-primary font-medium">
                  MIT Computer Science and Artificial Intelligence Laboratory
                  (CSAIL)
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>
                    Developed self-supervised learning methods for natural
                    language understanding
                  </li>
                  <li>
                    Published 8 peer-reviewed papers in top conferences and
                    journals
                  </li>
                  <li>
                    Collaborated with industry partners on applied NLP research
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          {/* Publications Preview
          <div>
            <h3 className="text-xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Selected Publications
              <span className="text-sm font-normal text-gray-500 ml-2">
                (showing 3 of 15)
              </span>
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-semibold">Smith, J.</span>, Johnson, S.,
                Chang, M. (2023). "Parameter-Efficient Fine-tuning of Large
                Language Models for Domain Adaptation."
                <span className="italic">
                  Proceedings of the 60th Annual Meeting of the Association for
                  Computational Linguistics.
                </span>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Smith, J.</span>, Williams, D.,
                Chen, L. (2023). "Human-AI Collaborative Learning through
                Natural Dialogue."
                <span className="italic">
                  IEEE Transactions on Neural Networks and Learning Systems.
                </span>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Smith, J.</span>, Doe, J.,
                Johnson, S. (2022). "ContrastiveNLP: A Framework for
                Self-Supervised Language Representation Learning."
                <span className="italic">
                  Journal of Machine Learning Research.
                </span>
              </p>

              <p className="mt-4 text-center">
                <a
                  href="/publications"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  View all publications →
                </a>
              </p>
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default CVPage;
