import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutHome from "../Pages/OneFitout/About/Home";
import BlogDetails from "../Pages/OneFitout/Blog/BlogDetails";
import BlogHome from "../Pages/OneFitout/Blog/Home";
import Commercial from "../Pages/OneFitout/Commercial/Commercial";
import OneFitoutHome from "../Pages/OneFitout/Home/Home";
import ProjectsHome from "../Pages/OneFitout/Projects/Home";
// import ProjectInnerGallery from "../Pages/OneFitout/Projects/ProjectInnerGallery";
import { motion } from "framer-motion";
import RootLayout from "../Components/RootLayout"; // newly created
import DesignByOne from "../Pages/OneFitout/DesignByOne/DesignByOneBanner";
import KitchenHomePage from "../Pages/OneFitout/Kitchens/KitchenHomePage";
import ProjectInt from "../Pages/OneFitout/Projects/ProjectInt";
import ProjectLoader from "../Pages/OneFitout/Projects/ProjectLoader";
import ResidentialHome from "../Pages/OneFitout/Residence/Home";

const ProjectInnerGallery = lazy(() =>
  import("../Pages/OneFitout/Projects/ProjectInnerGallery")
);
const Loader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="loader-container"
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <motion.div
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="spinner"
    >
      <h1>Loading...</h1>
    </motion.div>
  </motion.div>
);

const Routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <OneFitoutHome />,
      },
      {
        path: "/projects",
        element: <ProjectsHome />,
      },
      {
        path: "/projects/:type/:area/:community/:id",
        element: <ProjectInt />,
        loader: ProjectLoader,
      },
      {
        path: "/projects/:type/:area/:community/:id/gallery",
        element: (
          <Suspense fallback={<Loader />}>
            <ProjectInnerGallery />
          </Suspense>
        ),
      },
      {
        path: "/1kitchen",
        // element: <KitchenHome />,
        element: <KitchenHomePage />,
      },
      {
        path: "/residential",
        element: <ResidentialHome />,
      },
      {
        path: "/blog",
        element: <BlogHome />,
      },
      {
        path: "/about-us",
        element: <AboutHome />,
      },
      {
        path: "/wip",
        element: <OneFitoutHome />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/commercial",
        element: <Commercial />,
      },
      {
        path: "/design-by-1",
        element: <DesignByOne />,
      },
    ],
  },
]);

export default Routes;
