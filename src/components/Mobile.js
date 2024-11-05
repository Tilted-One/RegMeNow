import React from 'react'
import InputField from './InputField'
import GenerateButton from './GenerateButton'
import SelectedForm from './SelectForm'
import LoadingBar from './LoadingBar'
import MobileInbox from './MobileInbox'

export default function Mobile(props) {

    const [selectedCountry, setSelectedCountry] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [isLoaded, setIsLoaded] = React.useState(false)

    const countryArray = [
        { "Belgium": "Belgium" },
        { "Canada": "Canada" },
        { "France": "France" },
        { "Germany": "Germany" },
        { "Greece": "Greece" },
        { "Indonesia": "Indonesia" },
        { "Ireland": "Ireland" },
        { "Italy": "Italy" },
        { "Netherlands": "Netherlands" },
        { "Spain": "Spain" },
        { "United Kingdom": "United%20Kingdom" },
        { "United States": "United%20States" },
    ]

    async function fetchNumber() {
        if (selectedCountry.length > 0 && selectedCountry != 'Choose Country') {
            setIsLoaded(true)
            try {
                const response = await fetch(`https://regmenow.gtgroup.dev/main/getNumbersForCountry/${selectedCountry}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                const randomNumber = Math.floor(Math.random() * data.phoneNumbers.length);
                setNumber(data.phoneNumbers[randomNumber])
                setIsLoaded(false)
            } catch (error) { }
        }
    };

    const className = props.isMobile
    ? 'px-6'
    : 'py-10 px-14 w-full h-fit border-solid border-2 rounded-2xl border-inputBorderColor mr-[220px] ml-16'

    return (
        <div className={className}>
            <div className='mb-4'>
                <SelectedForm selectText='Choose Country' array={countryArray} setState={setSelectedCountry} />
            </div>
            <InputField labelName='building' inputValue={number}/>
            {isLoaded && <LoadingBar />}
            <div className='my-6'>
                <GenerateButton buttonText='Generate New Email' onClick={fetchNumber} />
            </div>
            <MobileInbox number={number} selectedCountry={selectedCountry}/>
        </div>
    )
}