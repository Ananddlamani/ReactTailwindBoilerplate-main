import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AvatarContext from './AvatarContext';
import unsplash1 from './unsplash1_Alex.jpg';
import michael from './michael-unsplash.jpg';
import hailey from './hailey-unsplash.jpg';
import previous from './previous_logo.png';

const DefaultAvatars = () => {
  const { setAvatar } = useContext(AvatarContext);
  const navigate = useNavigate();
  
  const defaultAvatars = [
    { id: 1, src: unsplash1 },
    { id: 2, src: michael },
    { id: 3, src: hailey },
    // Add more default avatar options here
  ];

  const handleAvatarSelect = (avatarSrc) => {
    setAvatar(avatarSrc);
    navigate('/profile');
  };

  return (
    <div>
    <div className="flex items-center mb-2 ml-0 lg:ml-1 mt-2">
          <img src={previous} alt="previous" className="ml-1 lg:ml-4 h-10 w-10 cursor-pointer" onClick={() => navigate('/profile')} />
        </div>
    <div className="flex flex-col items-center bg-pink-100 justify-center min-h-screen">
      
      <h1 className="text-3xl text-center font-bold mb-6">Choose a Default Avatar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {defaultAvatars.map((avatar) => (
          <div
            key={avatar.id}
            className="bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 w-32 h-32 flex items-center justify-center mx-auto"
            onClick={() => handleAvatarSelect(avatar.src)}
          >
            <img
              src={avatar.src}
              alt={`Default Avatar ${avatar.id}`}
              className="w-32 h-32"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DefaultAvatars;