import Navbar from "./Navbar.jsx";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout;