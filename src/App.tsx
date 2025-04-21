import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import PublicationsPage from "./pages/PublicationsPage";
import TeachingPage from "./pages/TeachingPage";
import ExpertisePage from "./pages/ExpertisePage";
import BlogPage from "./pages/BlogPage";
import NewsPage from "./pages/NewsPage";
import CVPage from "./pages/CVPage";
import NotFoundPage from "./pages/NotFoundPage";

// Base path for GitHub Pages deployment
const basePath = import.meta.env.BASE_URL;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        }
      />
      <Route
        path="/research"
        element={
          <MainLayout>
            <ResearchPage />
          </MainLayout>
        }
      />
      {/* <Route path="/publications" element={<MainLayout><PublicationsPage /></MainLayout>} /> */}
      <Route
        path="/teaching"
        element={
          <MainLayout>
            <TeachingPage />
          </MainLayout>
        }
      />
      <Route
        path="/expertise"
        element={
          <MainLayout>
            <ExpertisePage />
          </MainLayout>
        }
      />
      {/* <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} /> */}
      <Route
        path="/news"
        element={
          <MainLayout>
            <NewsPage />
          </MainLayout>
        }
      />
      <Route
        path="/cv"
        element={
          <MainLayout>
            <CVPage />
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <MainLayout>
            <NotFoundPage />
          </MainLayout>
        }
      />
    </>
  ),
  { basename: basePath }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
