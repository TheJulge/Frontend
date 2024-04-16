import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import SelectInput from '@/components/commons/inputs/selectInput/SelectInput';
import SortSelectInput from '@/components/commons/inputs/sortSelectInput/SortSelectInput';
import TimeInput from '@/components/commons/inputs/timeInput/TimeInput';

export default function InputTest() {
  const OPTIONS = [
    '한식',
    '중식',
    '양식',
    '일식',
    '간식',
    '조식',
    '중식',
    '석식',
    '천식',
    '편의점',
    '분식',
    '기타',
  ];

  return (
    <>
      <SelectInput labelName="분류*" options={OPTIONS} />
      <BasicInput labelName="이메일*" />
      <BasicInput labelName="비밀번호*" />
      <MoneyInput labelName="시급*" />
      <MoneyInput labelName="금액" />
      <TimeInput />
      <SortSelectInput />
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <div style={{ width: '350px' }}>
        <SelectInput labelName="분류*" options={OPTIONS} />
        <BasicInput labelName="이메일*" />
        <BasicInput labelName="비밀번호*" />
        <MoneyInput labelName="시급*" />
        <MoneyInput labelName="금액" />
        <TimeInput />
        <SortSelectInput />
      </div>
    </>
  );
}
