'use client'

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Client, Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { getChat } from '../../../api/chat/getChat';
import { postImageChat } from '../../../api/chat/postImageChat';
import useLoggedInUserData from '../../../hooks/user/useLoggedInUserData';
import { ChatComponentProps } from '../../../constants/interface';
import CloseButtonIcon from '../../../public/assets/svg/close.svg';
import ShopIcon from '../../../public/assets/svg/shop-icon.svg';
import UserActiveIcon from '../../../public/assets/svg/user-active-icon.svg';
import MessageRound from '../../../public/assets/svg/message-round.svg';
import MessageIconIcon from '../../../public/assets/svg/message-icon-icon.svg';
import MessagePhotoIcon from '../../../public/assets/svg/message-photo-icon.svg';
import MessageFolderIcon from '../../../public/assets/svg/message-folder-icon.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { UUID } from 'crypto';
import { postFileChat } from '../../../api/chat/postFileChat';
import { setActivateChatRoomId } from '../../../store/slices/messageSlice';

interface ChatMessage {
  content: string;
  sender: string;
  mention: [string];
  messageType: any;
  chatRoomId: UUID;
  media: [string];
}

interface ChatUserInfo {
  participant: string;
  profileUrl: string;
  isActive: boolean;
  isBusiness: boolean;
}

