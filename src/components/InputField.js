import React from "react";
import Copy from '../image/copy.svg'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InputField(props) {

    function copy(event) {
        if (props.inputValue) {
            navigator.clipboard.writeText(props.inputValue)
                .then(() => {
                    toast.success('Copied to clipboard!');
                })
                .catch(error => {
                    toast.error('Copy failed!');
                    console.error('Copy failed:', error);
                });
        }
    };
    const classNameImg = props.isMobile
        ? 'w-8 h-8 cursor-pointer'
        : 'w-8 h-8 cursor-pointer mr-4'

    return (
        <form className="flex flex-col w-full ">
            <label className={`text-base capitalize min-w-60 mb-2`}>{props.labelName}</label>
            <div className="flex items-center mb-4">
                <input disabled value={props.inputValue} className="h-12 w-full border-solid border-[1px] border-inputBorderColor rounded-lg outline-none mr-4 pl-2 text-base text-textColor bg-white max-sm:h-10 mr-4"></input>
                <img src={Copy} className={classNameImg} alt='copy' onClick={copy}></img>
            </div>
        </form>
    )
}