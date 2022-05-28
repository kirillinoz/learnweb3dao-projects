import Navbar from './Navbar.component';
import Footer from './Footer.component';

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer/>
        </div>
    );
}

export default Layout