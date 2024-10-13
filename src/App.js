import logo from './logo.svg';
import React from 'react'
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
    <div className="App" >
      <NavigationButt email='Email' EmailIcon={EmailIcon} address='Address' AddressIcon={AddressIcon} mobile='Mobile' MobileIcon={MobileIcon} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {inputComponents[selectedTab]}
    </div >
  )
}

export default App;
