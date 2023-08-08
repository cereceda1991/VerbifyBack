import React, { useCallback, useEffect, useState } from "react";
import {
  BiCaretUp,
  BiLock,
  BiCaretRightCircle,
  BiCheckCircle,
  BiHappyHeartEyes,
  BiCaretDown,
} from "react-icons/bi";
import styles from "../styles/myprogress.module.css";
import axios from "axios";
import CardClasses from "./CardClasses";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getAllCoursesWithModulesAndClasses,
  getCourses,
} from "@/actions/coursesActions";
import { useRouter } from "next/router";

interface Section {
  id: string;
  title: string;
  numModules: number;
  numCompletedModules: number;
  Module: string[];
}

interface ModuleData {
  _id: string;
  name: string;
  classes: string[];
  subtitle: string;
}

interface Course {
  id: string;
  name: string;
  isPublic: boolean;
}

function MyProgressSection(props: Section & { Module: string[] }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [moduleData, setModuleData] = useState<ModuleData[]>([]);
  const [isCollapsedModule, setisCollapsedModule] = useState(false);

  //Codigo para mostrar lista de cursos

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

  const { coursesList } = useAppSelector((rootReducer) => rootReducer.courses);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleCollapseModules = () => {
    setisCollapsedModule(!isCollapsedModule);
  };

  useEffect(() => {
    const fetchData = async () => {
      const promises = props.Module.map((moduleId: string) =>
        axios.get(`https://verbify.onrender.com/api/modules/${moduleId}`)
      );
      const results = await Promise.all(promises);
      const modules = results.map((res) => res.data);
      setModuleData(modules);
    };
    fetchData();
  }, []);

  return (
    <section>
      <div
        className={`${styles.container__section} ${
          isCollapsed ? styles.collapsed : ""
        }`}
      >
        <p>{props.title}</p>
        <button onClick={toggleCollapse}>
          {isCollapsed ? (
            <div className={styles.cardCourse__Count}>
              <h5>
                {props.numCompletedModules}/{props.numModules}
              </h5>
              <BiCaretUp />
            </div>
          ) : (
            <BiLock />
          )}
        </button>
      </div>
      <div className={styles.container__course}>
        {isCollapsed &&
          moduleData?.map((module) => (
            <div key={module?._id}>
              <div className={styles.container_classes}>
                <div>
                  <button className={styles.button_BiHappy}>
                    <BiHappyHeartEyes
                      style={{ background: "#F1DDC5", borderRadius: 10 }}
                    />
                  </button>
                  <h3>{module?.name}</h3>
                </div>
                <div>
                  <button>
                    <Link
                      href={`/classroom/${module?.classes[0]}`}
                      style={{ color: "#2AEF4A" }}
                    >
                      <BiCaretRightCircle />
                    </Link>
                  </button>
                  <button>
                    <BiCheckCircle style={{ color: "#2AEF4A" }} />
                  </button>

                  <button onClick={toggleCollapseModules}>
                    {isCollapsedModule ? <BiCaretDown /> : <BiCaretUp />}
                  </button>
                </div>
              </div>
              <div className={styles.subtitle_class}>
                <p>{module?.subtitle}</p>
                <h4>0/{module?.classes?.length}</h4>
              </div>
              <div>
                <hr className={styles.line_Heigth} />
              </div>
              <div className={styles.container_class}>
                <CardClasses
                  id={module?._id}
                  classes={module?.classes}
                  isCollapsedModule={isCollapsedModule}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default MyProgressSection;
