import React, { useState } from 'react';
import logo1 from './choose1.png';
import logo2 from './choose2.png';
import logo3 from './choose3.png';
import { useNavigate } from 'react-router-dom';
import dribbble from './dribbble_logo.png';
import previous from './previous_logo.png';


const Choices = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const navigate = useNavigate();

  const options = [
    {
      label: 'I\'m a designer looking to share my work',
      value: 'designer',
      image: logo1,
      description: 'In this platform Iam going to share my all design works here.I\'m interested in designing all works shared.',
    },
    {
      label: 'I\'m looking to hire a designer',
      value: 'hire',
      image: logo2,
      description: 'Iam looking for a designer who is proficient in designing.I consider this as a hiring platform for designers',
    },
    {
      label: 'I\'m looking for design inspiration',
      value: 'inspiration',
      image: logo3,
      description: 'Iam here to get motivated for design.I\'m looking for. Over 7 million people using this platform for designing',
    },
  ];

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option.value)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== option.value));
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedOptions);
    navigate('/finish');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div>
      <div className="w-auto h-auto bg-cover bg-center mb-3">
        <div className="flex items-center ml-0 lg:ml-8 mt-4">
          <img src={dribbble} alt="dribbble" className="h-10 w-22" />
          <img src={previous} alt="previous" className="ml-1 lg:ml-4 h-10 w-10 cursor-pointer" onClick={() => navigate('/profile')} />
        </div>
      </div>
      <div className="flex flex-col mb-10 ml-8 items-center justify-center w-auto h-auto">
        <div>
          <h1 className="flex flex-col items-center justify-center text-3xl font-bold mb-3">What brings you to Dribbble?</h1>
          <p className="flex flex-col items-center justify-center text-gray-500">
            Select the options that best describe you. Don't worry, you can explore
            other options later.
          </p>
          <br />
          <br />
          <br />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {options.map((option) => (
              <div
                key={option.value}
                className={`flex flex-col items-center w-full h-60 p-4 border rounded-md cursor-pointer relative ${
                  selectedOptions.includes(option.value)
                    ? 'border-pink-800'
                    : 'border-gray-300'
                }`}
                onClick={() => handleOptionSelect(option)}
              >
            <div className={`absolute mt-10 left-10 bottom-14 w-full h-full rounded-md overflow-hidden ${
                selectedOptions.includes(option.value)&&(option.image)
                  ? 'mt-0'
                  : ''
              }`}>

              </div>
              <div className="flex flex-col mt-4 items-center absolute bottom-5 left-0 w-full">
                <div>
                  <img src={option.image} alt={option.label} className="items-center justify-center bottom-20 w-30 h-30 mb-5" />
                </div>
                <p className="text-center font-bold">{option.label}</p>
                {selectedOptions.includes(option.value) && (
                  <p className="mt-2 text-center text-gray-600 text-sm">
                    {option.description.split(' ').length > 20
                      ? option.description.split(' ').slice(0, 20).join(' ') + '...'
                      : option.description}
                    </p>
                )}
                <div
                  className={`w-4 h-4 rounded-full mt-2 ${
                    selectedOptions.includes(option.value)
                      ? 'bg-pink-500'
                      : 'border border-gray-800'
                  }`}
                ></div>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mt-16 flex flex-col items-center">
            <p className="text-black">Anything else? You can select multiple.</p>
            <button
              type="submit"
              className={`w-60 mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 mb-0 ${
                selectedOptions.length > 0
                  ? 'opacity-100'
                  : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={handleSubmit}
            >
              Finish
            </button>
            <div className="mt-0">
              {selectedOptions.length > 0 && (
                <button
                  type="button"
                  className="w-60 px-4 py-2 text-gray-600 mt-0"
                  onClick={() => {
                    navigate('/profile');
                  }}
                >
                  or Press RETURN
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choices;