import React from 'react'

export default function NavigationButt(props) {
    function handleClick(option) {
        props.setSelectedTab(option)
    }
    const className = props.isMobile
        ? 'flex justify-evenly mt-16 mb-4 w-full'
        : 'w-[270px] h-[400px] pl-16 flex-row content-center';
    return (
        <div className={className}>
            <button className={`flex h-12 px-2 items-center rounded-2xl ${props.selectedTab !== props.email ? 'opacity-30' : ''}`} onClick={() => props.setSelectedTab('Email')} >
                <img src={props.EmailIcon} className='mr-3' alt={props.email}></img>
                Email
            </button>
            {/* <button className={`flex h-12 px-2 items-center rounded-2xl ${props.selectedTab !== props.mobile ? 'opacity-30' : ''} ${!props.isMobile ? 'my-16' : ''}`} onClick={() => props.setSelectedTab('Mobile')}>
                <img src={props.MobileIcon} className='mr-3' alt={props.mobile}></img>
                Mobile
            </button> */}
            <div className={!props.isMobile ? 'my-16' : ''}></div>
            <button className={`flex h-12 px-2 items-center rounded-2xl ${props.selectedTab !== props.address ? 'opacity-30' : ''}`} onClick={() => props.setSelectedTab('Address')}>
                <img src={props.AddressIcon} className='mr-3' alt={props.address}></img>
                Address
            </button>
        </div>
    )
}