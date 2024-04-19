import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera,faPlus } from '@fortawesome/free-solid-svg-icons';
import Choices from './Choices';
import {  Routes } from 'react-router-dom';
import AvatarContext from './AvatarContext';
import dribbble from './dribbble_logo.png';




const ProfileCreation = () => {
  const { setAvatar, avatar } = useContext(AvatarContext);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [location, setLocation] = useState('');

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    } else if (typeof avatar === 'string') {
      setAvatarPreview(avatar);
    } else {
      setAvatar(null);
      setAvatarPreview(null);
    }
  };
  

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/profile/choices');
   
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const navigate = useNavigate();
  

  const handleDefaultAvatar = () => {
    navigate('/default-avatars');
    setAvatar(avatar);
    
  };
  return (
    <div>
      <div className="w-full h-full bg-cover mb-8 bg-center" >
        <img src ={dribbble} alt = "dribbble" className="h-12 w-30 ml-0 lg:ml-12 mt-6"></img>
      </div>
    <div className="flex flex-col bg-white-100 items-center ml-2 justify-center h-auto">
      
      <div>
        <h1 className="text-4xl font-bold mb-3">Welcome! Let's create your profile</h1>
        <p className="text-gray-500">Let others get to know you better! You can do these later</p>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit} onKeyPress={handleKeyPress} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="avatar" className="block text-gray-700 font-bold mb-4">
              Add an avatar
            </label>
            <div className="flex items-center">
            {typeof avatar === 'string' ? (
                <img src={avatar} alt="Profile" className="w-32 h-32 rounded-full mr-6 " />
              ) : avatar instanceof File ? (
                <img src={URL.createObjectURL(avatar)} alt="Profile" className="w-32 h-32 rounded-full mr-6" />
              ) 
              : (
                <div className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-dashed border-black-300 mr-6">
                  <div className="relative">
                    <FontAwesomeIcon icon={faCamera} className="text-gray-500 size-6" />
                      <div className="absolute bottom-0 left-0 top-0 right-0  rounded-full w-6 h-7 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPlus} className="text-gray-500 size-2" />
                      </div>
                  </div>
                </div>
              )}
              <div>
                <label htmlFor="avatar-upload" className="flex items-center cursor-pointer">
                  <div className="bg-gray-200 px-4 py-2 rounded-md">
                    <p className="text-gray-700 font-bold">Choose Image</p>
                  </div>
                  <input
                    type="file"
                    id="avatar-upload"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
                <div className="mt-2"><a href="#" className="text-gray-500 ml-1" onClick={handleDefaultAvatar}>
                    {'>'}Or choose one of our defaults
                </a>
                </div>
              </div>
            </div>
          </div>
          <br>
          </br>
          <br>
          </br>

          <div className="w-full mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
              Add your location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              className="block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-12"
              placeholder="Enter a location"
            />
          </div>
          <div className="flex justify-center lg:justify-start">
          <button
            type="submit"
            className="w-40 px-4 py-2 text-white sm:items-center sm:justify-center bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm mb-0"
          >
            Next
          </button>
          </div>
          <div className=" flex justify-center lg:justify-start mt-0">
          {avatar && location && (
            <button
              type="button"
              className="w-40 px-4 py-2 text-gray-700 sm:text-sm mt-0"
              onClick={() => {
                navigate('/');
              }}
            >
              or Press RETURN
            </button>
          )}
          </div>
        </form>
        <Routes>
        <Route path="/profile/choices" element={<Choices onSubmit={handleDefaultAvatar} />} />
        </Routes>
      </div>
    </div>
    </div>
  );
};

export default ProfileCreation;