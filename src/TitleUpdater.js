// TitleUpdater.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'BURAQ GLOBAL LOGISTICS';
        break;
      case '/services':
        document.title = 'Services - BURAQ GLOBAL LOGISTICS';
        break;
      case '/about-us':
        document.title = 'About - BURAQ GLOBAL LOGISTICS';
        break;
      case '/contact':
        document.title = 'Contact - BURAQ GLOBAL LOGISTICS';
        break;
      default:
        document.title = 'BURAQ GLOBAL LOGISTICS';
    }
  }, [location]);

  return null;
};

export default TitleUpdater;
