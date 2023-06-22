import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="header">
        <div className="my-name">      
          <li>
            <h1>
              GET KEANU
            </h1>
          </li>
        </div>
  
        <div className="nav nav-tab">
          {/* <li className="nav-item">
            <a
              href="#news"
              onClick={() => handlePageChange('News')}
              // Check to see if the currentPage is `News`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'News' ? 'nav-link active' : 'nav-link'}
            >
              News
            </a>
          </li> */}
          <li className="nav-item">
            <a
              href="#episodes"
              onClick={() => handlePageChange('Episodes')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Episodes"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Episodes' ? 'nav-link active' : 'nav-link'}
            >
              Episodes
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#rankings"
              onClick={() => handlePageChange('Rankings')}
              // Check to see if the currentPage is `Rankings`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Rankings' ? 'nav-link active' : 'nav-link'}
            >
              Rankings
            </a>
          </li>
        </div>
      </ul>
    );
  }

export default NavTabs;