import styles from '@/components/commons/dropDown/Dropdown.module.scss';
import { MouseEventHandler } from 'react';

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
              <button onClick={handleClick} type="button">
                {option}
              </button>
            </li>
          );
        })}
    </ul>
  );
}
