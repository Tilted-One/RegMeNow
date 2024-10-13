import React from 'react'
import InputField from './InputField'
import EmailInbox from './EmailInbox';

export default function Email() {

    const [email, setMail] = React.useState('')

    React.useEffect(() => {
        fetch('https://regmenow.gtgroup.dev/main/getmail')
            .then(response => response.json())
            .then(data => setMail(data.mail))
            .catch(error => console.error('Fetch operation error:', error));
    }, []);
    return (
        <div className='px-6'>
            <InputField labelName='building' inputValue={email} />
            <EmailInbox email={email}/>
        </div>
    )
}