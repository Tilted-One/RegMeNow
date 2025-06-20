import React from 'react'
import PlayStoreLogo from '../image/icons8-google-play-store.svg'
import QrCodeIcon from '../image/qrCodeIcon.jpg'
import QrCode from '../image/qrCode.jpg'

import { getAnalytics, logEvent } from "firebase/analytics";

export default function Store() {
    const handleClick = (event) => {
        window.open('https://play.google.com/store/apps/details?id=com.granturismo.regmenow&hl=en-US', '_blank', 'noopener,noreferrer');

        const analytics = getAnalytics();
        logEvent(analytics, 'download_click_counter', { name: event.target.getAttribute('name') });
    };

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }
    React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isModalOpen]);


    return (
        <div className='fixed h-auto top-0 w-full py-4 flex flex-col justify-center items-center bg-white z-50'>
            <div className='w-96 flex justify-evenly items-center '>
                <div className='flex items-center gap-x-2'>
                    <p onClick={handleClick} name='downloadClickTextCounter' className='cursor-pointer'>Download our app</p>
                    <img onClick={handleClick} name='downloadClickIconCounter' src={PlayStoreLogo} alt='Play Store Log' className='w-6 h-6 cursor-pointer'></img>
                </div>
                <img onClick={handleImageClick} src={QrCodeIcon} alt='Qr Code Icon' className='w-6 h-6 cursor-pointer'></img>
            </div>
            {isModalOpen && (
                <div className="w-full mt-10 flex justify-center items-center">
                    <div className="bg-white p-5 border w-4/5 max-w-lg relative rounded-xl">
                        <span onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2 text-inputBorderColor text-2xl font-bold cursor-pointer">&times;</span>
                        <img src={QrCode} alt='Qr Code' className='mt-6'></img>
                    </div>
                </div>
            )}
        </div>
    )
}
