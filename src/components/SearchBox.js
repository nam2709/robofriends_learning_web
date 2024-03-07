import React, { useState, useEffect } from 'react';

const SearchBox = ({ searchChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchIcon, setsearchIcon] = useState(false);

  const handleisOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleResize() {
      const isSmallScreen = window.innerWidth < 700;
      setIsOpen(!isSmallScreen);
      setsearchIcon(isSmallScreen);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderSearchInput = () => (
    <input
      onChange={searchChange}
      className='pa3 br-pill bw1 b--silver-30 shadow-5 w-50'
      type="search"
      placeholder='Search'
    />
  );

  const renderSearchIcon = () => (
    <button className='search-icon-button' onClick={handleisOpen}>
      <i className='fas fa-search'></i>
    </button>
  );

  return (
    <div className={`pa2 ${isOpen ? 'open' : ''} ${searchIcon ? 'appear' : ''}`}>
      {isOpen && !searchIcon && renderSearchInput()}
      {!isOpen && searchIcon && renderSearchIcon()}
      {isOpen && searchIcon && (
        <div>
          {renderSearchIcon()}
          {renderSearchInput()}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
