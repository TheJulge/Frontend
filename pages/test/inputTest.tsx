import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import SelectInput from '@/components/commons/inputs/selectInput/SelectInput';
import SignInput from '@/components/commons/inputs/signInput/SignInput';
import SortSelectInput from '@/components/commons/inputs/sortSelectInput/SortSelectInput';
import TimeInput from '@/components/commons/inputs/timeInput/TimeInput';
import { useState } from 'react';

export default function InputTest() {
  const [aaa, setAaa] = useState<string>('');
  const [bbb, setBbb] = useState<string>('');
  const [ccc, setCcc] = useState<string>('');
  const [ddd, setDdd] = useState<string>('');
  const [eee, setEee] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [passwordCheckValue, setPasswordCheckValue] = useState<string>('');

  const OPTIONS = [
    '한식',
    '중식',
    '양식',
    '일식',
    '간식',
    '조식',
    '석식',
    '천식',
    '편의점',
    '분식',
    '기타',
  ];

  return (
    <>
      <SelectInput
        labelName="분류*"
        options={OPTIONS}
        value={ddd}
        setValue={setDdd}
      />
      <BasicInput labelName="가게*" value={aaa} setValue={setAaa} />
      <MoneyInput labelName="시급*" value={bbb} setValue={setBbb} />
      <TimeInput value={ccc} setValue={setCcc} />
      <SortSelectInput value={eee} setValue={setEee} />
      <div>분류*: {ddd}</div>
      <div>가게*: {aaa}</div>
      <div>시급*: {bbb}</div>
      <div>업무시간*: {ccc}</div>
      <div>정렬: {eee}</div>
      <SignInput
        labelName="이메일"
        inputType="email"
        value={emailValue}
        setValue={setEmailValue}
      />
      <SignInput
        labelName="비밀번호"
        inputType="password"
        value={passwordValue}
        setValue={setPasswordValue}
      />
      <SignInput
        labelName="비밀번호 확인"
        inputType="passwordCheck"
        value={passwordCheckValue}
        setValue={setPasswordCheckValue}
        anotherValue={passwordValue}
      />
      <div>이메일: {emailValue}</div>
      <div>비밀번호: {passwordValue}</div>
      <div>비밀번호 확인: {passwordCheckValue}</div>
    </>
  );
}
