'use client';

import React, { useEffect, useState } from 'react';
import HeartButton from '../animations/HeartButton';
import PlusButton from '../animations/PlusButton';
import Image from 'next/image';
import Video from '../ui/Video';
import Toggle from '../buttons/Toggle';
import GeneralAction from '../buttons/option-menu/GeneralAction';
import { PostBoxNewProps } from '../../constants/interface';
import { postBoxWidths } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectNumberOfBoxes } from '../../store/slices/boxLayoutSlice';
import { useGeneralAction } from '../../hooks/useGeneralAction';
import { postPostLike } from '../../api/post/postPostLike';
import { deletePostLike } from '../../api/post/deletePostLike';
import { selectLoginStatus } from '../../store/slices/loginSlice';
import { useRouter } from 'next/navigation';
import { setCommonModal, setArchiveModal } from '../../store/slices/modalSlice';

function PostBox({
  postId,
  photoId,
  photoUrl,
  like,
  saved,
  createdDate,
  tempPost,
  setIsSuggestLoginModalShow
}: PostBoxNewProps) {
  const router = useRouter()

  const isLoggedIn = useSelector(selectLoginStatus);
  const layoutNum = useSelector(selectNumberOfBoxes);

  const { showGeneralAction, handleToggleClick, boxRef } = useGeneralAction();

  const [isLiked, setIsLiked] = useState(like);
  const dispatch = useDispatch();



  const handleHeartClick = async () => {
    if (isLoggedIn === 'loggedOut') {
      return;
    }

    if (!isLiked && isLoggedIn === 'loggedIn') {
      let data = await postPostLike(postId);
      data.code == 2001 && setIsLiked((prev) => !prev);
    } else if(isLiked && isLoggedIn === 'loggedIn') {
      let data = await deletePostLike(postId);
      data.code == 2001 && setIsLiked((prev) => !prev);
    }
  };

  const handlePlusClick = () => {
    if (isLoggedIn === 'loggedOut') {
      return;
    }

    console.log('Click...Plus!');
    //모달 확인을 위해 작성 
    dispatch(setCommonModal("archive"))
    dispatch(setArchiveModal({postId}))
  };

  const handlePostClick = (e:any, postId:number) => {
    e.stopPropagation()

    if (isLoggedIn === 'loggedOut') {
      console.log('찍찍...')
      setIsSuggestLoginModalShow(true)
    }

    if (isLoggedIn === 'loggedIn') {
      router.push(`post/${postId}`)
    }

  }

  const isPhoto =
    photoUrl.endsWith('.jpg') ||
    photoUrl.endsWith('.jpeg') ||
    photoUrl.endsWith('.png') ||
    photoUrl.endsWith('.gif');
  
  const isVideo =
    photoUrl.endsWith('.mp4') ||
    photoUrl.endsWith('.mov');

  return (
    <div
      ref={boxRef}
      className="box relative mb-[16px] flex items-center justify-center overflow-hidden rounded-2xl border-[5px] border-transparent p-[5px] transition-all duration-500 hover:border-purple"
      style={{ width: postBoxWidths[layoutNum] }}
    >
      {tempPost == true && (
        <>
          <div className="absolute z-10 h-full w-full bg-darkPurple opacity-60"></div>
          <p className="z-10 text-center text-white">임시저장된 게시물</p>
        </>
      )}
      <button type='button' className="absolute inset-0 z-0" onClick={(e)=>{handlePostClick(e,postId)}}>
        {isPhoto && (
          <Image
            src={photoUrl}
            alt={createdDate}
            id={photoId.toString()}
            fill
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            quality={100}
            sizes="100vw, 50vw, 33vw"
            blurDataURL="https://image-component.nextjs.gallery/placeholder"
            placeholder="blur"
          />
        )}
        {isVideo && <Video src={photoUrl} width={'100%'} height={'100%'} />}
      </button>
      <button
        onClick={handleHeartClick}
        className="absolute right-2 top-2 z-10"
      >
        <HeartButton width="21px" height="19px" isClicked={isLiked} active={ isLoggedIn === 'loggedIn' }/>
      </button>
      <button
        onClick={handlePlusClick}
        className="absolute bottom-2 right-2 z-10"
      >
        <PlusButton width="24px" height="24px" isClicked={saved} active={ isLoggedIn === 'loggedIn' }/>
      </button>
      <button
        onClick={handleToggleClick}
        className="absolute left-2 top-2 z-10 p-2"
      >
        <Toggle
          width="4px"
          height="20px"
          className={`${showGeneralAction ? 'fill-purple' : 'fill-white'}`}
        />
      </button>
      {showGeneralAction && (
        <div className="absolute left-5 top-0 z-20">
          <GeneralAction type="post" postId={postId}/>
        </div>
      )}
    </div>
  );
}

export default React.memo(PostBox);
