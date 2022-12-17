import { appName } from "../../util/constants";
import './navbar.css';

function Navbar(){
    return (
        <div className="nav">
            <button className="nav-header">{appName}</button>
        </div>
    );
    
}

export default Navbar;