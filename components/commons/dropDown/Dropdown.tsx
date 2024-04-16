import styles from '@/components/commons/dropDown/Dropdown.module.scss';
import { MouseEventHandler } from 'react';

/**
 * SelectInput, SortSelectInput과 함께 사용합니다.
 * @param {options} props SelectInput, SortSelectInput에서 드롭다운에서 사용할 옵션들을 받아옵니다.
 * @param {handleClick} props 버튼을 클릭시 버튼에 해당하는 값으로 SelectInput, SortSelectInput의 state를 변경시키는 함수입니다.
 */

type DropDownProps = {
  options: string[];
  handleClick: MouseEventHandler;
};

export default function DropDown({ options, handleClick }: DropDownProps) {
  return (
    <ul className={styles.optionList}>
      {options &&
        options.map(option => {
          return (
            <li className={styles.optionItem} key={option}>
              <button
                className={styles.optionButton}
                onClick={handleClick}
                type="button"
              >
                {option}
              </button>
            </li>
          );
        })}
    </ul>
  );
}
