import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold">
              Deepali<span className="text-accent">Mishra</span>
            </Link>
            <p className="mt-2 text-white/80 text-sm">
              Academic research and professional portfolio
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h5 className="text-accent font-medium mb-2">Connect</h5>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/mishra-deepali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mishra-deepali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="mailto:st124434@ait.asia"
                  className="text-white hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-accent font-medium mb-2">Quick Links</h5>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    to="/research"
                    className="hover:text-accent transition-colors"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    to="/publications"
                    className="hover:text-accent transition-colors"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cv"
                    className="hover:text-accent transition-colors"
                  >
                    CV
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm text-white/60">
          <p>© {currentYear} Academic Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
