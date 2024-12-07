import Navbar from "./Navbar.jsx";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <Navbar/>
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout;