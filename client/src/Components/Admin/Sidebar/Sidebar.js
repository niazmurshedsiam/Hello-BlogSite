import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { faMandalorian } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [loggedInUsr, setLoggedInUser] = useContext(UserContext)

    return (

        <div className="admin-sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" >
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/addBlog' className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to="/blog/manage" className="text-white">
                        <FontAwesomeIcon icon={faMandalorian} /> <span>Manage</span>
                    </Link>
                </li>
                <div className="log-out mb-5 pb-4">
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span
                        onClick={() => setLoggedInUser(false)}
                    >Logout</span></Link>
                </div>
            </ul>

        </div>

    );
};

export default Sidebar;