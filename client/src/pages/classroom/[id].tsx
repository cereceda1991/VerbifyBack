// import React, { useCallback, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { getClassById } from "@/actions/classesActions";
// import { useRouter } from "next/router";
// import SideBar from "@/components/SideBar";
// import UnitsBox from "@/components/UnitsBox";
// import VideoBox from "@/components/VideoBox";
// import CourseDetails from "@/components/CourseDetails";
// import styles from "@/styles/ClassRoom.module.css";

// function ClassRoom() {
//   const router = useRouter();
//   const { id } = router.query;

//   const { authList } = useAppSelector((rootReducer) => rootReducer.auth);

//   const dispatch = useAppDispatch();

//   const fetchGetClassById = useCallback(() => {
//     if (typeof id === "string") dispatch(getClassById(id));
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (!authList) router.push("/login");
//     fetchGetClassById();
//   }, [fetchGetClassById]);

//   const { classList } = useAppSelector((rootReducer) => rootReducer.classes);
//   const { moduleList } = useAppSelector((rootReducer) => rootReducer.modules);

//   return (
//     <div className={styles.all}>
//       <div className={styles.sidebar}>
//         <SideBar />
//       </div>
//       <div className={styles.top}>
//         <div className={styles.mid}>
//           <VideoBox videourl={classList?.videoURL} />
//           <CourseDetails
//             title={classList?.name}
//             description={classList?.content}
//           />
//         </div>
//         <div className={styles.right}>
//           {moduleList && (
//             <UnitsBox title={moduleList?.name} themes={moduleList?.classes} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ClassRoom;

import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getClassById } from "@/actions/classesActions";
import { useRouter } from "next/router";
import SideBar from "@/components/SideBar";
import VideoBox from "@/components/VideoBox";
import CourseDetails from "@/components/CourseDetails";
import styles from "@/styles/ClassRoom.module.css";
import UnitsBox from "@/components/UnitsBox";
import SideBarMobile from "@/components/SideBarMobile";

function ClassRoom() {
  const router = useRouter();
  const { id } = router.query;
  // const { id = "" } = router.query;

  const { authList } = useAppSelector((rootReducer) => rootReducer.auth);
  const dispatch = useAppDispatch();

  const fetchGetClassById = useCallback(() => {
    if (typeof id === "string") dispatch(getClassById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!authList) router.push("/login");
    if (id) fetchGetClassById();
  }, [fetchGetClassById, authList, id]);

  const { classList } = useAppSelector((rootReducer) => rootReducer.classes);
  const { moduleList } = useAppSelector((rootReducer) => rootReducer.modules);

  return (
    <div className={styles.all}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.sidebarmobile}>
        <SideBarMobile />
      </div>
      <div className={styles.top}>
        <div className={styles.mid}>
          <h1 className={styles.classroom}>Classroom</h1>
          <VideoBox videourl={classList?.videoURL} />
          <CourseDetails
            title={classList?.name}
            description={classList?.content}
          />
        </div>
        <div className={styles.right}>
          {moduleList && (
            <UnitsBox
              title={moduleList?.name}
              themes={moduleList?.classes}
              classId={classList?._id}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default ClassRoom;
