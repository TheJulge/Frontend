// 현재 날짜와 createdAt의 시간 차이
export function timeChange(date: string): string {
  const now = new Date();
  const time = new Date(date);
  const diff = now.getTime() - time.getTime(); // Use getTime() to get the time in milliseconds

  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) {
    return '1분 전';
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}분 전`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}시간 전`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days}일 전`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months}분 전`;
  }

  const years = Math.floor(months / 12);
  return `${years}년 전`;
}
