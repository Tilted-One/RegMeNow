import React from 'react'


export default function GenerateButton(props) {
    return (
        <div className='flex'>
            <button className='h-12 bg-blue rounded-2xl m-auto text-white capitalize px-8 text-center'>{props.buttonText}</button>
        </div>
    )
}