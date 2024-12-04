import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function QueryLink({ to, ...props }) {


    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
}