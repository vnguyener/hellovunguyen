import React from 'react';
import {
  useLocation,
  useHistory
} from "react-router-dom";

import './style.scss';

const SharedHeader = () => {
  const location  = useLocation();
  const history = useHistory();

  const pathname = location.pathname;

  return (
    <section className="shared-header-container">
      <p onClick={() => history.push("/")} className={`${pathname === '/' ? 'active' : ''}`}>Work</p>
      <p onClick={() => history.push("/resume")} className={`${pathname === '/resume' ? 'active' : ''}`}>Resume</p>
      <p onClick={() => history.push("/blog")} className={`${pathname.includes('blog') ? 'active' : ''}`}>Blog</p>
      <p onClick={() => history.push("/doodles")} className={`${pathname === '/doodles' ? 'active' : ''}`}>Doodles</p>
    </section>
  );
};

export default SharedHeader;