import React, { useState, useEffect, useRef } from 'react';


const Profile = ({ isProfActive, updateProfileState }) => {

    /* Declarations */
    const profileRef = useRef();
    let location = '';
    if (process.browser) {
        location = window.location.href;
    }
    /* States */
    const [userInfo, setuserInfo] = useState({});
    const [isRTL, setRTLFix] = useState(false);
    const [ssoURL, setssoURL] = useState();
    /* Hooks */
    useEffect(() => {
        const sso = `https://www.oracle.com/webapps/redirect/signon?nexturl=${window.location.href}`;
        setssoURL(sso);
        handleResize();
        // setuserInfo(getUserInfo());
        // add when mounted
        document.addEventListener('mousedown', handleProfileClickOutside);
        window.addEventListener('resize', handleResize);
        // return function to be called when unmounted
        return () => {
              document.removeEventListener('mousedown', handleProfileClickOutside);
              window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleResize = () => {

        const u28profilebtn = profileRef.current.querySelector('.u28prof');

        const u28profiledropdown = profileRef.current.querySelector('.u28-profilew1');
        let u28profiledropdownWidth = u28profiledropdown.clientWidth;
        if (u28profiledropdown.offsetParent === null) {
            u28profiledropdownWidth = parseFloat(window.getComputedStyle(u28profiledropdown).getPropertyValue('width'));
        }
        const btnwidth = u28profilebtn.clientWidth;
        const u28profilebtnOffset = u28profilebtn.getBoundingClientRect();
        const profileright = window.innerWidth - (u28profilebtnOffset.left + btnwidth);
        // Fix for RTL
        if (profileright + btnwidth <= u28profiledropdownWidth - 20) {
            setRTLFix(true);
        }
        if (profileright + btnwidth > u28profiledropdownWidth - 20) {
            setRTLFix(false);
        }
    };
     // Hide/Show Profile links
     const toggleProfilePopup = (event) => {
        event.preventDefault();
        const newState = !isProfActive;
        updateProfileState(newState);
    };
    // Close profile popup when click outside
    const handleProfileClickOutside = (event) => {
        if (profileRef.current.contains(event.target)) {
            // inside click
            return;
        }
        // outside click
        closePopup();
    };
    
    
    // Hide Profile Popup
    const closePopup = () => {
        updateProfileState(false);
    };

    // Back Click Handler In Mobile View
  const onBackClick = (event) => {
    event.preventDefault();
    closePopup();
  }; 
   // Signout Handler
   const handleSignOut = (event) => {
    event.preventDefault();
    ssoSignOut();
  };


    return (

        <div
            className={['u28-profile',userInfo && userInfo.guid ? 'loggedin' : ''].join(' ')}
            tabIndex="-1"
            ref={profileRef}
        >
            <a
                href="#"
                className="u28prof"
                tabIndex="0"
                aria-controls="u28-profilew1"
                aria-label="Sign In"
                onClick={toggleProfilePopup}
                aria-haspopup="false"
            >
                <div className="acttxt" tabIndex="-1">
                    View Accounts
                </div>
                <span tabIndex="-1">Sign In</span>
            </a>
            <div
                className={['u28-profilew1', 'u28fadeIn', 'right'].join(' ')}
                tabIndex={isProfActive ? '0' : '-1'}
            >
                <span className="u28actbck u28back" onClick={onBackClick}>
                    Back
        </span>
                <span className="u28acttitle">Oracle Account</span>
                <ul className="u28l-out">
                    {userInfo && userInfo.guid ? null : (
                        <li>
                            <a
                                href={ssoURL}
                                data-lbl="profile:sign-in-account"
                                className="u28btn1"
                                tabIndex={isProfActive ? '0' : '-1'}
                            >
                                Sign-In
              </a>
                        </li>
                    )}
                    <li>
                        <a
                            href="https://profile.oracle.com/myprofile/account/create-account.jspx"
                            data-lbl="profile:create-account"
                            className="u28btn2"
                            tabIndex={isProfActive ? '0' : '-1'}
                        >
                            Create an Account
            </a>
                    </li>
                </ul>
                <ul className="u28l-in">
                    {userInfo.firstname && userInfo.firstname !== 'NOT_FOUND' && (
                        <li>
                            <a
                                href={`https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl=${location}`}
                                data-lbl="profile:user-account"
                                tabIndex={isProfActive ? '0' : '-1'}
                            >
                                {userInfo.firstname}
                                {userInfo.lastname && userInfo.lastname !== 'NOT_FOUND' ? ` ${userInfo.lastname}` : null}
                            </a>
                        </li>
                    )}
                    <li>
                        <a href="/corporate/contact/help.html" data-lbl="help" tabIndex={isProfActive ? '0' : '-1'}>
                            Help
            </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={handleSignOut}
                            id="u28pfile-sout"
                            data-lbl="signout"
                            tabIndex={isProfActive ? '0' : '-1'}
                        >
                            Sign Out
            </a>
                    </li>
                </ul>
                <div className="u28-profilew2">
                    <span className="u28acttitle">Cloud Account</span>
                    <a
                        href="/cloud/sign-in.html"
                        data-lbl="go-to-cloud-website"
                        className="u28cloudbg"
                        tabIndex={isProfActive ? '0' : '-1'}
                    >
                        Sign in to <span> Cloud</span>
                    </a>
                    <a
                        href="/cloud/free/?source=:ow:o:h:nav:OHP0625ViewAccountsButton&intcmp=:ow:o:h:nav:OHP0625ViewAccountsButton"
                        className="u28btn2"
                        data-lbl="cta-0625-nav-header-accounts-free-tier-oci"
                    >
                        Sign Up for Cloud Free Tier
          </a>
                </div>
            </div>
        </div>
    )

}


export default Profile;