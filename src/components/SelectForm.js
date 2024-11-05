import React from 'react'

import ArrowIcon from '../image/arrow-down.svg'

export default function SelectedForm(props) {
    
    return (
        <select className={`h-12 w-full border-solid border-[1px] border-inputBorderColor rounded-lg outline-none appearance-none px-2 text-base text-textColor bg-white bg-no-repeat bg-right mt-2 sm:text-lg4 ${window.innerWidth > 768 ? 'mr-6' : ''}`}
            style={{ backgroundImage: `url(${ArrowIcon})` }}
            onChange={(event) => props.setState(event.target.value)}>\
            <option selected>{props.selectText}</option>
            {props.array.map((country, index) => {
                const countryName = Object.keys(country)[0];
                const countryCode = country[countryName];
                return (
                    <option key={index} value={countryCode}>{countryName}</option>
                );
            })}
        </select>
    )
}