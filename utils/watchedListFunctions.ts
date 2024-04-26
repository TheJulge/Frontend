import { SingleNoticeType } from '@/types/noticeTypes';

const KEY = 'recentNotice';
export const removeNoticeFromLocalStorage = () => {
  localStorage.removeItem(KEY);
};

export const getNoticesFromLocalStorage = (): null | SingleNoticeType[] => {
  const result = localStorage.getItem(KEY);
  const notices = result ? JSON.parse(result) : null;
  return notices;
};

export const addNoticeToLocalStorage = (noticeData: SingleNoticeType) => {
  let storageData = getNoticesFromLocalStorage();

  if (!storageData) {
    storageData = [noticeData];
    localStorage.setItem(KEY, JSON.stringify(storageData));
    return;
  }

  //중복 제거
  const currentId = noticeData.item.id;
  const mappedStoreId = storageData.map(storageData => storageData.item.id);

  if (!mappedStoreId.includes(currentId)) {
    storageData.push(noticeData);
  }

  if (storageData.length > 6) {
    storageData.shift();
  }

  localStorage.setItem(KEY, JSON.stringify(storageData));
};
