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
        document.title = 'Services - BURAQ SERVICE';
        break;
      case '/about':
        document.title = 'About - BURAQ SERVICE';
        break;
      case '/contact':
        document.title = 'Contact - BURAQ SERVICE';
        break;
      default:
        document.title = 'BURAQ SERVICE';
    }
  }, [location]);

  return null;
};

export default TitleUpdater;
