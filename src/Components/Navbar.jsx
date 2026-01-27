import React, { useState} from 'react';
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const navigate = useNavigate();

  // Function to close the main mobile menu and reset the dropdown when navigating
  const handleNavLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    navigate(path);
  };

  const mobileServices = [
  { to: '/services/amb', label: 'Medical Billing' },
  { to: '/services/mc', label: 'Medical Coding' },
  { to: '/services/ce', label: 'Credential & Enrollment' },
  { to: '/services/arf', label: 'Accounts Receivable' },
  { to: '/services/dms', label: 'Denial Management' },
  { to: '/services/ofnmb', label: 'Out Of Network Medical Billing' },
  { to: '/services/pb', label: 'Patient Billing' },
  { to: '/services/qpp', label: 'Quality Payment Program' },
  { to: '/services/pcmh', label: 'Patient-Centered Medical Home' },
  { to: '/services/pm', label: 'Practice Management' },
  { to: '/services/rcms', label: 'RCM Software' },
  { to: '/services/va', label: 'Virtual Assistants' },
  { to: '/services/ip', label: 'Incentive Programs' },
  { to: '/services/ma', label: 'Medical Audit' },
  { to: '/services/dm', label: 'Digital Marketing' },
  { to: '/services/pr', label: 'Practice Reporting' },
];

  // Helper component for the long list of desktop dropdown services
  const DesktopServicesDropdown = () => (
    <div 
      className="absolute top-10 bg-darkblue/90 w-72 max-h-96 overflow-y-auto scroll-smooth z-50 rounded-2xl p-2 custom-scrollbar"
      onMouseEnter={() => setIsDesktopServicesOpen(true)}
      onMouseLeave={() => setIsDesktopServicesOpen(false)}
    >
      {/* I've kept your original desktop links */}
      <Link to={'/services/amb'} className="droplink">Medical Billing</Link>
      <Link to={'/services/mc'} className="droplink">Medical Coding</Link>
      <Link to={'/services/ce'} className="droplink">Credential & Enrollment</Link>
      <Link to={'/services/arf'} className="droplink">Accounts Receivable</Link>
      <Link to={'/services/dms'} className="droplink">Denial Management</Link>
      <Link to={'/services/ofnmb'} className="droplink">Out Of Network Medical Billing</Link>
      <Link to={'/services/pb'} className="droplink">Patient Billing</Link>
      <Link to={'/services/qpp'} className="droplink">Quality Payment Program</Link>
      <Link to={'/services/pcmh'} className="droplink">Patient-Centered Medical Home</Link>
      <Link to={'/services/pm'} className="droplink">Practice Management</Link>
      <Link to={'/services/rcms'} className="droplink">RCM Software</Link>
      <Link to={'/services/va'} className="droplink">Virtual Assistants</Link>
      <Link to={'/services/ip'} className="droplink">Incentive Programs</Link>
      <Link to={'/services/ma'} className="droplink">Medical Audit</Link>
      <Link to={'/services/dm'} className="droplink">Digital Marketing</Link>
      <Link to={'/services/pr'} className="droplink">Practice Reporting</Link>
    </div>
  );

  return (
    <nav className='fixed top-0 left-0 w-full flex flex-col z-50'>
        {/* topbar (No changes) */}
        <div className='bg-darkblue flex justify-between gap-4 items-center md:px-52 px-2 text-white md:py-1 py-2'>

          <div className='flex items-center gap-1'>
            <FaPhoneAlt size={13} color="white" />
            <span className='hidden md:flex'>Toll Free:</span> 
            <a 
              href="tel:+923453190015" 
              className="text-sm hover:text-indigo-500 hover:border-b-2 cursor-pointer"
            >
               (+92) xxx xxxx
            </a> 
          </div>

          <div className='flex py-2 gap-6'>

            <div className='flex items-center gap-1'>
              <FaEnvelope size={13} color='white' className='mt-1'/>
              <a href="mailto:info@physicianmeds.com" 
                className="text-small hover:text-indigo-500 hover:border-b-2 cursor-pointer"
              >
                info@physicianmeds.com
              </a>
            </div>

            <div className='flex flex-col md:flex-row items-center md:gap-1 '>
              <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><FaXTwitter size={14} color='black' /></div>
              <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><FaLinkedinIn size={14} color='black' /></div>
              {/* <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><FaFacebookF size={14} color='black' /></div>
              <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><PiInstagramLogo size={14} color='red' /></div> */}
            </div>

          </div>
        </div>

        {/* desktop navbar (Menu logic updated to use new state) */}
        <div className='w-full bg-Bwhite flex justify-between items-center md:px-52 px-4'>
          <Link to={'/'} className='m-0 p-0'>
            <img src='/logo.png' className='h-20 py-2 px-3 w-auto'/>
          </Link>

          <div className="relative">
            <div className="hidden lg:flex justify-between items-center gap-28">
              <div className="flex gap-4 text-black font-montserrat">
                <ul className="min-w-max flex items-center gap-14">
                  <Link to={'/'} className="link">Home</Link>

                  {/* Services Dropdown - Desktop */}
                  <Link to={'/services'}
                    className="link relative cursor-pointer"
                    onMouseEnter={() => setIsDesktopServicesOpen(true)}
                    onMouseLeave={() => setIsDesktopServicesOpen(false)}
                  >
                    Services
                    {isDesktopServicesOpen && <DesktopServicesDropdown />}
                  </Link>

                  <Link to={'/contacts'} className="link">Contact Us</Link>
                  <Link to={'/abouts'} className="link">About us</Link>
                  <Link to={'blogs'} className="link">Blog</Link>
                </ul>
              </div>

              <div>
                <button onClick={() => navigate('/contacts')} 
                className="btn-blue px-5 py-2.5">Contact Us</button>
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <div className="flex lg:hidden">
              <button className="text-2xl font-bold"
              onClick={()=> setIsMobileMenuOpen(true)} > ☰ </button> 
            </div>
          </div>
        </div>

        {/* Overlay to click out and close the menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Menu Drawer Container */}
        <div className={`
          fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white text-black z-50 shadow-2xl 
          transform transition-transform duration-300 ease-in-out md:hidden overflow-auto
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>

          {/* Close Button (Top right of the drawer) */}
          <div className='p-4 flex justify-between items-center bg-darkblue text-white'>
            <span className='text-lg font-bold'>Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className='text-2xl'>
              <FaTimes />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col p-4 space-y-2">
            <Link to={'/'} className="mobile-nav-link" onClick={() => handleNavLinkClick('/')}>Home</Link>

            {/* Mobile Services Dropdown */}
            <li
              className="mobile-nav-link flex justify-between items-center"
              onClick={()=> setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <Link to={'/services'}>Services</Link>
              <span>{isMobileServicesOpen ? '▲' : '▼'}</span>
            </li>

            {/* Mobile Dropdown Links */}
            {isMobileServicesOpen && (
              <div className="flex flex-col pl-4 border-l border-gray-300 space-y-1">
                {mobileServices.map((service) => (
                  <Link 
                    key={service.to} 
                    to={service.to} 
                    className="mobile-droplink" 
                    onClick={() => handleNavLinkClick(service.to)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to={'/contacts'} className="mobile-nav-link" onClick={() => handleNavLinkClick('/contacts')}>Contact Us</Link>
            <Link to={'/abouts'} className="mobile-nav-link" onClick={() => handleNavLinkClick('/abouts')}>About us</Link>
            <Link to={'/blogs'} className="mobile-nav-link !border-none" onClick={() => handleNavLinkClick('/blogs')}>Blog</Link>
          </ul>
        </div>
    </nav>
  );
};
export default Navbar;