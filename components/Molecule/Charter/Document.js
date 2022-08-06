import React from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const Document=()=>{
    return(
        <>
        <div className=" px-80 py-4 ">
<div className="grid grid-cols-1 up px-4 py-2">
<Disclosure defaultOpen="true">
          {({ open }) => (
            <>
            
              <Disclosure.Button className="flex justify-between w-full px-2 py-2 text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                <span className="text-lg font-bold top-visa navigate rounded-xl px-10 py-2">Documents required for Dubai Visa Online</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pt-1  rounded-2xl pb-2 text-gray-600">
<br/>
    <li className="text-sm font-semibold">A valid passport – front and last page</li>
    <li className="text-sm font-semibold">ID and address proof- PAN card and Adhar card/ Voter ID/ Driving License or any other document mention on the website</li>
    <li className="text-sm font-semibold">Passport size photograph with white background</li>
    <li className="text-sm font-semibold">Confirmed return air ticket</li>


              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
</div>
</div>
        </>
    )
}

export default Document;