import styles from './Explanation.module.scss';

interface ExplanationProp {
  description: string;
}
export default function Explanation({ description }: ExplanationProp) {
  return (
    <div className={styles.explanation}>
      <p className={styles.title}>공고 설명</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
