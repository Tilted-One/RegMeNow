import React from 'react'
import InputField from './InputField'
import GenerateButton from './GenerateButton'
import ArrowIcon from '../image/arrow-down.svg'

export default function Address() {

    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
    const [address, setAddress] = React.useState(null);
    const [selectedCountry, setSelectedCountry] = React.useState('')
    const [generateAddress, setGenerateAddress] = React.useState(false)

    const countryArray = [
        { UnitedStates: "US" },
        { Australia: "AU" },
        { Canada: "CA" },
        { Brazil: "BR" },
        { Switzerland: "CH" },
        { Germany: "DE" },
        { Finland: "FI" },
        { India: "IN" },
        { Indonesia: "ID" },
        { Italy: "IT" },
        { Greece: "GR" },
        { France: "FR" },
    ]
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await fetch(`https://regmenow.gtgroup.dev/main/getAddress/${selectedCountry}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setAddress(data);
            } catch (error) {
                console.error('Fetch operation error:', error);
            }
        };

        if (generateAddress) {
            fetchAddress();
            setGenerateAddress(false);
        }
    }, [generateAddress]);
    return (
        <div className='p-6'>
            <div className='flex mb-4'>
                <select className={`h-12 w-full border-solid border-[1px] border-inputBorderColor rounded-lg outline-none appearance-none px-2  text-base text-textColor bg-white bg-no-repeat bg-right  sm:text-lg4 ${window.innerWidth > 768 ? 'mr-6' : ''}`}
                    style={{ backgroundImage: `url(${ArrowIcon})` }}
                    onChange={(event) => setSelectedCountry(event.target.value)}>\
                    <option selected>Choose Country</option>
                    {countryArray.map((country, index) => {
                        const countryName = Object.keys(country)[0];
                        const countryCode = country[countryName];
                        return (
                            <option key={index} value={countryCode}>{countryName}</option>
                        );
                    })}
                </select>
                {!isMobile && <GenerateButton buttonText='Generate' />}
            </div>
            <InputField labelName='building' inputValue={address != null ? address.buildingNumber : ''} />
            <InputField labelName='streeet name' inputValue={address != null ? address.streetName : ''} />
            <InputField labelName='Street Address' inputValue={address != null ? address.streetAddress : ''} />
            <div className='flex w-full '>
                <InputField labelName='State/Province' inputValue={address != null ? address.state : ''} />
                <span className='mr-6'></span>
                <InputField labelName='Postal Code' inputValue={address != null ? address.postalCode : ''} />
            </div>
            <InputField labelName='City' inputValue={address != null ? address.city : ''} />

            {isMobile &&
                <div className='mt-5'>
                    <GenerateButton buttonText='Generate New Address' onClick={() => setGenerateAddress(true)} />
                </div>
            }
        </div>
    )
}