import { motion } from "framer-motion";
import Profilepic from "/images/profile-pic.jpg";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About Me
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* LEFT SIDEBAR */}
        <div className="md:col-span-1">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md sticky top-24 flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-80 md:w-80 md:h-80 overflow-hidden border-4 border-accent rounded-xl">
              <img
                src={Profilepic}
                alt="Deepali Mishra"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h2 className="text-xl font-bold mt-4">Deepali Mishra</h2>
            <p className="text-muted-foreground mb-4 text-center">
              Dual PhD Researcher | Clinical NLP | Multimodal AI
            </p>

            <div className="space-y-3 text-sm text-center">
              <p>AIT Thailand & IIT Kanpur</p>
              <p>st124434@ait.asia</p>
              <p>deepalischolar110@gmail.com</p>

              <a
                href="https://www.linkedin.com/in/mishra-deepali/"
                target="_blank"
                className="text-blue-600 hover:underline block"
              >
                LinkedIn Profile
              </a>

              <a
                href="https://github.com/mishra-deepali/portfolio"
                target="_blank"
                className="text-blue-600 hover:underline block"
              >
                GitHub Portfolio
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2">
          {/* BIOGRAPHY */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Biography
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <p>
                I am a Dual PhD researcher in Data Science and Artificial
                Intelligence at{" "}
                <a
                  href="https://ait.ac.th/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Asian Institute of Technology (Thailand)
                </a>{" "}
                and{" "}
                <a
                  href="https://www.iitk.ac.in/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  IIT Kanpur (India)
                </a>
                .
              </p>

              <p>
                My research focuses on Clinical NLP, Vision-Language Models
                (VLMs), Multimodal Large Language Models (MLLMs), medical
                question answering, biomedical text understanding, and healthcare
                AI systems.
              </p>

              <p>
                I develop AI pipelines involving entity extraction, multimodal
                reasoning, report understanding, text classification, and
                question answering for clinical workflows.
              </p>

              <p>
                I have collaborated with clinicians and specialists from{" "}
                <strong>Ramathibodi Hospital, Thailand</strong> and{" "}
                <strong>United Medicity Hospital, Prayagraj, India</strong> to
                build clinically relevant medical AI systems.
              </p>

              <p>
                My work has been published in leading venues including ACL,
                MICCAI, and ACM. I also have teaching experience in Natural
                Language Processing and Machine Learning where I designed
                assignments, evaluated students, conducted viva, and mentored
                projects.
              </p>

              <p>
                I am interested in translating research into real-world
                healthcare products, especially in clinical data workflows,
                intelligent NLP systems, and responsible AI.
              </p>
            </div>
          </motion.section>

          {/* EDUCATION */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Education
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">
                    Dual PhD in Data Science and Artificial Intelligence
                  </h3>
                  <span className="text-accent">2023 - Present</span>
                </div>
                <p className="text-primary">
                  Asian Institute of Technology & IIT Kanpur
                </p>
                <p className="text-muted-foreground">
                  Focus: Multimodal AI for Medical Imaging and Clinical QA
                </p>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">
                    Master of Computer Applications
                  </h3>
                  <span className="text-accent">2018 - 2021</span>
                </div>
                <p className="text-primary">University of Allahabad</p>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">
                    Bachelor of Science
                  </h3>
                  <span className="text-accent">2015 - 2018</span>
                </div>
                <p className="text-primary">
                  Ewing Christian College, Prayagraj
                </p>
              </div>
            </div>
          </motion.section>

          {/* EXPERIENCE */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Professional Experience
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md space-y-5">
              <div>
                <h3 className="font-semibold">
                  Teaching Assistant | IIT Kanpur
                </h3>
                <p className="text-muted-foreground">
                  Natural Language Processing | 2025
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Teaching Assistant | Asian Institute of Technology
                </h3>
                <p className="text-muted-foreground">
                  Machine Learning | 2024 - 2025
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Guest Faculty | Ewing Christian College
                </h3>
                <p className="text-muted-foreground">
                  2021 - 2023
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
