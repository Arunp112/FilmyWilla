import React from 'react'
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNagivation = () => {
  return (
    <section className='lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full'>
        <div className='flex items-center justify-between h-full px-3 text-neutral-400'>
            {
                mobileNavigation.map((nav,index)=>(
                    <NavLink key={nav.label+"mobilenavigation"}
                    to={nav.href}
                    className={({isActive})=>`PX-4  flex flex-col h-full items-center justify-center text-sm ${isActive && "text-white"}`}
                    >
                        <div className='text-xl'>{nav.icon}</div>
                        <p>{nav.label}</p>
                    </NavLink>
                ))
            }
        </div>
    </section>
  )
}

export default MobileNagivation