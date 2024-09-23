import React, { useState, useEffect, useRef } from 'react';
import CommentWrap from './mid/CommentWrap';
import PostCount from './mid/PostCount';
import PostTags from './mid/PostTags';
import ImageSlider from './ImageSlider';
import { Comment, PostsDetailData } from '../../../../../../types/dataType';
import { AddCommentType } from '../../../../../../hooks/useComments';
import BoxCommonButton from '../../../../../../components/ui/BoxCommonButton';
import GeneralAction from '../../../../../../components/buttons/option-menu/GeneralAction';
import { useGeneralAction } from '../../../../../../hooks/useGeneralAction';
import { getPostSharedCount } from '../../../../../../api/post/getPostSharedCount';
import useLoggedInUserData from '../../../../../../hooks/user/useLoggedInUserData';
import PlusButton from '../../../../../../components/animations/PlusButton';
import { useSelector } from 'react-redux';
import { selectLoginStatus } from '../../../../../../store/slices/loginSlice';

// 디테일 게시물 페이지의 중간 영역(이미지, 본문, 댓글, 게시물 옵션)
interface MidContainerProps {
  post: PostsDetailData['data'];
  postId: number;
  comments: Comment[];
  onAddComment: (newComment: AddCommentType) => void;
  onAddReply: (parentId: number, newComment: AddCommentType) => void;
  onLike: (commentId: number, increment: number, isReply: boolean) => void;
  onReply: (id: number, name: string) => void;
  onSaveEdit: (
    commentId: number,
    parentId: number | null,
    newContent: string,
  ) => void;
  onDelete: (commentId: number, parentId: number | null) => void;
  fetchMoreComments: () => void;
  isLoading: boolean;
  isLastPage: boolean;
  nickname: string;
  imageUrl: string;
  searchRecent: string[];
  setSearchRecent: React.Dispatch<React.SetStateAction<string[]>>;
  saved: boolean;
}

