'use client';

import { FormEvent, SetStateAction, useState } from 'react';
import ImageUploadContainer from '../../../../components/post/ImageUploadContainer';
import ContentContainer from '../../../../components/post/ContentContainer';
import HashTagContainer from '../../../../components/post/HashTagContainer';
import PrivacySettingContainer from '../../../../components/post/PrivacySettingContainer';
import { postCreate } from '../../../../api/post/postCreate';
import { tempPostCreate } from '../../../../api/post/tempPostCreate';
import { useRouter } from 'next/navigation';

export default function PostCreate() {
  const [isContent, setIsContent] = useState('');
  const [isImages, setIsImages] = useState<File[]>([]);
  const [isBoundary, setIsBoundary] = useState('ALL');
  const [isUserHashTags, setIsUserHashTags] = useState<string[]>([]);
  const [isTemp, setIsTemp] = useState<boolean>(true);
  const router = useRouter();

  const handleImageChange = (images: SetStateAction<File[]>) => {
    setIsImages(images);
  };
  const handleContentChange = (content: SetStateAction<string>) => {
    setIsContent(content);
  };
  const handleBoundaryChange = (boundary: SetStateAction<string>) => {
    setIsBoundary(boundary);
  };
  const handleUserHashTagsChange = (hashtags: SetStateAction<string[]>) => {
    setIsUserHashTags(hashtags);
  };
  const handleTempChange = (temp: boolean) => {
    setIsTemp(temp);
  };

  // 업로드 관련
  const handleSubmit = async (event: FormEvent, temp: boolean) => {
    event.preventDefault();
    const formData = new FormData();

    const postData = {
      postContent: isContent,
      tags: isUserHashTags.map((tag) => ({ tagName: tag.replace('#', '') })),
      tempSave: isTemp,
      boundary: isBoundary,
      photos: isImages.map((file) => {
        const formData = new FormData();
        formData.append('mediaFile', file);
        return { mediaFile: formData };
      }),
    };

    if (temp) {
      tempPostCreate(postData);
      router.push('/my-page');
    } else {
      postCreate(postData);
      router.push('/my-page');
    }
  };

  return (
    <div className="CreatePostContainer overflow-y-scroll">
      <div className="flex flex-col items-center">
        <div className="sticky top-0 z-20 flex h-[73px] w-full items-center justify-end bg-white">
          <button
            onClick={() => handleTempChange(true)}
            type="submit"
            form="postCreateForm"
            className="mr-[12px] h-[40px] w-[124px] rounded-full border-2 border-purple bg-purple text-white hover:bg-white hover:text-purple"
          >
            임시저장
          </button>
          <button
            onClick={() => handleTempChange(false)}
            type="submit"
            form="postCreateForm"
            className={`'border-2 mr-[12px] h-[40px] w-[124px] rounded-full border-purple bg-purple text-white hover:bg-white hover:text-purple`}
          >
            업로드
          </button>
        </div>
        <form
          className="w-[55%] min-w-[512px]"
          id="postCreateForm"
          onSubmit={(e) => handleSubmit(e, isTemp)}
        >
          {/* 이미지 */}
          <ImageUploadContainer onImageChange={handleImageChange} />
          {/* 내용 */}
          <ContentContainer onContentChange={handleContentChange} />
          {/* 해시태그 */}
          <HashTagContainer onHashTagChange={handleUserHashTagsChange} />
          {/* 공개설정 */}
          <PrivacySettingContainer onBoundaryChange={handleBoundaryChange} />
        </form>
      </div>
    </div>
  );
}
