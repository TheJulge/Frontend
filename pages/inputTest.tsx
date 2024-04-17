import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import SelectInput from '@/components/commons/inputs/selectInput/SelectInput';
import SortSelectInput from '@/components/commons/inputs/sortSelectInput/SortSelectInput';
import TimeInput from '@/components/commons/inputs/timeInput/TimeInput';
import { useState } from 'react';

export default function InputTest() {
  const [aaa, setAaa] = useState<string>('');
  const [bbb, setBbb] = useState<number>(0);
  const [ccc, setCcc] = useState<number>(0);
  const [ddd, setDdd] = useState<string>('');
  const [eee, setEee] = useState<string>('');

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
      <BasicInput labelName="가게*" setValue={setAaa} />
      <MoneyInput labelName="시급*" value={bbb} setValue={setBbb} />
      <TimeInput setValue={setCcc} />
      <SortSelectInput value={eee} setValue={setEee} />
      <div>분류*: {ddd}</div>
      <div>가게*: {aaa}</div>
      <div>시급*: {bbb}</div>
      <div>업무시간*: {ccc}</div>
      <div>정렬: {eee}</div>
    </>
  );
}
