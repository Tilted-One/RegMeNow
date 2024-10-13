import React from 'react'

export default function NavigationButt(props) {
    function handleClick(option) {
        props.setSelectedTab(option)
    }
    return (
        <div className='flex justify-evenly mt-6 w-full'>
            <button className={`flex h-12 px-2 items-center rounded-2xl ${props.selectedTab !== props.email ? 'opacity-30' : ''}`} onClick={() => props.setSelectedTab('Email')} >
                <img src={props.EmailIcon} className='mr-3'></img>
                Email
            </button>
            <button className={`flex h-12 px-2 items-center rounded-2xl ${props.selectedTab !== props.mobile ? 'opacity-30' : ''}`} onClick={() => props.setSelectedTab('Mobile')}>
                <img src={props.MobileIcon} className='mr-3'></img>
                Mobile
            </button>
            <button className={`flex h-12 px-2 items-center rounded-2xl ${props.selectedTab !== props.address ? 'opacity-30' : ''}`} onClick={() => props.setSelectedTab('Address')}>
                <img src={props.AddressIcon} className='mr-3'></img>
                Address
            </button>
        </div>
    )
}