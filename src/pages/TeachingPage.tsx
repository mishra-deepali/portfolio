import { useState } from 'react';
import { motion } from 'framer-motion';

interface Course {
  id: number;
  code: string;
  title: string;
  level: 'Undergraduate' | 'Graduate';
  description: string;
  semester: string;
  year: number;
  institution: string;
  role: 'Instructor' | 'Teaching Assistant';
  syllabus?: string;
  materials?: string;
}

const courses: Course[] = [
  {
    id: 1,
    code: 'CS 4320',
    title: 'Introduction to Artificial Intelligence',
    level: 'Undergraduate',
    description: 'Introduction to the fundamental concepts and techniques in artificial intelligence, including search, knowledge representation, reasoning, planning, machine learning, and natural language processing.',
    semester: 'Fall',
    year: 2023,
    institution: 'Stanford University',
    role: 'Instructor',
    syllabus: 'https://example.com/courses/ai-intro-syllabus.pdf',
    materials: 'https://example.com/courses/ai-intro-materials'
  },
  {
    id: 2,
    code: 'CS 5340',
    title: 'Advanced Machine Learning',
    level: 'Graduate',
    description: 'Advanced topics in machine learning covering latest research in deep learning, reinforcement learning, generative models, and their applications.',
    semester: 'Spring',
    year: 2023,
    institution: 'Stanford University',
    role: 'Instructor',
    syllabus: 'https://example.com/courses/advanced-ml-syllabus.pdf',
    materials: 'https://example.com/courses/advanced-ml-materials'
  },
  {
    id: 3,
    code: 'CS 6350',
    title: 'Natural Language Processing',
    level: 'Graduate',
    description: 'This course covers foundational and advanced techniques for processing, understanding, and generating human language using computational methods. Topics include language modeling, parsing, semantic analysis, sentiment analysis, and dialogue systems.',
    semester: 'Winter',
    year: 2023,
    institution: 'Stanford University',
    role: 'Instructor',
    syllabus: 'https://example.com/courses/nlp-syllabus.pdf',
    materials: 'https://example.com/courses/nlp-materials'
  },
  {
    id: 4,
    code: 'CS 2102',
    title: 'Introduction to Programming',
    level: 'Undergraduate',
    description: 'Introduction to the fundamentals of programming using Python. Covers basic programming concepts, data structures, algorithms, and problem-solving techniques.',
    semester: 'Spring',
    year: 2022,
    institution: 'Stanford University',
    role: 'Teaching Assistant',
    syllabus: 'https://example.com/courses/intro-programming-syllabus.pdf'
  },
  {
    id: 5,
    code: 'CS 3700',
    title: 'Data Science Fundamentals',
    level: 'Undergraduate',
    description: 'Introduction to data science concepts and techniques, including data cleaning, exploratory data analysis, statistical inference, machine learning, and data visualization.',
    semester: 'Fall',
    year: 2022,
    institution: 'Stanford University',
    role: 'Teaching Assistant',
    syllabus: 'https://example.com/courses/data-science-syllabus.pdf'
  },
  {
    id: 6,
    code: 'CS 5110',
    title: 'Deep Learning for Computer Vision',
    level: 'Graduate',
    description: 'Advanced course on deep learning techniques for computer vision tasks, including image classification, object detection, segmentation, and generative models for images.',
    semester: 'Winter',
    year: 2022,
    institution: 'Stanford University',
    role: 'Teaching Assistant',
    syllabus: 'https://example.com/courses/dl-cv-syllabus.pdf'
  }
];

const TeachingPage = () => {
  const [filter, setFilter] = useState<'all' | 'instructor' | 'ta' | 'undergraduate' | 'graduate'>('all');

  const filteredCourses = courses.filter(course => {
    if (filter === 'all') return true;
    if (filter === 'instructor') return course.role === 'Instructor';
    if (filter === 'ta') return course.role === 'Teaching Assistant';
    if (filter === 'undergraduate') return course.level === 'Undergraduate';
    if (filter === 'graduate') return course.level === 'Graduate';
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Teaching</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          My teaching experience and philosophy in computer science and artificial intelligence.
        </p>
      </motion.div>

      {/* Teaching Philosophy */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-primary">Teaching Philosophy</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            My teaching philosophy centers around fostering critical thinking and practical problem-solving
            skills through active learning. I believe that learning computer science and artificial intelligence
            is most effective when students engage with concepts through hands-on projects, discussion, and
            collaborative work.
          </p>
          <p className="mb-4">
            I strive to create an inclusive classroom environment where diverse perspectives are valued and
            all students feel empowered to participate. I encourage students to ask questions, make mistakes,
            and learn from them—essential skills for both academic success and real-world problem-solving.
          </p>
          <p>
            My courses combine theoretical foundations with practical applications, ensuring students understand
            both the "why" and "how" of computer science concepts. I regularly incorporate current research and
            industry practices into my teaching to keep the material relevant and engaging.
          </p>
        </div>
      </motion.section>

      {/* Filter Controls */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white rounded-md shadow-sm p-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => setFilter('instructor')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === 'instructor'
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            As Instructor
          </button>
          <button
            onClick={() => setFilter('ta')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === 'ta'
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            As TA
          </button>
          <button
            onClick={() => setFilter('undergraduate')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === 'undergraduate'
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Undergraduate
          </button>
          <button
            onClick={() => setFilter('graduate')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === 'graduate'
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Graduate
          </button>
        </div>
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="border-b border-gray-200">
              <div className="flex justify-between items-center p-4">
                <div>
                  <h3 className="text-lg font-bold text-primary">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.code}</p>
                </div>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    course.level === 'Undergraduate'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {course.level}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    course.role === 'Instructor'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {course.role}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-700 mb-4">{course.description}</p>

              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>{course.institution}</span>
                <span>{course.semester} {course.year}</span>
              </div>

              <div className="flex space-x-4">
                {course.syllabus && (
                  <a
                    href={course.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    View Syllabus
                  </a>
                )}

                {course.materials && (
                  <a
                    href={course.materials}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Course Materials
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Teaching Statistics */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-primary">Teaching Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-accent mb-2">450+</div>
            <p className="text-gray-700">Students Taught</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-accent mb-2">6</div>
            <p className="text-gray-700">Courses Developed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-accent mb-2">4.8/5</div>
            <p className="text-gray-700">Average Teaching Evaluation</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TeachingPage;
