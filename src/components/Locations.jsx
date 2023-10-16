import React from 'react'
import { useContext } from 'react'
import { HomeContext } from '../context/HomeContext'

export default function Locations(props) {
    
    const {addressInputClose, location, setLocation} = useContext(HomeContext);
    const {id, streetName} = props.data;
    console.log(location)

    const setStreetname = (streetName) => {
      setLocation(streetName)
      addressInputClose()
    }

    
  return (
    <div className='hover:text-primary-red' onClick={() => {setStreetname(streetName)}}>
        <p className='text-[13px] lg:text-[16px] font-semibold ml-[10px] hover:cursor-pointer' id='streetInput'>{streetName}</p> 
    </div>
  )
}
