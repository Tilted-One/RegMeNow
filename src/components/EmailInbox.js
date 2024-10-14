import React from 'react'


export default function EmailInbox(props) {

    const [emailInbox, setEmailInbox] = React.useState([])
    const email = props.email.replace(`@`, '%40')

    React.useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(`https://regmenow.gtgroup.dev/main/getmessages/${email}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setEmailInbox(data);
            } catch (error) {
                console.error('Fetch operation error:', error);
            }
        };

        fetchMessages();
    }, [email]);
    return (
        <div>
            {emailInbox.map((email, index) => (
                <div key={index} className='text-textColor px-4 py-3 border-emailBorderColor border-b-2'>
                    <h1 className='text-lg'>{email.from}</h1>
                    <p>{email.subject}</p>
                    <p>{email.message}</p>
                </div>
            ))}
        </div>
    )
}