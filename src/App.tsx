import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {AppRoutes.map((route, index) => {
                    return <Route key={index} path={route['path']} element={route['element']}/>;
                })}
            </Routes>
        </Router>
    )
}

export default App;