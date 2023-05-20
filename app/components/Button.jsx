import { BellIcon, SearchIcon } from '@heroicons/react/outline'

import React from 'react'
import localFont from '@next/font/local'

const delicious = localFont({
    src: './DeliciousHandrawn-Regular.ttf'
})

export function Button(props) {
    return (
        <div className={delicious.className}>
            <div className='h-16  sticky text-white w-full flex items-center justify-center'>
                {/*   <div className='flex px-5 space-x-5 items-center'>
                <SearchIcon className='w-5 h-5 text-white' />
                <input type="text " placeholder='Search for tasks' className='bg-transparent border-0 text-white placeholder-gray-200 outline-none focus:outline-none focus:ring-0a text-lg' />
            </div>*/}

                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Verify
                </button>

            </div>
        </div>
    )
}
