import './Navi.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink end to="/">Home</NavLink>
            <NavLink end to="/Count">Count</NavLink>
            <NavLink end to="/Todos">Todo</NavLink>
            <NavLink end to="/Covid">Covid</NavLink>
        </div>
    )
}
export default Nav;