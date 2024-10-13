import React from "react";
import Copy from '../image/copy.svg'

export default function InputField(props) {
    function copy(event) {
        console.log(props.inputValue)
    }
    return (
        <form className="flex flex-col w-full">
            <label className="text-textColor capitalize text-base mb-2 max-sm:text-sm mb-1.5">{props.labelName}</label>
            <div className="flex items-center mb-4">
                <input disabled value={props.inputValue} className="h-12 w-full border-solid border-[1px] border-inputBorderColor rounded-lg outline-none mr-4 pl-2 text-base text-textColor bg-white max-sm:h-10 mr-4"></input>
                <img src={Copy} className="w-8 h-8 cursor-pointer" onClick={copy}></img>
            </div>
        </form>
    )
}