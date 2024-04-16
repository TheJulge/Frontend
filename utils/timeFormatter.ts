/**
 * @function formatNoticeTime 공고 Card 컴포넌트의 time 에 들어갈 문자열을 포매팅하는 함수
 * @param startsAt   "2023-07-20T15:00:00.000Z" 형식의 문자열
 * @param workHours 일하는 시간의 숫자형값
 */
export default function formatNoticeTime(
  startsAt: string,
  workHours: number,
): string {
  const date = new Date(startsAt);
  const year = date.getFullYear().toString().slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  const endDate = new Date(date.getTime() + workHours * 60 * 60 * 1000);
  const endYear = endDate.getFullYear().toString().slice(-2);
  const endMonth = ('0' + (endDate.getMonth() + 1)).slice(-2);
  const endDay = ('0' + endDate.getDate()).slice(-2);
  const endHours = ('0' + endDate.getHours()).slice(-2);
  const endMinutes = ('0' + endDate.getMinutes()).slice(-2);

  let formattedString = `${year}.${month}.${day} ${hours}:${minutes}`;
  if (endDate.getDate() !== date.getDate()) {
    formattedString += `~${endYear}.${endMonth}.${endDay} ${endHours}:${endMinutes} (${workHours}시간)`;
  } else {
    formattedString += `~${endHours}:${endMinutes} (${workHours}시간)`;
  }

  return formattedString;
}
