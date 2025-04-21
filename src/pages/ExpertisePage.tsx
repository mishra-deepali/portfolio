import { motion } from "framer-motion";

interface ExpertiseArea {
  id: number;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

interface TechnicalSkill {
  name: string;
  level: number; // 1-5
  category: "language" | "framework" | "tool" | "methodology";
}

const expertiseAreas: ExpertiseArea[] = [
  {
    id: 1,
    title: "Natural Language Processing",
    description:
      "Developing models and algorithms that enable computers to process, understand, and generate human language. My work spans across various NLP tasks including text classification, machine translation, sentiment analysis, and question answering.",
    icon: "🔤",
    skills: ["Language Modeling", "Question Answering"],
  },
  {
    id: 2,
    title: "Machine Learning",
    description:
      "Designing and implementing machine learning algorithms that can learn patterns from data and make predictions or decisions. My expertise includes supervised learning, and unsupervised learning.",
    icon: "🧠",
    skills: ["Deep Learning", "Self-Supervised Learning", "Neural Networks"],
  },
  // {
  //   id: 3,
  //   title: "Human-Computer Interaction",
  //   description:
  //     "Creating and evaluating interactive systems that are effective, efficient, and satisfying for users. My research focuses on designing intelligent interfaces that can adapt to user needs and preferences.",
  //   icon: "👥",
  //   skills: [
  //     "User-Centered Design",
  //     "Intelligent Interfaces",
  //     "Usability Evaluation",
  //     "Interactive ML Systems",
  //     "Human-AI Collaboration",
  //     "Accessibility",
  //   ],
  // },
  {
    id: 4,
    title: "Computer Vision",
    description:
      "Developing algorithms and models that enable computers to interpret and understand visual information from the world. My work includes image classification, object detection, and visual reasoning.",
    icon: "👁️",
    skills: ["Image Classification", "Object Detection", "Multimodal Learning"],
  },
];

const technicalSkills: TechnicalSkill[] = [
  // Frameworks & Libraries
  { name: "PyTorch", level: 3, category: "framework" },
  { name: "TensorFlow", level: 2, category: "framework" },
  { name: "Scikit-learn", level: 3, category: "framework" },
  { name: "Hugging Face", level: 3, category: "framework" },
  { name: "Pandas", level: 4, category: "framework" },
  { name: "NumPy", level: 4, category: "framework" },
  // { name: "React", level: 3, category: "framework" },
  // { name: "Flask", level: 4, category: "framework" },

  // Programming Languages
  { name: "Python", level: 3, category: "language" },
  // { name: "JavaScript", level: 4, category: "language" },
  { name: "C++", level: 3, category: "language" },
  { name: "Java", level: 3, category: "language" },
  { name: "SQL", level: 4, category: "language" },
  // { name: "R", level: 3, category: "language" },

  // Tools
  { name: "Git", level: 4, category: "tool" },
  { name: "Docker", level: 3, category: "tool" },
  { name: "Jupyter", level: 5, category: "tool" },
  { name: "LaTeX", level: 4, category: "tool" },
  // { name: "AWS", level: 3, category: "tool" },
  // { name: "Linux", level: 4, category: "tool" },

  // Methodologies
  // { name: "Agile", level: 4, category: "methodology" },
  // { name: "CI/CD", level: 3, category: "methodology" },
  // { name: "Test-Driven Development", level: 3, category: "methodology" },
  { name: "Research Design", level: 3, category: "methodology" },
  { name: "Data Analysis", level: 4, category: "methodology" },
];

const ExpertisePage = () => {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2 w-6 rounded-sm ${
              i <= level ? "bg-accent" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Areas of Expertise
        </h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          My core research domains and technical competencies that define my
          academic and professional work.
        </p>
      </motion.div>

      {/* Expertise Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={area.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{area.icon}</div>
                <h2 className="text-2xl font-bold text-primary">
                  {area.title}
                </h2>
              </div>

              <p className="text-gray-700 mb-6">{area.description}</p>

              <h3 className="text-lg font-semibold mb-3 text-primary">
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={`${area.id}-${skill}`}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technical Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Programming Languages
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                {technicalSkills
                  .filter((skill) => skill.category === "language")
                  .sort((a, b) => b.level - a.level)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Frameworks & Libraries
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                {technicalSkills
                  .filter((skill) => skill.category === "framework")
                  .sort((a, b) => b.level - a.level)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Tools</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                {technicalSkills
                  .filter((skill) => skill.category === "tool")
                  .sort((a, b) => b.level - a.level)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Methodologies */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Methodologies
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                {technicalSkills
                  .filter((skill) => skill.category === "methodology")
                  .sort((a, b) => b.level - a.level)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ExpertisePage;
