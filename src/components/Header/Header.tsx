import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";
import AppRoutes from "../../AppRoutes";
import {Button} from "antd";

interface HeaderProps {
    activePage: string,
}

const Header: React.FC<HeaderProps> = ({activePage}) => {
    const checkActivePage = (route: string) => {
        if (activePage === route) {
            return 'header-content__element-link active';
        }
        return 'header-content__element-link inactive'
    }

    const loggedIn = false;

    return (
        <div className='header'>
            <div className='header-content'>
                <div className='header-content__element'>
                    <Link to='/' className='header-content__element-image'>
                        <img className='header-logo' data-cy='header-logo' src='/jurni-logo.png' alt='Jurni-logo'/>
                    </Link>
                </div>
                <div className='header-content__element'>
                    <div className='header-content__element-links'>
                        {AppRoutes.map((route, index) => (
                            route['pageName'] === undefined || route['pageName'] === 'Login' || route['pageName'] === 'Register' ? null : (
                                <Link key={index} to={route['path']} data-cy={`header-link-${route['pageName']}`}
                                      className={checkActivePage(route['path'])}>{route['pageName']}</Link>
                            )
                        ))}
                    </div>
                </div>
                <div className='header-content__element'>
                    {loggedIn ?
                        <div className='header-content__element-user'>
                            <p className='header-user-name' data-cy='header-user-name'>Simon Kuperus</p>
                            <Button className='header-log-out-button' type='primary'>Log out</Button>
                        </div>
                        :
                        <div className='header-content__element-buttons'>
                            <Link to='/login'><Button className='header-log-in-button' type='primary'>Log in</Button></Link>
                            <Link to='/register'><Button className='header-register-button' type='primary'>Register</Button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header