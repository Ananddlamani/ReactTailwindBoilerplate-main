import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import logo1 from './footer_logo1.png';
import logo from './logo_dribbble2.png'


const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className=" mx-10 px-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-14">
        <div className="text-black text-sm">
          <img src={logo1} alt="logo" className= "h-6 w-22  ml-0 mb-2 mt-1"></img>
            <ul className="list-none m-0 p-0">
              <li className="py-1">
		        <p>Dribbble is the world's leading community for creatives to share,grow, and get hired</p>
              </li>
		     <div class="flex  space-x-4 mt-4">
  		     <a href="https://twitter.com" className="text-gray-600 hover:text-blue-500">
            	<FontAwesomeIcon icon={faTwitter} size="1x" />
          	</a>
          	<a href="https://facebook.com" className="text-gray-600 hover:text-blue-500">
            	<FontAwesomeIcon icon={faFacebook} size="x" />
          	</a>
          	<a href="https://instagram.com" className="text-gray-600 hover:text-purple-500">
            	<FontAwesomeIcon icon={faInstagram} size="x" />
          	</a>
          	<a href="https://pinterest.com" className="text-gray-600 hover:text-red-500">
            	<FontAwesomeIcon icon={faPinterest} size="x" />
          	</a>
          	<a href="https://www.example.com" className="text-gray-600 hover:text-green-500">
            	<FontAwesomeIcon icon={faGlobe} size="x" />
          	</a>
		</div>
            </ul>
        </div>
          <div className="text-black text-sm">
            <ul className="list-none m-0 p-0">
              <li className="font-bold mb-2">For designers</li>
              <li className="py-1">
                <Link to="/GoPro!" className="hover:text-gray-300">
                  Go Pro!
                </Link>
              </li>
              <li className="py-1">
              <a href="#" className="hover:text-gray-300">
              Explore design work
                </a>
              </li>
              <li className="py-1">
                <a href="https://dribbble.com/stories" className="hover:text-gray-300">
                  Design blog
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                  Overtime podcast
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                  Playoffs
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                  Weekly Warm-Up
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                  Refer a Friend
                </a>
              </li>
              <li className="py-1">
                <a href="https://dribbble.com/guidelines" className="hover:text-gray-300">
                  Code of conduct
                </a>
              </li>
            </ul>
          </div>
          <div className="text-black text-sm">
            <ul className="list-none m-0 p-0">
              <li className="font-bold mb-2">Hire designers</li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                  Post a job opening
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Post a freelance project
                </a>
              </li>
              <li className="py-1">
                <a href="/Search" className="hover:text-gray-300">
                Search for designers
                </a>
              </li>
              <br></br>
              <li className="font-bold mb-2">Brands</li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Advertise with us
                </a>
                </li>

            </ul>
          </div>
          <div className="text-black text-sm">
            <ul className="list-none m-0 p-0">
              <li className="font-bold mb-2">Company</li>
              <li className="py-1">
                <a href="https://dribbble.com/about" className="hover:text-gray-300">
                 About
                </a>
              </li>
              <li className="py-1">
                <a href="https://dribbble.com/careers" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li className="py-1">
                <a href="https://support.dribbble.com/hc/en-us" className="hover:text-gray-300">
                  Support
                </a>
              </li>
              <li className="py-1">
                <a href="https://dribbble.com/media-kit" className="hover:text-gray-300">
                  Media kit
                </a>
              </li>
              <li className="py-1">
                <a href="/Testimonials" className="hover:text-gray-300">
                Testimonials
                </a>
              </li>
              <li className="py-1">
                <a href="/API" className="hover:text-gray-300">
                API
                </a>
              </li>
              <li className="py-1">
                <a href="https://dribbble.com/terms" className="hover:text-gray-300">
                Terms of service
                </a>
              </li>
              <li className="py-1">
                <a href="https://dribbble.com/privacy" className="hover:text-gray-300">
                Privacy Policy
                </a>
              </li>
              <li className="py-1">
                <a href="https://dribbble.com/cookie-policy" className="hover:text-gray-300">
                Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="text-black text-sm">
            <ul className="list-none m-0 p-0">
              <li className="font-bold mb-2">Directories</li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Design jobs
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Designers for hire
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Freelance designers for hire
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Tags
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Places
                </a>
              </li>
              <br></br>
              <li className="font-bold mb-2">Design assets</li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Dribbble Marketplace
                </a>
                </li>
                <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Creative Market
                </a>
                </li>
                <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Fontspring
                </a>
                </li>
                <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Font Squirrel
                </a>
                </li>
            </ul>
          </div>
          <div className="text-black text-sm">
            <ul className="list-none m-0 p-0">
              <li className="font-bold mb-2">Design Resources</li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Freelancing
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-300">
                Design Hiring
                </a>
              </li>
              <li className="py-1">
                <a href="/#" className="hover:text-gray-300">
                Design Portfolio
                </a>
              </li>
              <li className="py-1">
                <a href="/#" className="hover:text-gray-300">
                Design Education
                </a>
              </li>
              <li className="py-1">
                <a href="/#" className="hover:text-gray-300">
                Design Education
                </a>
              </li>
              <li className="py-1">
                <a href="/#" className="hover:text-gray-300">
                Creative Process
                </a>
              </li>
              <li className="py-1">
                <a href="/#" className="hover:text-gray-300">
                Design Industry Trends
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
    <br></br>
    <br></br>
    <footer className="flex justify-between bg-gray-200 border-t border-gray-200 py-4 h-auto w-auto">
      <div className='ml-10'><p>
        <FontAwesomeIcon icon={faCopyright} className="ml-0 text-sm" />
        2023 Dribbble. All rights reserved.
      </p>
      </div>
      <div className="flex px-0 mr-16">
        <p className="mr-0"><span className="font-bold">20501853{' '}</span>shots dribbbled</p><img src={logo} alt="logo" className="h-6 w-6"></img>
      </div>
    </footer>
  </div>
  </footer>
  );
};

export default Footer;