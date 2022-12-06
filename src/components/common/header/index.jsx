import Sign from "./registerEnter";
import {React} from "react";
import './index.scss';
import {Link} from 'react-router-dom';
import Search from '../searchBar';
import Logo from "../logoinicio";
import Register from "../../register";
const Header= () => {
return(
    <>
    <header className="header-container">
        <Link to="/">
                <div className="img1">
                <Logo/>
                </div>
        </Link>
        <ul>

            <li>
            <Link to="/courses">Course</Link>
            </li>

            <li>
            <Link to="/series">News</Link>
            </li>
            
            <li>
            <Link to="/anime">commin soon</Link>
            </li>
        </ul>
        <div className="search-container">
        <Search/>
        </div>
        <div>
            <Register/>
        </div>
        <div>
            <Sign/>
        </div>
      
    </header>
    </>
    );
}
export default Header;
