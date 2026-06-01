import styles from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

export default function LoadMore({ onLoadMore }: LoadMoreBtnProps) {
  return <button className={styles.button} onClick={onLoadMore}>Load more</button>;
}
