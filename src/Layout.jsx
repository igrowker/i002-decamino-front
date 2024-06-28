import PropTypes from 'prop-types';
import { Footer } from './components/UI/Footer';
import { Navbar_Landing_Page } from './components/LandingPage/Navbar.LanP';

const Layout = ({ children }) => {
    return (
      <div className="font-nunito">
        {/* Encabezado */}
        <Navbar_Landing_Page/>
  
        {/* Contenido principal */}
        {children}
        
  
        {/* Pie de página */}
        <Footer/>
      </div>
    );

    
};

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Layout;
