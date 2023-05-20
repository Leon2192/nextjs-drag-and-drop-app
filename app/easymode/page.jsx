'use client'

import { ChatAlt2Icon, ChevronDownIcon, DotsVerticalIcon, PaperClipIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/outline'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';

import { CardItem } from '../components/CardItem';
import Image from 'next/image'
import componentes from '../data/componentes.json'
import data from '../data/data.json'
import localFont from '@next/font/local'

const delicious = localFont({
    src: '../DeliciousHandrawn-Regular.ttf'
})

export default function Home() {
    const [ready, setReady] = useState(false);
    const [boardData, setBoardData] = useState(componentes);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (process.browser) {
            setReady(true)
        }
    })

    const onDragEnd = (re) => {
        console.log(re);
        let newBoardData = boardData;
        var dragItem = newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
        newBoardData[parseInt(re.source.droppableId)].items.splice(re.source.index, 1);
        newBoardData[parseInt(re.destination.droppableId)].items.splice(re.destination.index, 0, dragItem);
        setBoardData(newBoardData);
    }

    return (
        <>
            <div className={delicious.className}>
                <div id='gabinete' className='p-10 pb-20'>
                    {/*Board header
         <div className='flex justify-between'>
        <div className='flex items-center'>
          <h4 className='text-2xl font-bold text-gray-600'>Drag and drop app</h4>
          <ChevronDownIcon className='w-7 h-7 text-gray-500 rounded-full bg-white p-2 bg-white ml-5 shadow-xl' />
        </div>
        <div>
          <ul className='flex space-x-3'>
            <li>
              <Image src='https://randomuser.me/api/portraits/men/74.jpg' width='36' height='36' className='rounded-full' alt='imagen' />
            </li>
            <li>
              <Image src='https://randomuser.me/api/portraits/men/74.jpg' width='36' height='36' className='rounded-full' alt='imagen' />
            </li>
            <li>
              <Image src='https://randomuser.me/api/portraits/men/74.jpg' width='36' height='36' className='rounded-full' alt='imagen' />
            </li>
            <li>
              <button className='border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full'>
                <PlusIcon className='w-5 h-5 text-gray-500' />
              </button>
            </li>
          </ul>
        </div>
      </div>

      */}

                    {/*Board Columns*/}

                    {ready && (
                        <DragDropContext onDragEnd={onDragEnd}>

                            <div className='grid grid-cols-4 gap-6 my-10 '>
                                {componentes.map((board, index) => {
                                    return (
                                        <div key={index}>
                                            <Droppable droppableId={index.toString()}>
                                                {
                                                    (provider) => (
                                                        <div key={index} {...provider.droppableProps} ref={provider.innerRef} className=' p-3 rounded-md shadow-md flex flex-col relative overflow-hidden'>


                                                            <div className='overflow-y-auto overflow-x-hidden h-auto'>
                                                                {
                                                                    board.items.length > 0 && (
                                                                        board.items.map((item, iIndex) => {
                                                                            return (
                                                                                <CardItem
                                                                                    key={item.id}
                                                                                    data={item}
                                                                                    index={iIndex}
                                                                                    className='m-3'
                                                                                />)
                                                                        })
                                                                    )
                                                                }
                                                                {provider.placeholder}
                                                            </div>


                                                        </div>

                                                    )
                                                }
                                            </Droppable>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </DragDropContext>
                    )}
                </div>
            </div>
        </>
    )
}
