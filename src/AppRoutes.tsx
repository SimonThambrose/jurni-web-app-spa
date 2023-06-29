import Main from "./pages/Main";
import About from "./pages/About";
import Matchmaker from "./pages/Matchmaker";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";

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
        description: 'This page provides information about the organization. It includes details such as the organisation`s mission, team members, and achievements.'
    },
    {
        path: '/matchmaker',
        pageName: 'Matchmaker',
        element: <Matchmaker/>,
        description: 'It is possible to choose a plan for the Matchmaker application created by Jurni. A user can choose between the free or premium plan, or is able to request an enterprise plan.'
    },
    {
        path: '/contact',
        pageName: 'Contact',
        element: <Contact/>,
        description: 'This page provides contact information for the organization. It includes details such as the organisation`s address, phone number, and email address. As well as a contact form.'
    },
    {
        path: '/login',
        pageName: 'Login',
        element: <Login/>,
        description: 'This page provides a login form for the user to login to the web application.'
    },
    {
        path: '/register',
        pageName: 'Register',
        element: <Login/>, //TODO change to register page
        description: 'This page provides a registration form for the user to register to the web application.'
    }
];

export default AppRoutes;