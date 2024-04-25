import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { uploadImageToS3 } from '@/libs/image';
import styles from './ImageInput.module.scss';

export default function ImageInput() {
  const [image, setImage] = useState<string>(
    '/images/updateShop/uploadImage.png',
  );
  const fileInput = useRef<HTMLInputElement>(null);

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    const formData = new FormData();
    reader.readAsDataURL(file);
    formData.append('name', file.name);

    reader.onload = async (event: any) => {
      if (reader.readyState === 2) {
        // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
        setImage(event.target.result);
        try {
          const imageURL = await uploadImageToS3(file, formData);
          console.log(imageURL);
        } catch (err) {
          console.log(err);
        }
      }
    };
  };

  return (
    <div className={styles.imageInput}>
      <label htmlFor="가게 이미지" className={styles.inputTitle}>
        가게 이미지
      </label>
      <button
        type="button"
        className={styles.shopImage}
        onClick={() => fileInput.current?.click()}
      >
        <Image
          className={styles.image}
          src={image}
          width={483}
          height={276}
          alt="이미지 추가하기"
        />
      </button>
      <input
        type="file"
        name="imageURL"
        id="imageURL"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={handleImage}
      />
    </div>
  );
}
