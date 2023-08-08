import React, { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import Homeconmembresia from "@/components/Homeconmembresia";
import Homesinmembresia from "@/components/Homesinmembresia";

function Home() {
  const router = useRouter();

  const { authList } = useAppSelector((rootReducer) => rootReducer.auth);

  useEffect(() => {
    if (!authList) router.push("/login");
  }, [authList]);

  return (
    <main>
      {" "}
      {authList?.isSuscribed ? <Homeconmembresia /> : <Homesinmembresia />}
    </main>
  );
}

export default Home;
