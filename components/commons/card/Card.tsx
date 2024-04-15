import { CardNoticeType } from '@/types/noticeTypes';
import styles from './Card.module.scss';

/**
 * @param {Object} props
 * @param {Object} props.notice "/notices" GET 리스폰스의 "items" 배열속성의 낱개 데이터
 */

interface CardProp {
  notice: CardNoticeType;
}

export default function Card({ notice }: CardProp) {}
