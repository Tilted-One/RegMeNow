import React from 'react'
import InputField from './InputField'
import EmailInbox from './EmailInbox';
import GenerateButton from './GenerateButton';
import LoadingBar from './LoadingBar';

export default function Email(props) {

    const [isLoaded, setIsLoaded] = React.useState(false)

    async function fetchMail() {
        setIsLoaded(true)
        try {
            const response = await fetch('https://rmnapi.gtgroup.dev/main/getmail');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            props.setEmail(data.mail);
            setIsLoaded(false)
        } catch (error) { }
    };
    const className = props.isMobile
        ? 'px-6 w-full'
        : 'py-10 px-14 w-full h-auto   border-solid border-2 rounded-2xl border-inputBorderColor mr-[220px] ml-16'

    const classNameInner = props.isMobile
        ? ''
        : 'flex'

    return (
        <div className={className}>
            <div className={classNameInner}>
                <InputField labelName='building' inputValue={props.email} isMobile={props.isMobile} />
                {isLoaded && <LoadingBar />}
                <div className='mt-6'>
                    <GenerateButton buttonText='Generate New Email' onClick={fetchMail} isMobile={props.isMobile} />
                </div>
            </div>
            <EmailInbox email={props.email} />
        </div >
    )
}