import React from 'react'

export default function LoadingBar(props) {
    const className = props.isMobile
    ? 'w-6 h-6 border-4 border-blue border-dotted rounded-full animate-spin mt-5 mr-4'
    : 'w-6 h-6 border-4 border-blue border-dotted rounded-full animate-spin mt-3 mr-4'
    return (
        <div className={`flex items-center justify-center items-center content-center ${props.isMobile ? 'mb-4 bg-blue' : ''}`}>
            <div className={className}></div>
        </div>
    )
}