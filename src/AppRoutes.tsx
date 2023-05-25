import Main from "./pages/Main";
import About from "./pages/About";
import Matchmaker from "./pages/Matchmaker";
import Contact from "./pages/Contact";

const AppRoutes = [
    {
        path: '/',
        pageName: 'Home',
        element: <Main/>,
        description: 'The landing page of the web application.'
    },
    {
        path: '/about',
        pageName: 'About us',
        element: <About/>,
        description: ''
    },
    {
        path: '/matchmaker',
        pageName: 'Matchmaker',
        element: <Matchmaker/>,
        description: ''
    },
    {
        path: '/contact',
        pageName: 'Contact',
        element: <Contact/>,
        description: ''
    },
];

export default AppRoutes;