export default function MidContainer({
  post,
  postId,
  comments,
  onLike,
  onReply,
  onSaveEdit,
  onDelete,
  fetchMoreComments,
  isLoading,
  isLastPage,
  nickname,
  searchRecent,
  setSearchRecent,
  saved,
}: MidContainerProps) {
  const [sharedCount, setSharedCount] = useState<number>(post.sharedCount ?? 0);
  const [boundary, setBoundary] = useState<'ALL' | 'FOLLOW' | 'NONE'>(
    post.boundary,
  );
  const MAX_WIDTH = 550;
  const MIN_WIDTH = 300;
  const INITIAL_WIDTH = MAX_WIDTH;
  const [imageBoxWidth, setImageBoxWidth] = useState(INITIAL_WIDTH);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const startY = useRef(0);
  const { showGeneralAction, handleToggleClick, boxRef } = useGeneralAction();
  const [currentImageUrl, setCurrentImageUrl] = useState(
    post.files[0]?.fileUrl || '',
  );
  const { userData } = useLoggedInUserData();
  const isLoggedIn = useSelector(selectLoginStatus);

  useEffect(() => {
    const fetchSharedCount = async () => {
      try {
        const count = await getPostSharedCount(postId);
        setSharedCount(count);
      } catch (error) {
        console.error('Failed to fetch shared count:', error);
        setSharedCount(post.sharedCount);
      }
    };

    fetchSharedCount();
  }, [postId, post.sharedCount]);

  const adjustBoxSize = (deltaY: number) => {
    const newWidth = Math.max(
      MIN_WIDTH,
      Math.min(MAX_WIDTH, imageBoxWidth - deltaY * 0.7),
    );
    setImageBoxWidth(newWidth);
  };

  const toggleScroll = () => {
    if (containerRef.current) {
      const scrollAmount = 240;
      const scrollDownTarget = containerRef.current.scrollTop + scrollAmount;
      const scrollUpTarget = 0;
      const scrollTarget = isScrolledDown ? scrollUpTarget : scrollDownTarget;

      adjustBoxSize(scrollAmount);

      if (isScrolledDown && imageBoxWidth < INITIAL_WIDTH) {
        setIsScrolledDown(false);
        setImageBoxWidth(INITIAL_WIDTH);
      }

      containerRef.current.scrollTo({
        top: scrollTarget,
        behavior: 'smooth',
      });

      setIsScrolledDown(!isScrolledDown);
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      adjustBoxSize(event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      startY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const deltaY = startY.current - event.touches[0].clientY;
      const newWidth = Math.max(
        MIN_WIDTH,
        Math.min(MAX_WIDTH, imageBoxWidth - deltaY * 0.7),
      );
      setImageBoxWidth(newWidth);
      startY.current = event.touches[0].clientY;
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [imageBoxWidth]);

  return (
    <div
      ref={containerRef}
      className="flex min-h-[calc(100vh-245px)] flex-col justify-between "
    >
      <div className="top mx-auto my-0 flex w-full flex-grow flex-col justify-center">
        <div
          className={`BoxWrap mb-[50px] mt-5 flex justify-center 
              xs:xs:flex-col xs:items-center
              sm:sm:flex-col sm:items-center
              lg:flex-row lg:place-items-stretch
        `}
        >
          <div
            className={`ImageBox relative aspect-square rounded-2xl transition-all 
            duration-300 ${
              imageBoxWidth >= 500
                ? 'xs:min-w-[340px] sm:min-w-[370px] md:min-w-[400px] lg:min-w-[450px] xl:min-w-[500px] 2xl:min-w-[550px] 3xl:min-w-[850px]'
                : 'xs:min-w-[280px] sm:min-w-[230px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[300px] 2xl:min-w-[300px] 3xl:min-w-[500px]'
            }`}
          >
            <ImageSlider
              files={post.files.map((file) => ({
                fileUrl: file.fileUrl,
                isPhoto: file.photo,
                isVideo: file.video,
              }))}
              onImageChange={setCurrentImageUrl}
            />

            {userData?.data?.nickname === post.nickname && (
              <>
                <BoxCommonButton
                  onClick={handleToggleClick}
                  type="toggle"
                  width="4px"
                  height="20px"
                  position="top-left"
                  className="p-3"
                  showGeneralAction={showGeneralAction}
                />
                {showGeneralAction && (
                  <div ref={boxRef} className=" absolute left-5 top-0 z-20">
                    <GeneralAction
                      type="post"
                      postId={postId}
                      imageUrl={currentImageUrl}
                      setSharedCount={setSharedCount}
                      initialBoundary={boundary}
                      onBoundaryChange={setBoundary}
                    />
                  </div>
                )}
              </>
            )}
            <PlusButton
              className="m-2"
              postId={postId}
              width="24px"
              height="24px"
              isClicked={saved}
              active={isLoggedIn === 'loggedIn'}
            />
          </div>
          <div
            className={`ContentBox rounded-2xl bg-lightGray px-3 pt-[10px] text-sm font-light
            text-black transition-all duration-300 xs:mt-4 sm:mt-4 lg:ml-[15px] lg:mt-0
            ${
              imageBoxWidth >= 500
                ? 'xs:min-h-[160px] xs:min-w-[340px] sm:min-h-[160px] sm:min-w-[370px] sm:max-w-[370px] md:min-h-[160px] md:min-w-[400px] lg:min-w-[300px] xl:min-w-[360px] 2xl:min-w-[360px] 3xl:min-w-[460px]'
                : 'xs:min-h-[140px] xs:min-w-[280px] sm:min-h-[140px] sm:min-w-[230px] sm:max-w-[230px] md:min-h-[140px] md:min-w-[320px] lg:min-w-[565px] xl:min-w-[565px] 2xl:min-w-[565px] 3xl:min-w-[800px]'
            }
            ${post.postContent ? 'block' : 'hidden'}`}
          >
            {post.postContent}
          </div>
        </div>
        <div className="postInfo mt-auto flex flex-row items-center justify-between">
          <PostCount
            post={post}
            postId={postId}
            toggleScroll={toggleScroll}
            nickname={nickname}
            imageUrl={currentImageUrl}
            sharedCount={sharedCount}
            setSharedCount={setSharedCount}
            imageBoxWidth={imageBoxWidth}
          />
          <PostTags
            post={post}
            searchRecent={searchRecent}
            setSearchRecent={setSearchRecent}
          />
        </div>
      </div>
      <div
        className={`bot overflow-hidden transition-all duration-200 ease-in-out ${
          imageBoxWidth >= 500
            ? 'max-h-0 opacity-0'
            : 'max-h-[1000px] opacity-100'
        }`}
        style={{ transitionProperty: 'opacity, max-height' }}
      >
        <CommentWrap
          user={comments}
          onLike={onLike}
          onReply={onReply}
          onSaveEdit={onSaveEdit}
          onDelete={onDelete}
          fetchMoreComments={fetchMoreComments}
          isLoading={isLoading}
          isLastPage={isLastPage}
        />
      </div>
    </div>
  );
}
