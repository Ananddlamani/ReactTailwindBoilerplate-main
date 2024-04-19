import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/signup';
import ProfileCreation from './components/ProfileCreation';
import Choices from './components/Choices';
import FinishPage from './components/FinishPage';
import AvatarContext from './components/AvatarContext';
import DefaultAvatars from './components/DefaultAvatars';
import { EmailProvider } from './components/EmailContext';

function App() {
  const [avatar, setAvatar] = useState(null);
  const handleDefaultAvatar = () => {
    // Add your implementation here
    console.log('Default avatar selected');
  };

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      <EmailProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/profile/choices" element={<Choices onSubmit={handleDefaultAvatar} />} />
              <Route path="/profile" element={<ProfileCreation />} />
              <Route path="/default-avatars" element={<DefaultAvatars />} />
              <Route path="/" element={<SignUp />} />
              <Route path="/finish" element={<FinishPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </EmailProvider>
    </AvatarContext.Provider>
  );
}

export default App;