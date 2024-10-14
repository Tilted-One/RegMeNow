import React from 'react'
import InputField from './InputField'
import EmailInbox from './EmailInbox';

export default function Email() {

    const [email, setMail] = React.useState('')

    React.useEffect(() => {
        const fetchMail = async () => {
            try {
                const response = await fetch('https://regmenow.gtgroup.dev/main/getmail');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMail(data.mail);
            } catch (error) {
                console.error('Fetch operation error:', error);
            }
        };
        fetchMail();
    }, []);
    return (
        <div className='px-6'>
            <InputField labelName='building' inputValue={email} />
            <EmailInbox email={email} />
        </div>
    )
}