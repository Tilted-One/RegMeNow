import React from 'react'
import InputField from './InputField'
import GenerateButton from './GenerateButton'
import SelectedForm from './SelectForm';
import LoadingBar from './LoadingBar';

export default function Address(props) {

    const [address, setAddress] = React.useState(null);
    const [selectedCountry, setSelectedCountry] = React.useState('')
    const [isLoaded, setIsLoaded] = React.useState(false)

    const countryArray = [
        { 'United States': "US" },
        { 'Australia': "AU" },
        { 'Canada': "CA" },
        { 'Brazil': "BR" },
        { 'Switzerland': "CH" },
        { 'Germany': "DE" },
        { 'Finland': "FI" },
        { 'India': "IN" },
        { 'Indonesia': "ID" },
        { 'Italy': "IT" },
        { 'Greece': "GR" },
        { 'France': "FR" },
    ]

    async function fetchAddress() {
        if (selectedCountry.length > 0 && selectedCountry !== 'Choose Country') {
            setIsLoaded(true)
            try {
                const response = await fetch(`https://rmnapi.gtgroup.dev/main/getAddress/${selectedCountry}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json()
                setIsLoaded(false)
                setAddress(data);
            } catch (error) {
                console.error('Fetch operation error:', error);
            }
        }
    };
    return (
        <div className={`${props.isMobile ? 'p-6' : 'py-10 px-14 w-full h-fit border-solid border-2 rounded-2xl border-inputBorderColor mr-[220px] ml-[270px]'}`}>
            <div className='flex mb-4'>
                <SelectedForm selectText='Choose Country' array={countryArray} setState={setSelectedCountry} />
                {!props.isMobile && <div className='flex'>
                    {isLoaded && <LoadingBar isMobile={props.isMobile} />}
                    <GenerateButton buttonText='Generate' onClick={fetchAddress} />
                </div>}
            </div>
            <InputField labelName='building' inputValue={address != null ? address.buildingNumber : ''} />
            <InputField labelName='streeet name' inputValue={address != null ? address.streetName : ''} />
            <InputField labelName='Street Address' inputValue={address != null ? address.streetAddress : ''} />
            <div className={`flex w-full ${props.isMobile ? 'flex-col' : ''} `}>
                <InputField labelName='State/Province' inputValue={address != null ? address.state : ''} />
                <span className='mr-6'></span>
                <InputField labelName='Postal Code' inputValue={address != null ? address.postalCode : ''} />
            </div>
            <InputField labelName='City' inputValue={address != null ? address.city : ''} />

            {props.isMobile &&
                <div className='mt-2'>
                    {isLoaded && <LoadingBar />}
                    <GenerateButton buttonText='Generate New Address' onClick={fetchAddress} />
                </div>
            }
        </div>
    )
}