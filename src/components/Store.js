import React from 'react'
import PlayStoreLogo from '../image/icons8-google-play-store.svg'
import QrCodeIcon from '../image/qrCodeIcon.jpg'
import QrCode from '../image/qrCode.jpg'

export default function Store() {
    const handleClick = (url) => {
        window.open('https://play.google.com/store/apps/details?id=com.granturismo.regmenow&hl=en-US', '_blank', 'noopener,noreferrer');
    };

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <div className='fixed h-auto top-0 w-full py-4 flex flex-col justify-center items-center bg-white z-50'>
            <div className='w-96 flex justify-evenly items-center '>
                <p onClick={handleClick} className='cursor-pointer'>Download our app</p>
                <img onClick={handleClick} src={PlayStoreLogo} className='w-6 h-6 cursor-pointer'></img>
                <img onClick={handleImageClick} src={QrCodeIcon} className='w-6 h-6 cursor-pointer'></img>
            </div>
            {isModalOpen && (
                <div className="w-full mt-10 flex justify-center items-center">
                    <div className="bg-white p-5 border w-4/5 max-w-lg relative rounded-xl">
                        <span onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2 text-inputBorderColor text-2xl font-bold cursor-pointer">&times;</span>
                        <img src={QrCode} className='mt-6'></img>
                    </div>
                </div>
            )}
        </div>
    )
}