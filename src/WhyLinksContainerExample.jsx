import { useState, useRef } from 'react';

import { links, socialLinks } from './data';

import logo from './logo.svg';
import { FaBars } from 'react-icons/fa';

const WhyLinksContainer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linksStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : `0px`,
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <ul className="links" ref={linksRef} style={linksStyles}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default WhyLinksContainer;
