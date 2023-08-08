import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import styles from "@/styles/ClassRoom.module.css";

export default function ClassRoom() {
  const navigate = useRouter();
  
  useEffect(()=>{
    navigate.push("/classroom/643f669920ab7834dd652c54");
  }, []);

  return (
    <div className={styles.loading}>Cargando...</div>
  )
};
