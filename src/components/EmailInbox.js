import React from 'react'


export default function EmailInbox(props) {

    const [emailInbox, setEmailInbox] = React.useState([])
    const email = props.email.replace(`@`, '%40')

    React.useEffect(() => {
        const fetchMessages = async () => {
            try {
                if (email.length > 0) {
                    const response = await fetch(`https://regmenow.gtgroup.dev/main/getmessages/${email}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    setEmailInbox(data);
                }
            } catch (error) {}
        };

        const intervalId = setInterval(fetchMessages, 1000);
        return () => fetchMessages();
    }, [email]);
    return (
        <div>
            {emailInbox.map((email, index) => (
                <div key={index} className='text-textColor mt-4 px-4 py-3 border-emailBorderColor border-b-2'>
                    <h1 className='text-lg'>{email.from}</h1>
                    <p>{email.subject}</p>
                    <p>{email.message}</p>
                </div>
            ))}
        </div>
    )
}