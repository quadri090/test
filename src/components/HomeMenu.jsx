import React from 'react'
import Interests from './Interests'
import HomeServe from './HomeServe.jsx'
import ContactCard from './ContactCard'
import ff from '../assets/fast-food 1.png'
import hf from '../assets/healthy-food 1.png'
import drinks from '../assets/mai-thai 1.png'
import fork from '../assets/fork 1.png'
import { Link } from 'react-router-dom'

export default function HomeMenu() {
  return (
    <div className='font-Poppins text-primary-grey'>
        <div className='sm:text-center'>
            <p className='text-[20px] sm:text-[28px] lg:text-[40px] font-semibold '>chowChow</p>
            <p className='text-[12px] sm:text-[15px] lg:text-[20px] font-normal'>Anything food, we got you covered.</p>
        </div>
        <div className='mt-[31px] lg:mt-[80px]'>
            <p className='text-[12px] sm:text-[16px] lg:text-[20px] font-medium text-black '>Where are you?</p>
            <div className='flex justify-between items-center w-full border-[1px] mt-[10px] rounded-[5px]'>

                <input className='text-[12px] font-normal h-[40px] lg:h-[60px] p-[10px]  sm:text-base lg:text-[20px] outline-none' placeholder='Enter your delivery address'/>
                <i className='fa fa-chevron-down text-primary-red px-[8px]'></i>
            </div>
        </div>

        <div className='my-[30px] lg:my-[42px]'>
            <p className='text-[12px] sm:text-[16px] lg:text-[20px]'>Pick an interest</p>
            <div className='flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 lg:flex lg:flex-row  gap-[20px]'>
                
                <Interests
                    routte='/Vendors'
                    src={ff}
                    head='Fast food'
                    desc='All sorrows are less with bread.'
                />
                
                <div onClick={ () => {alert('Coming Soon')}}>
                    <Interests
                        src={hf}
                        head='Vegetables & Fruits'
                        desc='May not want it, but good for you.'
                    />
                </div>

                <div onClick={ () => {alert('Coming Soon')}}>
                    <Interests
                        src={drinks}
                        head='Drinks & Cocktails'
                        desc="I feel sad for those who don't drink."
                    />
                </div>

                <div onClick={ () => {alert('c\Coming Soon')}}>
                    <Interests
                        src={fork}
                        head='Restaurants'
                        desc='All sorrows are less with bread.'
                    />
                </div>
            </div>

            <div className='border-b-[1px] mt-[30px]'></div>

            <div className='w-full text-center mt-[30px]'>
                <p className='text-[20px] font-semibold text-primary-grey'>How we serve you</p>
                <HomeServe />
            </div>
            <ContactCard />
        </div>
    </div>
  )
}