import React from 'react'
import parse from 'html-react-parser';

export default function EmailInbox(props) {

    const [emailInbox, setEmailInbox] = React.useState([])
    const email = props.email.replace('@', '%40');

    React.useEffect(() => {
        let intervalId;

        const fetchMessages = async () => {
            try {
                const response = await fetch(`https://rmnapi.gtgroup.dev/main/getmessages/${email}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setEmailInbox(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (props.triggerFetch) {
            fetchMessages();
            intervalId = setInterval(fetchMessages, 5000);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [props.email, props.triggerFetch]);
    return (
        <div>
            {emailInbox.map((email, index) => (
                <div key={index} className='h-fit flex-1 flex-col overflow-auto	 text-textColor mt-4 px-4 py-3 border-emailBorderColor border-b-2'>
                    <h1 className='text-xl font-medium'>{email.from}</h1>
                    <p className='text-lg my-2'>{email.subject}</p>
                    <div key={index} className='w-full max-w-full' dangerouslySetInnerHTML={{ __html: email.message }}></div>
                </div>))}
        </div>
    )
};
