import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './signup.css';
import alexandra from './Annie_spraut.jpg';
import dribbble from './logo1.png';
import { EmailContext } from './EmailContext';

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const { email, setEmail } = useContext(EmailContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !username || !email || !password) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Check if username is already taken
    if (username === 'John') {
      setIsUsernameAvailable(false);
      return;
    }

    // Check if terms and privacy are agreed
    if (!isTermsAgreed) {
      alert('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }

    // Handle form submission
    navigate('/profile');
  };
  
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-2/5 bg-cover bg-center" style={{ backgroundImage: `url(${alexandra})` }}>
        <img src={dribbble} alt="dribbble" className="h-12 w-30 ml-4 mt-6" />
        <p className="text-center ml-4 mt-10 text-blue-800 justify-center mr-40 text-3xl font-bold">Discover the world's top Designers & Creatives</p>
      </div>
      <div className="lg:w-3/5 flex items-center bg-pink-100  justify-center p-4">
        <div className=" bg-pink-100 p-2 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Sign up to Dribbble</h1>
          <form onSubmit={handleSubmit}>
            {!isUsernameAvailable && (
              <div className="text-red-500 flex items-center mb-2">
                <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
                <span>Username has already been taken.</span>
              </div>
            )}
            <br />
            <div className="mb-4 flex flex-col lg:flex-row">
              <div className="lg:mr-4 lg:w-1/2 mb-4 lg:mb-0">
                <label htmlFor="name" className="block mb-2 text-sm font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-3 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  placeholder="John"
                />
              </div>
              <div className="lg:w-1/2">
                <label htmlFor="username" className="block mb-2 text-sm font-bold">
                  {isUsernameAvailable ? (
                    <span>Username</span>
                  ) : (
                    <span>
                      <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500 mr-2" />
                      Username
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setIsUsernameAvailable(true);
                  }}
                  className={`w-full px-3 py-3 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm ${
                    !isUsernameAvailable ? 'border-red-500' : ''
                  }`}
                  placeholder="John"
                />
              </div>
            </div>
            <br />
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-3 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                placeholder="account@refero.design"
              />
            </div>
            <br />
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-3 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                placeholder="6+ characters"
              />
            </div>
            <div className="mb-4">
              <div className="mb-4">
                <label className="flex flex-row">
                  <input
                    type="checkbox"
                    checked={isTermsAgreed}
                    onChange={(e) => setIsTermsAgreed(e.target.checked)}
                    className="form-checkbox h-10 w-10 text-pink-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Creating an account means you're okay with our{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-700">
                      Terms of Service
                    </a>
                    ,{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-700">
                      Privacy Policy
                    </a>
                    , and our default{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-700">
                      Notification Settings.
                    </a>
                  </span>
                </label>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="w-full lg:w-1/2 px-6 py-3 text-sm text-white bg-pink-600 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="mt-2 text-center lg:text-left text-gray-500">
            Already a member? <a href="#" className="text-indigo-600 hover:text-indigo-700">Sign In</a>
          </p>
          <div className="mt-4 text-xs text-gray-700 text-center lg:text-left">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-700">
              Terms of Service
            </a>
            ,{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-700">
              Privacy Policy
            </a>{' '}
            apply.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;