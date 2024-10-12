'use client'

import { ChattingBoxProps } from '../../constants/interface'
import SearchIcon from '../../public/assets/svg/small-search.svg'
import ChatMaxIcon from '../../public/assets/svg/close_chat_max.svg'
import CloseChatIcon from '../../public/assets/svg/close_chat.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChatCategoryElements } from '../../constants'
import { getAllChatList } from '../../api/chat/getAllChatList'
import ChatComponent from '../modal/message/MessageRoom'
interface Chat {
  roomName: string;
  roomId: string;
}

export default function ChattingBox({ isChatModalShow, isChatModalMax, setIsChatModalMax, handleCloseChatModal }: ChattingBoxProps) {

  const [isChatListNull, setIsChatListNull] = useState<boolean>(false);
  const [isChatRoomOpen, setIsChatRoomOpen] = useState<boolean>(false)
  const [category, setCategory] = useState('all')
  const [chatList, setChatList] = useState<Chat[]>([])
  const [activateChatRoomId, setActivateChatRoomId] = useState('')
  const chatModalMaxWidth = window.innerWidth - 375
  const chatModalMaxHeight = window.innerHeight - 120

  const clickChatRoom = (e: any, chatRoomId:string) => {
    e.stopPropagation()
    e.preventDefault()
    setIsChatRoomOpen(true)
    setActivateChatRoomId(chatRoomId)
  }
  
  const clickCategory = (e: any, data:string) => {
    e.stopPropagation()
    setCategory(data)
  }

  const clickChatMaxIcon = (e: any) => {
    e.stopPropagation()
    setIsChatModalMax(true)
  }

  const clickCloseChatRoom = (e: any) => {
    e.stopPropagation()
    setIsChatRoomOpen(false)
  }

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const result = await getAllChatList();
        setChatList(result.data.contents)
        if (result.data.contents.length === 0) {
          setIsChatListNull(true)
        }
      } catch (error) {
        console.error('Failed to fetch shared count:', error);
      }
    }

    fetchChatList()

  },[category])

  return (
    <div 
      className={`chattingComponent relative ${isChatModalShow ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute chatModal flex flex-col items-center justify-start transition-all rounded-[20px] border-[2px] border-purple bg-white duration-500 overflow-hidden`} 
      style={{
        width: isChatModalMax ? chatModalMaxWidth : '360px',
        height: isChatModalMax ? chatModalMaxHeight : '600px'
      }}
      >
      <div className='topBar w-full h-[40px] z-40 flex items-center justify-between bg-white  border-b border-darkGray px-[12px]'>
        <form className='w-[160px] h-[25px] flex items-center justify-start rounded-[20px] border-purple border-[1px] pl-[5px] gap-[5px]'>
          <label htmlFor="searchBar"><SearchIcon /></label>
          <input type="text" id='searchBar' className='searchBar w-[80%] border-none outline-none bg-transparent text-[11px]' placeholder='채팅방, 참여자 통합검색'/>
        </form>
        <div className='buttonBox w-[50px] h-full flex items-center gap-[10px] justify-end'>
          {
            !isChatModalMax &&
            <button 
              className=''
                onClick={(e) => clickChatMaxIcon(e)}>
                <ChatMaxIcon/>
            </button>
          }
          <button 
            className='  '
              onClick={(e) => handleCloseChatModal(e)}>
              <CloseChatIcon/>
          </button>
        </div>
      </div>
      <div className='w-full h-full flex items-center justify-start'>
        <div className={`w-[360px] h-full flex flex-col ${!isChatModalMax && 'w-full'}`}>
          <nav className={`navBar ${isChatRoomOpen && !isChatModalMax &&'hidden'} w-full h-[50px] flex items-center justify-center gap-[10px]`}>
            {
              ChatCategoryElements.map((item, index) => (
                <button
                  key={index}
                  className={`w-[100px] h-[30px] flex items-center justify-center ${category === item.data && 'bg-purple text-white'} hover:bg-purple hover:text-white bg-buttonLightGray text-darkPurple font-[700] rounded-[20px]`}
                  onClick={(e)=>{clickCategory(e,item.data)}}
                >
                  <span>{item.name}</span>
                </button>
              ))
            }
          </nav>
          {
            !isChatModalMax && isChatRoomOpen && activateChatRoomId && (
            <div className='chatRoomDiv absolute bg-lightPurple w-[85%] right-0 h-dvh z-30'
              style={{ pointerEvents: 'auto' }} 
            >
              <ChatComponent chatRoomId={activateChatRoomId} clickCloseChatRoom={clickCloseChatRoom} /> {/* Pass roomId to ChatComponent */}
            </div>
          )}
          {
            <div className='chatRowBox w-full flex-1 flex flex-col items-center justify-start overflow-hidden overflow-y-scroll '>
              <ul className='w-full h-full'>
                {
                  !isChatListNull && 
                  chatList.map((chat, index) => (
                  <li 
                    key={index} 
                    className={`${isChatRoomOpen && !isChatModalMax && 'w-full'} ${isChatRoomOpen && activateChatRoomId === chat.roomId && 'bg-lightPurple'} w-[325px] h-[62px] rounded-[20px] mx-auto mb-[10px] hover:bg-chatChooseButton transition-all overflow-hidden`}
                  >
                    <button
                      className={`w-full h-full flex items-center justify-between ${activateChatRoomId === chat.roomId && ''} p-[10px]`}
                      onClick={(e) => { clickChatRoom(e, chat.roomId) }} // Pass the roomId here
                    >
                      <div className={`chatRoomImage ${activateChatRoomId === chat.roomId && isChatRoomOpen ? 'w-[40px] h-[40px] z-40' : activateChatRoomId !== chat.roomId && isChatRoomOpen ? 'w-[30px] h-[30px]' : 'w-[40px] h-[40px]'} mr-[10px]`}>
                        <Image 
                          src={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'} 
                          width={40} height={40} alt={'chatRoomImage'} 
                          style={{objectFit: 'cover', width: '100%', height: '100%'}} 
                          quality={100} 
                          sizes='100vw' 
                          className='rounded-full' 
                        />  
                      </div>
                      <div className='flex-1 h-[50px] flex justify-between'>
                        <div></div>
                        <div></div>
                      </div>
                    </button>
                  </li>
                ))}

              </ul>

            </div>
          }  
        </div>
        {
          isChatModalMax && isChatRoomOpen &&
          <div className='chatRoomDiv bg-lightPurple flex-1 h-full z-30'
            style={{ pointerEvents: 'auto' }} 
          >
            <ChatComponent chatRoomId={activateChatRoomId} clickCloseChatRoom={clickCloseChatRoom} /> {/* Pass roomId to ChatComponent */}
          </div>
        }
        {
          isChatModalMax && !isChatRoomOpen &&
          <div className='chatRoomDiv bg-lightPurple flex-1 h-full z-30'
            style={{ pointerEvents: 'auto' }} 
          >

          </div>
        }
      </div>
    </div>
  )
}
