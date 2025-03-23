import styles from './BlogCard.module.css';
import { formatDate } from '../../helpers/Helpers';
const BlogCard = ({ article }) => {
  return (
    <>
      <div className={styles.card} key={article.name}>
        <div className={styles.cardHeader}>
          <img
            className={styles.cardPoster}
            src={article.poster}
            alt={article.title}
          />
        </div>
        <div className={styles.cardBody}>
          <span className={styles.tag}>{article.tag}</span>
          <h2 className={styles.cardTitle}>{article.title}</h2>
          <p className={styles.cardText}>{article.description}</p>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.userBox}>
            <img
              className={styles.avatar}
              src={article.avatar}
              alt={article.name}
            />
            <div>
              <h3 className={styles.userName}>{article.name}</h3>
              <small className={styles.date}>
                {formatDate(article.postedAt)}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
