// import React from 'react'

// export default function MobileInbox(props) {

//     const [mobileInbox, setMobileInbox] = React.useState([])
//     const number = props.number.replace(`+`, '%2B')

//     React.useEffect(() => {
//         const fetchMessages = async () => {
//             if (number && number.length > 0 && props.selectedCountry) {
//                 try {
//                     const response = await fetch(`https://rmnapi.gtgroup.dev/main/getInbox/${props.selectedCountry}/${number}`);
//                     if (!response.ok) {
//                         throw new Error(`HTTP error! Status: ${response.status}`);
//                     }
//                     const data = await response.json();
//                     setMobileInbox(data);
//                 } catch (error) {
//                     console.error('Fetch operation error:', error);
//                 }
//             }
//         };
//         const intervalId = setInterval(fetchMessages, 10000);
//         fetchMessages();
//         return () => clearInterval(intervalId);
//     }, [number, props.selectedCountry]);

//     return (
//         <div>
//             {mobileInbox.messages != undefined ? mobileInbox.messages.map((mobile, index) => (
//                 <div key={index} className='text-textColor mt-4 px-4 py-3 border-emailBorderColor border-b-2'>
//                     <h1>{mobile.message}</h1>
//                     <p>{mobile.from}</p>
//                     <p>{mobile.date}</p>
//                 </div>
//             ))
//                 :
//                 ''
//             }
//         </div>
//     )
// }
