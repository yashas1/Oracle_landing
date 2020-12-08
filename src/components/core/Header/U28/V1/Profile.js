import React , { useState, useEffect, useRef } from 'react';


const Profile=({ isProfActive, updateProfileState })=>{

     
    let location = '';
    if (process.browser) {
      location = window.location.href;
    }
return (
   
  
   <div
      className={['u28-profile', 'loggedin' ].join(' ')}
      tabIndex="-1"
    >
 <a
        href="#"
        className="u28prof"
        tabIndex="0"
        
        aria-controls="u28-profilew1"
        aria-label="Sign In"
       
        aria-haspopup="true"
      >
      <div className="acttxt" tabIndex="-1">
          View Accounts
        </div>
        <span tabIndex="-1">Sign In</span>    
      </a>
</div>
)

}


export default Profile;