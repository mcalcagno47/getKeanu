import React, { useState } from 'react';
import NavTabs from './NavTabs';
import News from './pages/News';
import Episodes from './pages/Episodes';
import Rankings from './pages/Rankings';

function Header() {
    const [currentPage, setCurrentPage] = useState('News');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Episodes') {
        return <Episodes />;
      }
      if (currentPage === 'Rankings') {
        return <Rankings />;
      }
      return <News />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
  }

export default Header;