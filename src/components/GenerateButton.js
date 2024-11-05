import React from 'react'


export default function GenerateButton(props) {
    const className = props.isMobile
        ? 'h-12 w-full min-w-60 bg-blue rounded-lg m-auto text-white capitalize px-8 text-center'
        : 'h-12 bg-blue rounded-lg m-auto text-white capitalize text-center px-8 w-auto min-w-60 mt-2'
    return (
        <div className='flex'>
            <button className={className} onClick={props.onClick}>{props.buttonText}</button>
        </div>
    )
}