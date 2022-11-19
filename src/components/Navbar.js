// import React, { useState } from 'react';
// import {
//   MDBNavbar,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBContainer,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showBasic ] = useState(false);

//   return (
//     <header>
//       <MDBNavbar expand='lg' light bgColor='danger' fixed>
//         <MDBContainer fluid>
         
//           <MDBCollapse navbar show={showBasic}>
//             <MDBNavbarNav right className='mb-2 mb-lg-0 mg-50vh' >
//               <MDBNavbarItem active>
//                 <MDBNavbarLink aria-current='page' href='#'>
//                   Home
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='Home'>Features</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='AboutUs'>Pricing</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>About</MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>

//       <div
//         className='p-5 mt-10 text-center bg-image'
//         style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
//       >
//         <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
//           <div className='d-flex justify-content-center align-items-center h-100'>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }




import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links} from './data';
// import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} className='logo' alt='logo' /> */}
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
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
        
      </div>
    </nav>
  );
};

export default Navbar;