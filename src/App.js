import logo from './logo.svg';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Email from './components/Email'
import Address from './components/Address';
import Mobile from './components/Mobile';
import NavigationButt from './components/NavigationButt';
import Store from './components/Store'
import EmailIcon from './image/sms.svg'
import AddressIcon from './image/global-search.svg'
import MobileIcon from './image/mobile.svg'


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
      <div className={`h-screen ${!isMobile ? 'flex items-center' : ''}`} >
        <NavigationButt isMobile={isMobile} email='Email' EmailIcon={EmailIcon} address='Address' AddressIcon={AddressIcon} mobile='Mobile' MobileIcon={MobileIcon} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
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
