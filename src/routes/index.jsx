import {CodeSplitComponent} from '../BooBoo/BooBoo'
let LandingPageLoadable = CodeSplitComponent( import("views/LandingPage/LandingPage.jsx"));

var indexRoutes = [

    {
        path: "/", name: "BlogPage", component: LandingPageLoadable,

    }
];


  export default indexRoutes;
