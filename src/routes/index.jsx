import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import BlogPage from "views/BlogPage/BlogPage.jsx";
import ContactPage from "views/ContactPage/ContactPage";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path: "/blog", name: "BlogPage", component: BlogPage },
  { path: "/client-login", name: "LoginPage", component: LoginPage },
    { path: "/contact-us", name: "ContactPage", component: ContactPage },
  { path: "/", name: "Components", component: LandingPage }
];

export default indexRoutes;
