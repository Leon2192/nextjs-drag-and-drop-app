import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { GrLinkNext } from 'react-icons/gr';
import Link from 'next/link';
import React from 'react'
import localFont from '@next/font/local'

const delicious = localFont({
  src: './DeliciousHandrawn-Regular.ttf'
})

export default function page() {
  return (
    <div className={delicious.className}>
      <div id='gabinete' className='p-10 pb-20'>
        <div className="drag-and-drop">
          <div className='column column--1'>
            <h2>Choose your difficult</h2>
          </div>
          <div className='column-gabinete column--2'>

            <div className="dd-zone-two-home">
              <div className='icon-next'>
                <GrLinkNext color='white' size={100} style={{
                  background: '#8ac926', borderRadius: '50%', padding: '10px', color: 'white'
                }} />
              </div>
            </div>
          </div>

          <div className='column column--3'>
            <div className="mode-container">
              <div className='icon-next-right'>
                <Link href='/easymode'>
                  <h1>Easy</h1>
                  <GrLinkNext color='white' size={100} style={{
                    background: '#8ac926', borderRadius: '50%', padding: '10px', color: 'red'
                  }} />
                </Link>
              </div>
              <div className='icon-next-right'>
                <Link href='/mediummode'>
                  <h1>Medium</h1>
                  <GrLinkNext color='white' size={100} style={{
                    background: '#8ac926', borderRadius: '50%', padding: '10px', color: 'red'
                  }} />
                </Link>
              </div>
              <div className='icon-next-right'>
                <Link href='/hardmode'>
                  <h1>Hard</h1>
                  <GrLinkNext color='white' size={100} style={{
                    background: '#8ac926', borderRadius: '50%', padding: '10px', color: 'red'
                  }} />
                </Link>
              </div>
            </div>
          </div>



        </div>







      </div>




    </div>
  )
}


