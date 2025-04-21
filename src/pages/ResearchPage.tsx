import { useState } from "react";
import { motion } from "framer-motion";
import medvqa from "/images/medical_vqa.jpg";

interface ResearchProject {
  id: number;
  title: string;
  status: "ongoing" | "completed";
  description: string;
  image: string;
  collaborators: string[];
  year: string;
  funding?: string;
}

const projects: ResearchProject[] = [
  {
    id: 1,
    title: "Multi-Modal AI For Healthcare",
    status: "ongoing",
    description:
      "We are developing a visual question answering system for medical images, focusing on improving the interpretability and accuracy of AI models in healthcare. The project aims to create a robust framework that can analyze medical images and answer questions related to them, enhancing the decision-making process in clinical settings.",
    image: medvqa,
    collaborators: [
      "Dr. Chaklam Silpasuwanchai (AIT BrainLab)",
      "Dr. Ashutosh Modi (Exploration Lab -IIT Kanpur)",
      "Dr. Sorayouth Chumnanvej (Ramathibodi Hospital)",
    ],
    year: "2024-present",
    // funding: "National Science Foundation (NSF)",
  },
  {
    id: 2,
    title: "Computer Vision for Trauma Classification",
    status: "ongoing",
    description:
      "This project focuses on developing computer vision algorithms to classify trauma images, aiming to assist medical professionals in diagnosing and treating trauma cases. We are exploring computer vision techniques to improve the accuracy and efficiency of image classification in emergency medicine.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80",
    collaborators: [
      "Dr. Chaklam Silpasuwanchai (AIT)",
      "Dr. Sorayouth Chumnanvej (Ramathibodi Hospital)",
    ],
    year: "2025-present",
    // funding: "Stanford AI Lab",
  },
  // {
  //   id: 3,
  //   title: "Self-Supervised Learning for Natural Language Understanding",
  //   status: "completed",
  //   description: "My Ph.D. dissertation work focused on developing novel self-supervised learning methods for natural language understanding tasks. I developed a framework called 'ContrastiveNLP' that leverages contrastive learning objectives to learn better text representations without requiring large amounts of labeled data.",
  //   image: "https://images.unsplash.com/photo-1655720828018-ae1934ed0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   collaborators: ["Prof. John Doe (MIT)"],
  //   year: "2017-2021"
  // },
  // {
  //   id: 4,
  //   title: "Improving Efficiency of Transformer-Based Models",
  //   status: "completed",
  //   description: "During my research internship at Google AI, I worked on techniques to reduce the computational requirements of Transformer-based models while maintaining performance. This included exploring distillation, pruning, and quantization methods on BERT-like architectures.",
  //   image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  //   collaborators: ["Dr. Emily Zhang (Google AI)", "Dr. Robert Thompson (Google AI)"],
  //   year: "2019-2020"
  // },
  // {
  //   id: 5,
  //   title: "Cross-Lingual Transfer Learning for Low-Resource Languages",
  //   status: "completed",
  //   description: "This project investigated methods to transfer knowledge from high-resource languages to improve NLP systems for low-resource languages. We developed a novel approach that leverages shared semantic spaces and syntactic structures across languages to enable effective cross-lingual transfer.",
  //   image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
  //   collaborators: ["Prof. Maria Rodriguez (Stanford)", "Dr. James Lee (MIT)"],
  //   year: "2018-2020"
  // }
];

const ResearchPage = () => {
  const [filter, setFilter] = useState<"all" | "ongoing" | "completed">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.status === filter;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Research
        </h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          My research focuses on the intersection of computer vision and natural
          language processing, with a particular emphasis on developing
          interpretable AI systems for healthcare applications. I am
          particularly interested in how these technologies can be applied to
          improve medical decision-making and patient outcomes.
        </p>
      </motion.div>

      {/* Filter Controls */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white rounded-md shadow-sm p-1">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === "all"
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("ongoing")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === "ongoing"
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Ongoing
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === "completed"
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Research Projects */}
      <div className="space-y-12">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">
                      {project.year}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === "ongoing"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold mb-1">Collaborators:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.collaborators.map((collaborator) => (
                      <li key={`${project.id}-${collaborator}`}>
                        {collaborator}
                      </li>
                    ))}
                  </ul>

                  {project.funding && (
                    <>
                      <h4 className="text-sm font-semibold mt-3 mb-1">
                        Funding:
                      </h4>
                      <p className="text-sm text-gray-600">{project.funding}</p>
                    </>
                  )}
                </div>
              </div>

              <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  {project.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
