// import React from "react";
// import styles from "@/styles/UnitsBox.module.css";
// import Link from "next/link";

// interface UnitsBoxProps {
//   title: string;
//   themes: [];
// }

// function UnitsBox(props: UnitsBoxProps) {
//   const { title, themes } = props;

//   return (
//     <div className={styles.div}>
//       <div>
//         <p>{title}</p>
//       </div>
//       <hr />
//       <div className={styles.themes}>
//         {themes.map((theme, index) => (
//           <div key={index}>
//             <button>
//               <Link href={`/classroom/${theme}`}>Clase N°{index + 1}</Link>
//             </button>
//           </div>
//         ))}
//       </div>
//       <hr />
//       <div className={styles.bottom}>
//         <div className={styles.previous}>
//           <button disabled>Unidad anterior</button>
//         </div>
//         <div className={styles.next}>
//           <button disabled>Unidad siguiente</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// type Props = {
//   title: string;
//   themes: string[];
// };

// export default UnitsBox;

// import React, { useState } from "react";
// import styles from "@/styles/UnitsBox.module.css";
// import Link from "next/link";

// interface UnitsBoxProps {
//   title: string;
//   themes: string[];
//   classId: string;
// }

// function UnitsBox(props: UnitsBoxProps) {
//   const { title, themes } = props;
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const goToPreviousVideo = () => {
//     if (currentVideoIndex > 0) {
//       setCurrentVideoIndex(currentVideoIndex - 1);
//     }
//   };

//   const goToNextVideo = () => {
//     if (currentVideoIndex < themes.length - 1) {
//       setCurrentVideoIndex(currentVideoIndex + 1);
//     }
//   };

//   return (
//     <div className={`box_main ${isCollapsed ? "" : "iscollapased"}`}>
//       <button
//         className={styles.row_right}
//         onClick={() => setIsCollapsed(!isCollapsed)}
//       >
//         Mostrar/Ocultar
//       </button>
//       <p>{title}</p>
//       <hr />
//       <div className={styles.themes}>
//         {themes.map((theme, index) => (
//           <div key={index}>
//             <button>
//               <Link
//                 href={`/classroom/${theme}${
//                   index === currentVideoIndex ? `?autoplay=true` : ``
//                 }`}
//               >
//                 {`Clase N°${index + 1}`}
//               </Link>
//             </button>
//           </div>
//         ))}
//       </div>
//       <hr />
//       <div className={styles.bottom}>
//         <div className={styles.previous}>
//           <button
//             onClick={goToPreviousVideo}
//             disabled={currentVideoIndex === 0}
//           >
//             Unidad anterior
//           </button>
//         </div>
//         <div className={styles.next}>
//           <button
//             onClick={goToNextVideo}
//             disabled={currentVideoIndex === themes.length - 1}
//           >
//             Unidad siguiente
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default UnitsBox;
import styles from "@/styles/UnitsBox.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
interface UnitsBoxProps {
  title: string;
  themes: string[];
  classId: string;
}

function UnitsBox({ title, themes }: UnitsBoxProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isShow, setIsShow] = useState<boolean>(true);

  function showbox() {
    setIsShow(!isShow);
  }

  const goToPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const goToNextVideo = () => {
    if (currentVideoIndex < themes.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  return (
    <div className={`${styles.box_main} ${isShow ? "" : styles.iscollapsed}`}>
      <button className={styles.row_right} onClick={showbox}>
        {isShow ? <BiArrowBack /> : <BiRightArrowAlt />}
      </button>
      <p>{title}</p>
      <hr />
      <div className={styles.themes}>
        {themes.map((theme, index) => (
          <div key={index}>
            <button className={styles.buttons_class}>
              <Link
                href={`/classroom/${theme}${
                  index === currentVideoIndex ? `?autoplay=true` : ``
                }`}
              >
                {`Clase N°${index + 1}`}
              </Link>
            </button>
          </div>
        ))}
      </div>
      <hr />
      <div className={styles.bottom}>
        <div className={styles.previous}>
          <button
            className={styles.buttons_class}
            onClick={goToPreviousVideo}
            disabled={currentVideoIndex === 0}
          >
            Unidad anterior
          </button>
        </div>
        <div className={styles.next}>
          <button
            className={styles.buttons_class}
            onClick={goToNextVideo}
            disabled={currentVideoIndex === themes.length - 1}
          >
            Unidad siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnitsBox;
