/**
 * @function formatNoticeTime 공고 Card 컴포넌트의 time 에 들어갈 문자열을 포매팅
 * @param startsAt   "2023-07-20T15:00:00.000Z" 형식의 문자열
 * @param workHours 일하는 시간의 숫자형값
 *
 * @function formatWage 공고 Card 컴포넌트의 pay에 들어갈 문자열을 포매팅
 */
export function formatNoticeTime(startsAt: string, workHours: number): string {
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

export function formatWage(wage: number): string {
  // 숫자를 세 자리마다 쉼표로 구분하여 문자열로 변환
  const formattedWage = wage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // 변환된 문자열에 "원"을 추가하여 반환
  return `${formattedWage}원`;
}

export function calculatePayIncreaseRate(
  hourlyPay: number,
  originalHourlyPay: number,
): string {
  return '';
}
