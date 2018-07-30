import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ContactPage from "views/ContactPage/ContactPage";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path: "/about-us", name: "LandingPage", component: ProfilePage },
  { path: "/client-login", name: "LoginPage", component: LoginPage },
    { path: "/contact-us", name: "ContactPage", component: ContactPage },
  { path: "/", name: "Components", component: LandingPage }
];

export default indexRoutes;
