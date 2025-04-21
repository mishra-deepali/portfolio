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
        <div className="md:col-span-1">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md sticky top-24 flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-80 md:w-80 md:h-80 overflow-hidden border-4 border-accent rounded-xl ">
              <img
                src={Profilepic}
                alt="Deepali Mishra"
                className="w-full h-full object-cover object-center"
                style={{ width: "350px", height: "380px" }}
              />
            </div>

            <h2 className="text-xl font-bold mb-2">Deepali Mishra</h2>
            <p className="text-muted-foreground mb-4">Ph.D in DSAI</p>

            <div className="space-y-3 ">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mt-1 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p>
                  Ph.D Scholar
                  <br />
                  <span className="text-muted-foreground text-sm">
                    AIT, Thailand and IIT Kanpur, India
                  </span>
                </p>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mt-1 mr-3"
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

                <p>st124434@ait.asia,</p>
                <p>deepali.ait@gmail.com </p>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mt-1 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>
                  Computer Science and Information Mangement
                  <br />
                  <span className="text-muted-foreground text-sm">
                    Asian Institute of Technology, Thailand
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-2">
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Biography</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>
                I am a passionate researcher currently pursuing a dual PhD in
                Data Science and Artificial Intelligence under the joint
                supervision of{" "}
                <a
                  href="http://www.chaklam.com/"
                  target="_blank"
                  className="text-blue-600 hover:underline hover:text-blue-800"
                >
                  Dr. Chaklam Silpasuwanchai
                </a>{" "}
                at the{" "}
                <a
                  href="https://ait.ac.th/"
                  target="_blank"
                  className="text-blue-600 hover:underline hover:text-blue-800"
                >
                  Asian Institute of Technology (AIT), Thailand,
                </a>{" "}
                and{" "}
                <a
                  href="https://ashutosh-modi.github.io/"
                  target="_blank"
                  className="text-blue-600 hover:underline hover:text-blue-800"
                >
                  Dr. Ashutosh Modi
                </a>{" "}
                at the{" "}
                <a
                  href="https://www.iitk.ac.in/"
                  target="_blank"
                  className="text-blue-600 hover:underline hover:text-blue-800"
                >
                  Indian Institute of Technology (IIT) Kanpur, India
                </a>{" "}
              </p>
              <p className="mb-4">
                My research lies at the intersection of computer vision, natural
                language processing (NLP), multimodal learning, and medical
                imaging. I am passionate about developing AI systems that are
                not only technically sound but also usable, interpretable, and
                impactful in real clinical workflows.
              </p>

              <p className="mb-4">
                Currently, I am working on building AI-driven tools for medical
                imaging and trauma classification, integrating multimodal
                learning and expert medical knowledge. I collaborate closely
                with clinicians and radiologists to ensure that the models we
                develop are both relevant and practical for real-world use.
              </p>

              <p>
                Prior to starting my PhD, I served as a Guest Lecturer at{" "}
                <a
                  href="https://ecc.ac.in/"
                  target="_blank"
                  className="text-blue-600 hover:underline hover:text-blue-800"
                >
                  Ewing Christian College, Allahabad, India
                </a>{" "}
                . During my tenure, I taught a range of multidisciplinary
                subjects including Image Processing, Statistics, Basic
                Electronics, and Computer Networking. This experience not only
                strengthened my foundational knowledge across various domains
                but also enhanced my ability to communicate complex technical
                concepts to diverse student groups.
              </p>

              <p>
                In addition to my research, I am committed to education and
                mentorship. I enjoy mentoring students, collaborating on
                interdisciplinary projects, and guiding learners on their
                academic journeys. Teaching has played a vital role in shaping
                my approach to research and fostering a deeper appreciation for
                human-centered technology.
              </p>

              <p>
                I am also deeply interested in science communication, academic
                writing, and bridging the gap between technology and society. My
                work is driven by a vision to create responsible AI that serves
                both clinicians and patients.
              </p>
              <p>
                I am always open to collaboration opportunities and discussions
                about potential research projects. Please feel free to reach out
                through my contact page.
              </p>
              

            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    Ph.D. in Data Science and Artificial Intelligence
                  </h3>
                  <span className="text-accent">2023-Present</span>
                </div>
                <p className="text-primary font-medium">
                  Asian Institute of Technology (AIT), Thailand and IIT Kanpur,
                  India
                </p>
                <p className="text-muted-foreground">
                  Thesis: Multimodal Learning for Medical Image
                </p>
                <p className="text-muted-foreground">
                  Advisor: Dr. Chaklam Silpasuwanchai and Dr. Ashutosh Modi
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    MCA (Master of Computer Applications)
                  </h3>
                  <span className="text-accent">2018-2021</span>
                </div>
                <p className="text-primary font-medium">
                  University of Allahabad
                </p>
                <p className="text-muted-foreground">
                  Focus: Cyber Security- Developed AES algoritmhms with W7
                  algoritmhms for image encryption
                </p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    BSc. in Computer Application
                  </h3>
                  <span className="text-accent">2015-2018</span>
                </div>
                <p className="text-primary font-medium">
                  Ewing Christian College (University of Allahabad)
                </p>
                <p className="text-muted-foreground">
                  Minor: Computer Application
                </p>
                <p className="text-muted-foreground"></p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Affiliations
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Ewing Christian College, University of Allahabad
                    </h3>
                    <p className="text-muted-foreground">
                      Guest Faculty 2021- July, 2023
                    </p>
                  </div>
                </li>
                {/* <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Association for Computational Linguistics (ACL)
                    </h3>
                    <p className="text-muted-foreground">Member</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Neural Information Processing Systems (NeurIPS)
                    </h3>
                    <p className="text-muted-foreground">
                      Program Committee Member
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">IEEE Computer Society</h3>
                    <p className="text-muted-foreground">Senior Member</p>
                  </div>
                </li> */}
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
