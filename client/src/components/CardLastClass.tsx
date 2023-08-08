import Link from "next/link";
import styles from "../styles/CardLastClass.module.css";
import { BiPlayCircle } from "react-icons/bi";
import { useAppSelector } from "@/store/hooks";

interface Props {
  lastClass: string;
  title: string;
}

function CardLastClass({ lastClass, title }: Props) {
  const { classList } = useAppSelector((rootReducer) => rootReducer.classes);

  return (
    <section className={styles.Card__LastClass}>
      <div className={styles.header_class}>
        <div>
          <h1>Tu última clase:</h1>
          <p>{title}</p>
        </div>
        <iframe
          className={styles.videoframe}
          width="209"
          height="89"
          src={lastClass}
          title="Last class video"
          allowFullScreen
          allow="autoplay"
        />
      </div>
      <hr className={styles.splitLine} />
      <div className={styles.continueClass}>
        <Link
          href={
            classList?._id
              ? `/classroom/${classList._id}`
              : "/classroom/643f669920ab7834dd652c54"
          }
        >
          <button>
            <BiPlayCircle /> Continuar clase
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CardLastClass;
