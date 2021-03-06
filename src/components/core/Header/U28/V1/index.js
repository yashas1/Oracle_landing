import React, { useEffect, useState, useRef, useContext } from 'react'
import Profile from './Profile'
export default function index() {

  
  
  const [isProfActive, setProfileState] = useState(false);
  const updateProfileState = (state) => {
      // Hide mega menu if profile is active
      if (isProfActive || state) {
        closeHeader();
        // closeSearch();
      }
      setProfileState(state);
  };
console.log("yeasas")
   // Hide Header
   const closeHeader = () => {
    removeHeaderActiveLinks();
    setU28navactive(false);
    toggleMenu(false);
    setheaderPosition('u28-down');
  };

  const removeHeaderActiveLinks = () => {
    const u28Ele = u28Ref.current;
    if (u28Ele.querySelector('.u28s4 a[data-target].active')) {
      u28Ele.querySelector('.u28s4 a[data-target].active').classList.remove('active');
    }
    if (u28Ele.querySelector('.u28navw1 a[data-target].active')) {
      u28Ele.querySelector('.u28navw1 a[data-target].active').classList.remove('active');
    }
  };

    return (
        <div>
           <section
      id="u28"
      className={[
        'u28 u28v1 u28adj', 'u28-down' ,'dropdownloaded',
        isProfActive ? 'profactive' : '',  
      ].join(' ')}
    ><span className="u28bttop">&nbsp;</span>
    <span
      className="u28cover"
    >
      &nbsp;
    </span>
    <div className="u28w1">
    <div className="cwidth">
    <div className="u28s1" id="u28s1">
    <a href="/" className="u28home rw-logo" tabIndex="0">
              Home
     </a>
            <a
              className="u28ham u28clickable"
              data-lbl="menu"
              aria-controls="u28navw1"

              aria-haspopup="true"
              role="button"
              tabIndex="0"
            >
              Menu
            </a>
            </div>
      <nav className={['u28s4 u28clickable'].join(' ')}>
            <a className="u28search u28navitm" id="u28search" href="#" data-lbl="o-search-menu" >
              <span>Search</span>
            </a>
            <a href="#" data-lbl="o-products-menu" data-target="products" className="u28navitm" >
              Products
            </a>
            <a href="#" data-lbl="o-resources-menu" data-target="resources" className="u28navitm" >
              Resources
            </a>
            <a href="#" data-lbl="o-support-menu" data-target="support" className="u28navitm" >
              Support
            </a>
            <a href="#" data-lbl="o-events-menu" data-target="events" className="u28navitm" >
              Events
            </a>
          </nav>
          <div className="u28s3">
            <Profile updateProfileState={updateProfileState} isProfActive={isProfActive}/>
          </div>
          </div>
          </div>
    </section>
             
        </div>
    )
}
