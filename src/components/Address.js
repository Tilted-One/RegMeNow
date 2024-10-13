import React from 'react'
import InputField from './InputField'
import GenerateButton from './GenerateButton'
import ArrowIcon from '../image/arrow-down.svg'

export default function Address() {

    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
    const [address, setAddress] = React.useState(null);
    const [selectedCountry, setSelectedCountry] = React.useState('')

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        fetch(`{https://regmenow.gtgroup.dev/main/getAddress/${selectedCountry}}`)
            .then(response => response.json())
            .then(data => setAddress(data))
            .catch(error => console.error('Fetch operation error:', error));
    }, []);

    return (
        <div className='p-6'>
            <div className='flex mb-4'>
                <select className={`h-12 w-full border-solid border-[1px] border-inputBorderColor rounded-lg outline-none appearance-none px-2  text-base text-textColor bg-white bg-no-repeat bg-right  sm:text-lg4 ${window.innerWidth > 768 ? 'mr-6' : ''}`}
                    style={{ backgroundImage: `url(${ArrowIcon})` }}
                    onChange={(event) => setSelectedCountry(event.target.value)}>
                    <option value="Countrty" selected>Countrty</option>
                    <option value="Georgia">Georgia</option>
                    <option value="USA">USA</option>
                    <option value="Japan">Japan</option>
                </select>
                {!isMobile && <GenerateButton buttonText='Generate' />}
            </div>
            <InputField labelName='building' inputValue='1' />
            <InputField labelName='streeet name' inputValue='2' />
            <InputField labelName='Street Address' inputValue='3' />
            <div className='flex w-full '>
                <InputField labelName='State/Province' inputValue='4' />
                <span className='mr-6'></span>
                <InputField labelName='Postal Code' inputValue='5' />
            </div>
            <InputField labelName='City' inputValue='6' />

            {isMobile && <div className='mt-5'>
                <GenerateButton buttonText='Generate New Address' />
            </div>
            }
        </div>
    )
}