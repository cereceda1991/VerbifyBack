//Estilos CSS
import styles from "../styles/myprogress.module.css";

//Iconos
import { BiSearchAlt } from "react-icons/bi";

//Importacion de componentes
import SideBar from "@/components/SideBar";
import SideBarMobile from "@/components/SideBarMobile";
import MyProgressSection from "@/components/MyProgressSection";

//Importaciones de React
import { useEffect, useCallback } from "react";
//Redux
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getAllCoursesWithModulesAndClasses,
  getCourses,
} from "@/actions/coursesActions";
import { useRouter } from "next/router";

interface Course {
  id: string;
  _id: string;
  name: string;
  numModules: number;
  numCompletedModules: number;
  Module: [];
  title: string;
  isPublic: boolean;
  courseId: string;
}

interface CoursesList {
  coursesList: Course[];
}

function MyProgress() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { authList } = useAppSelector((rootReducer) => rootReducer.auth);
  const { allList } = useAppSelector((rootReducer) => rootReducer.courses);

  const fetchGetCourses = useCallback(() => {
    dispatch(getCourses());
    dispatch(getAllCoursesWithModulesAndClasses());
  }, [dispatch]);

  useEffect(() => {
    if (!authList) router.push("/login");
    fetchGetCourses();
  }, [fetchGetCourses]);

  const { coursesList } = useAppSelector(
    (rootReducer: { courses: CoursesList }) => rootReducer.courses
  );

  return (
    <div className={styles.container__mainmyprogress}>
      <div className={styles.container__sideBar}>
        <SideBar />
      </div>
      <div className={styles.container__sideBarmobile}>
        <SideBarMobile />
      </div>
      <div className={styles.container__myprogress}>
        <header>
          <h1>Mi progreso</h1>
          <form>
            <input></input>
            <button>
              <BiSearchAlt />
            </button>
          </form>
        </header>
        <div className={styles.container___sections}>
          {coursesList?.map((course) => (
            <MyProgressSection
              key={course?._id}
              id={course._id}
              title={course.name}
              numModules={course.Module.length}
              numCompletedModules={0}
              Module={course?.Module}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProgress;
