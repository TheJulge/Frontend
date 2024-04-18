/**
 * 공고 Card 컴포넌트의 time 에 들어갈 문자열을 포매팅하는 함수
 * @param {string} startsAt   "2023-07-20T15:00:00.000Z" 형식
 * @param {number} workHours 일하는 시간
 * @returns 날짜 "24.04.18 " 형식 , 일하는시간 "15:00~18:00 (3시간)" 형식으로 두개 문자열 반환
 */
export function formatNoticeTime(
  startsAt: string,
  workHours: number,
): string[] {
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

  const startDateString = `${year}.${month}.${day} `;
  let startTimeString = `${hours}:${minutes}`;
  let endTimeString = `${endHours}:${endMinutes}`;
  if (endDate.getDate() !== date.getDate()) {
    endTimeString = `${endYear}.${endMonth}.${endDay} ${endHours}:${endMinutes}`;
  }

  return [
    startDateString,
    `${startTimeString}~${endTimeString} (${workHours}시간)`,
  ];
}

/**
 * 공고 Card 컴포넌트의 pay에 들어갈 문자열을 포매팅하는 함수
 * @param {number} wage 시급을 나타내는 숫자
 * @returns {string} "30,000원" 형식으로 반환
 */

export function formatWage(wage: number): string {
  // 숫자를 세 자리마다 쉼표로 구분하여 문자열로 변환
  const formattedWage = wage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // 변환된 문자열에 "원"을 추가하여 반환
  return `${formattedWage}원`;
}

/**
 * 시급 인상률을 일의자리까지 계산해서 포매팅하는 함수
 * @param {number} hourlyPay 공고의 시급
 * @param {number} originalHourlyPay 가게의 원래 시급
 * @returns "기존 시급보다 15%" 형식으로 반환
 */
export function calculatePayIncreaseRate(
  hourlyPay: number,
  originalHourlyPay: number,
): string {
  const increaseRate =
    ((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100;
  const roundedIncreaseRate = Math.round(increaseRate); //소수점 반올림
  return `기존 시급보다 ${roundedIncreaseRate}%`;
}
