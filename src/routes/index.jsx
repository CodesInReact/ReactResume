import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import BlogPage from "views/BlogPage/BlogPage.jsx";
import ContactPage from "views/ContactPage/ContactPage";
import TutorialPage from "views/TutorialPage/TutorialPage.jsx";
import TutorialPage2 from "views/TutorialPage2/TutorialPage2.jsx";
var indexRoutes = [
  { path: "/tutorial-2", name: "TutorialPage2", component: TutorialPage2 },
  { path: "/tutorial", name: "TutorialPage", component: TutorialPage },
    { path: "/contact-us", name: "ContactPage", component: ContactPage },
  { path: "/", name: "Components", component: LandingPage }
];

export default indexRoutes;
