import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {  NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from  '../../../store/mainSlice'
/* import { ChevronDownIcon } from '@heroicons/react/solid' */

export default function MenuMobile() {
  const dispatch = useDispatch()
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <FontAwesomeIcon size='lg' icon={faBars}></FontAwesomeIcon>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <NavLink 
                  to="/"
                 className={({ isActive }) => isActive? " bg-ia-purple-med " : ""}
                >
                  <div className=' text-ia-purple-dark text-center p-2'>Jogar</div>
                </NavLink>
              </Menu.Item>
              
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <NavLink 
                  to="/config"
                 className={({ isActive }) => isActive? " bg-ia-purple-med " : ""}
                >
                  <div className=' text-ia-purple-dark text-center p-2'>Config</div>
                </NavLink>
              </Menu.Item>
             
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <div onClick={() => dispatch(reset())} className=' text-ia-purple-dark text-center p-2' >Reset</div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

