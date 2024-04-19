import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope, faSuitcase, faCheckCircle, faXmark, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import AvatarContext from './AvatarContext';
import logo1 from './header_logo.png';
import { EmailContext } from './EmailContext';

const FinishPage = () => {
  const { avatar, setAvatar } = useContext(AvatarContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { email } = useContext(EmailContext);
  const fileInputRef = useRef(null);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };
  return (
    <div>
      <header className="flex items-center justify-between border-b border-gray-200 py-4 px-0 text-sm">
        <div className="flex items-center ml-5">
          <img src={logo1} alt="logo" className="h-5 w-22 ml-0 mb-2 mr-4" />
          <button
            className="text-gray-500 hover:text-gray-700 lg:hidden"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
          <div className="hidden lg:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/inspiration"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Inspiration
                </Link>
              </li>
              <li>
                <Link
                  to="/find-work"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Find Work
                </Link>
              </li>
              <li>
                <Link
                  to="/learn-design"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Learn Design
                </Link>
              </li>
              <li>
                <Link
                  to="/go-pro"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Go Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/hire-designers"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Hire Designers
                </Link>
              </li>
              </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4 mr-5">
          <div className="relative hidden lg:block">
            <input
              type="text"
              className="w-40 px-2 bg-gray-100 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="relative">
            <button className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faSuitcase} className="text-xl" />
              <FontAwesomeIcon
                icon={faXmark}
                className="absolute bottom-1 right-0 rounded-full bg-white p-0 text-white-100 top-4 left-4 transform -translate-x-1/2 -translate-y-1/2 text-xs"
              />
            </button>
          </div>
          <div className="rounded-full bg-gray-300 w-6 h-6 overflow-hidden">
            {typeof avatar === 'string' ? (
              <img src={avatar} alt="Profile" className="w-6 h-6" />
            ) : avatar instanceof File ? (
              <img src={URL.createObjectURL(avatar)} alt="Profile" />
            ) : (
              <img src="https://via.placeholder.com/150" alt="Profile" />
            )}
          </div>
          <button
            className="rounded-md bg-pink-500 text-white px-3 py-2 hover:bg-pink-600 hidden lg:inline-block"
            onClick={handleFileUpload}
          >
            Upload
          </button>
          <button
            className="rounded-md bg-pink-500 text-white px-3 py-2 hover:bg-pink-600 lg:hidden"
            onClick={handleFileUpload}
          >
            Upload
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-10 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-20 transition-all duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <img src={logo1} alt="logo" className="h-5 w-22" />
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faClose} className="text-xl" />
          </button>
        </div>
        <nav>
          <ul className="mt-4">
            <li>
              <Link
                to="/inspiration"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Inspiration
              </Link>
            </li>
            <li>
              <Link
                to="/find-work"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Find Work
              </Link>
            </li>
            <li>
              <Link
                to="/learn-design"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Learn Design
              </Link>
            </li>
            <li>
              <Link
                to="/go-pro"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Go Pro
              </Link>
            </li>
            <li>
              <Link
                to="/hire-designers"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Hire Designers
              </Link>
            </li>
            <li>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <main className="container mx-auto mt-10 py-8">
        <h1 className="text-2xl text-center justify-center font-bold mb-2">
          Please verify your email...
        </h1>
        <div className="p-2 mb-4">
          <div className="flex flex-col items-center mb-4">
            <div className="mr-4 relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 items-center justify-center mb-2 text-8xl"
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-pink-600 rounded-full bg-white p-2 absolute top-4 left-24 right-0 transform -translate-x-1/2 -translate-y-1/2 text-3xl"
              />
            </div>
            <p className="mb-2">
              Please verify your email address. We've sent a confirmation email
              to:
            </p>
            <p>
               <strong>{email || 'account@refero.design'}</strong>
            </p>
          </div>
          <p className="mb-2 text-center">
            Click the confirmation link in that email to begin using Dribbble.
          </p>
          <br />
          <p className="mb-2 text-center">
            Didn't receive the email? Check your Spam folder, it may have been
            caught by a filter.
          </p>
          <p className="mb-2 text-center">
            If you still don't see it, you can{' '}
            <a href="#" className="text-pink-500 hover:text-pink-700">
              resend the confirmation email
            </a>
            .
          </p>
          <br />
          <p className="text-center">
            Wrong email address?{' '}
            <a href="/" className="text-pink-500 hover:text-pink-700">
              Change it
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FinishPage;