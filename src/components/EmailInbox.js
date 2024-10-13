import React from 'react'


export default function EmailInbox(props) {

    const [emailInbox, setEmailInbox] = React.useState([])
    const email = props.email.replace(`@`, '%40')

    React.useEffect(() => {
        fetch(`https://regmenow.gtgroup.dev/main/getmessages/${email}`)
            .then(response => response.json())
            .then(data => setEmailInbox(data))
            .catch(error => console.error('Fetch operation error:', error));
    }, []);
    
    return (
        <div>
            <h1>{emailInbox.from}</h1>
            <p>{emailInbox.subject}</p>
            <p>{emailInbox.message}</p>
            <p>{emailInbox.date}</p>
        </div>
    )
}