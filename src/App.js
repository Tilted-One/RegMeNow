import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Email from './components/Email'
import Address from './components/Address';
// import Mobile from './components/Mobile';
import NavigationButt from './components/NavigationButt';
import Store from './components/Store'
import EmailIcon from './image/sms.svg'
import AddressIcon from './image/global-search.svg'
import MobileIcon from './image/mobile.svg'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzHdQzIVTZken8JE-KmJSUEVbSR4ol_kY",
  authDomain: "regmenow-af28d.firebaseapp.com",
  projectId: "regmenow-af28d",
  storageBucket: "regmenow-af28d.firebasestorage.app",
  messagingSenderId: "506300856136",
  appId: "1:506300856136:web:27e772cd05b9bc7c28657d",
  measurementId: "G-GD4MQWF03D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {




  const [email, setEmail] = React.useState('')
  const [selectedTab, setSelectedTab] = React.useState('Email')
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const inputComponents = {
    'Email': <Email email={email} setEmail={setEmail} isMobile={isMobile} />,
    // 'Mobile': <Mobile isMobile={isMobile} />,
    'Address': <Address isMobile={isMobile} />
  }

  return (
    <div>
      <Store />
      <div className={`h-full ${isMobile ? '' : 'flex py-20'}`} >
        <NavigationButt titleName={selectedTab} isMobile={isMobile} email='Email' EmailIcon={EmailIcon} address='Address' AddressIcon={AddressIcon} mobile='Mobile' MobileIcon={MobileIcon} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {inputComponents[selectedTab]}
        <div className='fixed w-full'>
          <ToastContainer position='bottom-center'
            autoClose={1000} />
        </div>
      </div >
    </div>
  )
}

export default App;
