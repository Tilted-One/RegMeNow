import logo from './logo.svg';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Email from './components/Email'
import Address from './components/Address';
import Mobile from './components/Mobile';
import NavigationButt from './components/NavigationButt';

import EmailIcon from './image/sms.svg'
import AddressIcon from './image/global-search.svg'
import MobileIcon from './image/mobile.svg'


function App() {


  const [selectedTab, setSelectedTab] = React.useState('Email')

  const inputComponents = {
    'Email': <Email />,
    'Mobile': <Mobile />,
    'Address': <Address />
  }

  return (
    <div className="App h-full" >
      <NavigationButt email='Email' EmailIcon={EmailIcon} address='Address' AddressIcon={AddressIcon} mobile='Mobile' MobileIcon={MobileIcon} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {inputComponents[selectedTab]}
      <div className='fixed w-full'>
        <ToastContainer position='bottom-center'
          toastOptions={{duration: 1000,}} />
      </div>
    </div >

  )
}

export default App;
