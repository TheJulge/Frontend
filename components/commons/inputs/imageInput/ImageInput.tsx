import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ImageInput.module.scss';

export default function ImageInput() {
  const [image, setImage] = useState<string>(
    '/images/updateShop/uploadImage.svg',
  );
  const fileInput = useRef<HTMLInputElement>(null);

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      if (reader.readyState === 2) {
        // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
        setImage(event.target.result);
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
        <Image src={image} width={483} height={276} alt="가게 이미지" />
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
