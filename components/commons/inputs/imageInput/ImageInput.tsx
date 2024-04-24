import React from 'react';
import AddImage from '@/public/images/updateShop/addImage.svg';
import styles from './ImageInput.module.scss';

export default function ImageInput() {
  return (
    <div className={styles.imageInput}>
      <div className={styles.inputTitle}>가게 이미지</div>
      <div className={styles.shopImage}>
        {/* <div
                  className={styles.imagePreview}
                  style={{ backgroundImage: `url(${imageUrl})` }}
                  id="imageUrl"
                /> */}
        <AddImage viewBox="0 0 110 63" />
      </div>
      <input
        id="imageUpload"
        type="file"
        style={{ display: 'none' }}
        // onChange={handleImageUpload}
      />
    </div>
  );
}
