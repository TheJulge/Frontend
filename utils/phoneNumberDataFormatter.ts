export function formatPhoneNumber(phoneNumber: string | undefined) {
  if (phoneNumber) {
    const digits = phoneNumber.replace(/\D/g, '');

    // 숫자가 10자리 또는 11자리여야 함
    if (digits.length === 10 || digits.length === 11) {
      // 10자리일 경우, 3자리, 3~4자리, 4자리로 분리
      if (digits.length === 10) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
      }
      // 11자리일 경우, 앞의 3자리를 제외하고 나머지를 3~4자리, 4자리로 분리
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
    }

    // 유효한 휴대폰 번호가 아닌 경우, 원래 번호를 그대로 반환
  }
  return phoneNumber;
}