const ChatComponent = ({ clickCloseChatRoom, isChatModalMax }: ChatComponentProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [firstUnreadMessageId, setFirstUnreadMessageId] = useState<any>(null);
  const [chatUserInfo, setChatUserInfo] = useState<ChatUserInfo[]>();
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const clientRef = useRef<Client | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null); 
  const fileInputRef = useRef<HTMLInputElement | null>(null); 

  const isChatRoomOpened = useSelector((state: RootState) => state.message.isChatRoomOpened);
  const activateChatRoomId = useSelector((state: RootState) => state.message.activateChatRoomId);

  const { userData } = useLoggedInUserData();
  const userNickName = userData?.data.nickname;

  const scrollToBottomAuto = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  const clickIconButton = (e: any) => {
    e.stopPropagation();
    // icon 버튼 클릭
  };

  const clickImageButton = (e: any) => {
    e.stopPropagation();

    if (imageInputRef.current) {
      imageInputRef.current.click();
    } else {
      console.log('Photo input ref not found');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files;

      if (isChatRoomOpened) {
        postImageChat(selectedFile, activateChatRoomId)
          .then((response) => {
          })
          .catch((error) => {
            console.error('Error sending image:', error);
          });
      } else {
        console.log('No active chat room ID');
      }
    }
  };

  const clickFileButton = (e: any) => {
    e.stopPropagation();

    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.log('File input ref not found');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files;

      if (isChatRoomOpened) {
        postFileChat(selectedFile, activateChatRoomId)
          .then((response) => {
          })
          .catch((error) => {
            console.error('Error sending image:', error);
          });
      } else {
        console.log('No active chat room ID');
      }
    }
  };  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // console.log(activateChatRoomId, '여기여기 활성화된 룸아이디')
  
  useEffect(() => {
    const socket = new SockJS(`https://www.naildp.com/ws-stomp`);
    const stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
    });

    stompClient.onConnect = () => {
      stompClient.subscribe(`/topic/chat/${userNickName}/newRoom`, (message: Message) => {
        const receivedMessage: ChatMessage = JSON.parse(message.body);
        if (activateChatRoomId !== receivedMessage.toString()) {
          setActivateChatRoomId(receivedMessage.toString());
          console.log(receivedMessage, '챗룸 아이디가 변경되었습니다.');
        }
      });

      stompClient.subscribe(`/sub/chat/${activateChatRoomId}`, (message: Message) => {
        const receivedMessage: ChatMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        console.log('챗룸 내용 가져오기 sub')
      });
    };

    stompClient.activate();
    clientRef.current = stompClient;

    return () => {
      if (clientRef.current) {
        clientRef.current.deactivate();
        clientRef.current = null;
      }
    };
  }, [activateChatRoomId, userNickName]);

  useEffect(() => {
    scrollToBottomAuto();
  }, [messages]);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        setIsLoading(true);
        const result = await getChat(activateChatRoomId);
        if (result) {
          setMessages(result.data.contents);
          setChatUserInfo(result.data.chatUserInfo);
        }
      } catch (error) {
        console.error("Error fetching chat messages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (activateChatRoomId) {
      fetchChat();
    }
  }, [activateChatRoomId]);
  
  const sendMessage = () => {
    if (clientRef.current && inputMessage.trim()) {
      const messageDto = {
        content: inputMessage,
        sender: userNickName,
        mention: [],
        messageType: 'TEXT',
        chatRoomId: activateChatRoomId,
        media: [],
      };

      clientRef.current.publish({
        destination: `/pub/chat/${activateChatRoomId}/message`, 
        body: JSON.stringify(messageDto),
      });

      setInputMessage('');
    }
  };

  return (
    <div className='w-full h-full z-40 flex flex-col items-center justify-between border-l-[1px] border-t-[1px] border-mainPurple'>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="imageInput"
        ref={imageInputRef} 
      />

      <input
        type="file"
        accept="*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
        ref={fileInputRef} 
      />
      
      <div className={`${!isChatRoomOpened && 'hidden'} w-full z-40 flex items-center justify-between`}>
        <div className={`bg-lightPurple flex items-center px-[10px] rounded-l-[24px] z-20 flex-1 ${isChatModalMax ? 'h-[100px]' : 'h-[60px]'} top-0 ${!isChatModalMax && ' translate-y-[-1px]  translate-x-[-50px] border-l-[1px]  border-t-[1px] border-mainPurple'}`}>
          { !isChatModalMax && <MessageRound className='absolute translate-x-[19px] translate-y-[38px]' /> }
          { chatUserInfo && (
            <div className={`${isChatModalMax ? 'w-[62px] h-[62px]' : 'w-[42px] h-[42px]'} flex items-center justify-center border-[2px] border-mainPurple bg-white rounded-full p-[1px]`}>
              <Image
                src={chatUserInfo[0].profileUrl} 
                width={40} height={40} alt={'chatRoomImage'} 
                style={{objectFit: 'cover', width: '100%', height: '100%'}} 
                quality={100} 
                sizes='100vw' 
                className='rounded-full' 
              />
            </div>
          )}
          <div className='flex flex-col pl-[10px]'>
            <div className='flex items-center gap-[4px]'>
              { chatUserInfo && <span className={`font-[700] ${isChatModalMax ? 'text-[16px]' : 'text-[15px]'} `}>{chatUserInfo[0].participant}</span> }
              { chatUserInfo && chatUserInfo[0].isBusiness && <ShopIcon /> }
              { chatUserInfo && chatUserInfo[0].isActive && (
                <>
                  <span className='font-[500] text-[11px] text-textDarkPurple'>지금 활동 중</span>
                  <UserActiveIcon />
                </>
              )}
            </div>
            <div className=''>
              { chatUserInfo && chatUserInfo[0].isBusiness && (
                <span className={`font-[500] ${isChatModalMax ? 'text-[14px]' : 'text-[11px]'}  text-textDarkPurple`}>
                  운영중 09:00 ~ 18:00
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          className='w-[30px] h-[20px] flex items-center justify-center'
          onClick={clickCloseChatRoom}
        >
          <CloseButtonIcon />
        </button>
      </div>
      
      <div className={`${!isChatRoomOpened && 'hidden'} w-full flex-1 py-[10px] z-40 flex flex-col gap-[13px] overflow-hidden overflow-y-scroll bg-lightPurple`}>
        {messages.map((message, index) => (
          <div key={index} className={`w-full flex px-2`}>


            {
              // 내가 보낸것 TEXT 일때,
              message.sender === userNickName && message.messageType === 'TEXT' &&
              <div className={`inline-block max-w-[60%] rounded-2xl break-words ml-auto bg-mainPurple`}>
                <p className={`py-1 px-2 font-[500] ${isChatModalMax ? 'text-[1rem]' : 'text-[0.625rem]'} text-white break-words`}>
                  {message.content}
                </p>
              </div>
            
            }
      
            {
              // 남이 보낸것 TEXT 일때,
              message.sender !== userNickName && message.messageType === 'TEXT' &&
              <div className={`inline-block max-w-[60%] rounded-2xl break-words mr-auto bg-white`}>
                <p className={`py-1 px-2 font-[500] ${isChatModalMax ? 'text-[1rem]' : 'text-[0.625rem]'} text-black break-words`}>
                  {message.content}
                </p>
              </div>
            }

            {
              // 내가보낸 사진일 때,
              message.sender === userNickName && message.messageType === 'IMAGE' && message.media.length === 1 &&
              <div className={`inline-block max-w-[60%] w-[120px] h-[120px] rounded-2xl break-words ml-auto overflow-hidden`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${message.media[0]}`}
                  alt='ISentImage'
                    width={50} height={50}
                    style={{objectFit: 'cover', width: '100%', height: '100%'}} 
                    quality={100} 
                    sizes='100vw' 
                />
              </div>
            }

            {
              // 남이보낸 사진일 때,
              message.sender !== userNickName && message.messageType === 'IMAGE' && message.media.length === 1 &&
              <div className={`inline-block max-w-[60%] w-[120px] h-[120px]  rounded-2xl break-words mr-auto overflow-hidden`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${message.media[0]}`}
                  alt='ISentImage'
                    width={50} height={50}
                    style={{objectFit: 'cover', width: '100%', height: '100%'}} 
                    quality={100} 
                    sizes='100vw' 
                />
              </div>
            }

            {
              // 내가보낸 여러장의 사진일 때,
              message.sender === userNickName && message.messageType === 'IMAGE' && message.media.length > 1 &&

              <div className={`min-w-[180px] min-h-[40px] bg-white grid ${message.media.length % 2 === 0 ? 'grid-cols-2' : 'grid-cols-3'} place-content-around p-[2px] rounded-xl ml-auto`}>
                {
                  message.media.map((_, index) => (
                    <div
                      key={index}
                      className={`inline-block ${message.media.length % 2 === 0 ? 'w-[90px] h-[90px]' : 'w-[60px] h-[60px]'}  p-[2px] rounded-xl break-words overflow-hidden`}
                    >
                      <Link href={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${message.media[index]}`} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${message.media[index]}`}
                          alt='ISentImage'
                            width={60} height={60}
                            style={{objectFit: 'cover', width: '100%', height: '100%'}} 
                            quality={100} 
                            sizes='100vw' 
                        />
                      </Link>
                    </div>
                  ))
                }
              </div>                
                
            }

            {
              // 남이보낸 여러장의 사진일 때,
              message.sender !== userNickName && message.messageType === 'IMAGE' && message.media.length > 1 &&

              <div className={`min-w-[180px] min-h-[40px] bg-white grid ${message.media.length % 2 === 0 ? 'grid-cols-2' : 'grid-cols-3'} place-content-around p-[2px] rounded-xl mr-auto`}>
                {
                  message.media.map((_, index) => (
                    <div
                      key={index}
                      className={`inline-block ${message.media.length % 2 === 0 ? 'w-[90px] h-[90px]' : 'w-[60px] h-[60px]'}  p-[2px] rounded-xl break-words overflow-hidden`}
                    >
                      <Link href={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${message.media[index]}`} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${message.media[index]}`}
                          alt='ISentImage'
                            width={60} height={60}
                            style={{objectFit: 'cover', width: '100%', height: '100%'}} 
                            quality={100} 
                            sizes='100vw' 
                        />
                      </Link>

                    </div>
                  ))
                }
              </div>                
                
            }


            {
              // 내가 보낸 파일일 때
              message.sender === userNickName && message.messageType === 'FILE' && message.media.length === 1 && (
                <div className={`inline-block max-w-[80%]  break-words ml-auto overflow-hidden`}>
                  <a className='hover:text-mainPurple' href={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${message.media[0]}`}>
                    <p className='font-[700] group-hover:font-[900]'>파일 다운로드</p> 
                    <p className='text-[12px]'>
                      {`${message.media[0].slice(0, 8)}...${message.media[0].substring(message.media[0].lastIndexOf('.'))}`}
                    </p>
                  </a>
                </div>
              )
            }

            
            {
              // 남이 보낸 파일일 때
              message.sender !== userNickName && message.messageType === 'FILE' && message.media.length === 1 && (
                <div className={`inline-block max-w-[80%] group  break-words mr-auto overflow-hidden`}>
                  <a className='hover:text-mainPurple' href={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${message.media[0]}`}>
                    <p className='font-[700] group-hover:font-[900]'>파일 다운로드</p> 
                    <p className='text-[12px]'>
                      {`${message.media[0].slice(0, 8)}...${message.media[0].substring(message.media[0].lastIndexOf('.'))}`}
                    </p>
                  </a>
                </div>
              )
            }

          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={`${!isChatRoomOpened && 'hidden'} w-full h-[126px] flex-col bg-white border-t-[1px]  border-mainPurple`}>
        <div className='flex items-center justify-between w-full h-[30px] px-[5px]'>
          <div className='flex gap-[6px]'>
            <button onClick={clickIconButton}>
              <MessageIconIcon />
            </button>
            <button onClick={clickImageButton}>
              <MessagePhotoIcon />
            </button>
            <button onClick={clickFileButton}>
              <MessageFolderIcon />
            </button>
          </div>
          <div className='flex items-center'>
            <span className={`font-[400] text-[10px] ${inputMessage.length === 1000 ? 'text-red' : 'text-textDarkPurple'}`}>
              {inputMessage.length}
            </span>
            <span className='font-[400] text-[10px] text-textDarkPurple ml-[3px]'>/1000</span>
            <button 
              className='w-[60px] h-[20px] ml-[10px] flex items-center justify-center bg-mainPurple rounded-[30px]'
              onClick={sendMessage}
            >
              <span className='font-[600] text-[12px] text-white'>전송</span>
            </button>
          </div>
        </div>
        <div className='w-full h-[45px]'>
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="메시지를 입력하세요."
            className='w-full h-full p-2 resize-none outline-none'
            style={{ border: 'none', height: '100%', boxSizing: 'border-box' }}
            maxLength={1000}
            rows={1}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
