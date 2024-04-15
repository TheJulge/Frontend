import styles from '@/components/commons/dropDown/Dropdown.module.scss';
import { EventHandler } from 'react';

type DropDownProps = {
  options: string[];
  handleClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

export default function DropDown({ options, handleClick }: DropDownProps) {
  return (
    <ul className={styles.optionList}>
      {options &&
        options.map((option, idx) => {
          return (
            <li className={styles.optionItem} key={idx} onClick={handleClick}>
              {option}
            </li>
          );
        })}
    </ul>
  );
}
