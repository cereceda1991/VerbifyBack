import styles from "../styles/Card.module.css";

interface Course {
  key: number;
  title: string;
  description: string;
  image: string;
}

interface Props extends Course {}

function CourseCard({ title, description, image }: Props) {
  return (
    <div className={styles.container}>
      <figure className={styles.imagecontainer}>
        <img src={image} className={styles.image} alt={title} />
      </figure>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default CourseCard;
