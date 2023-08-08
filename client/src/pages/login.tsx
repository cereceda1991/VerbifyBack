// Importaciónes Next.js
import Link from "next/link";
import { useRouter } from "next/router";

// Importación de estilos CSS
import styles from "@/styles/Login.module.css";

// Importaciónes de React y Hooks
import React, { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

// Importaciones de Redux Toolkit
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signInUser } from "@/actions/authActions";

// Importación de una imagenes
import Verbify from "../assets/Verbify.png";
import Chat from "../assets/chat.png";

// Importación de iconos de la librería react-icons
import { FcGoogle } from "react-icons/fc";
import { BiLowVision, BiShow } from "react-icons/bi";

interface Inputs {
  email: string;
  password: string;
}
interface LoginData {
  email: string;
  password: string;
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState<Inputs>({ email: "", password: "" });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useRouter();

  const { authList, authToken } = useAppSelector(
    (rootReducer) => rootReducer.auth
  );

  useEffect(() => {
    if (authList && authToken) {
      navigate.push("/home");
    }
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useAppDispatch();

  const fetchLogIn = useCallback(
    (data: LoginData) => {
      dispatch(signInUser({ email: data.email, password: data.password }));
    },
    [dispatch]
  );

  const onSubmit = (data: Inputs) => {
    fetchLogIn(data);
  };

  return (
    <main className={styles.main}>
      <Link href={"/"}>
        <img className={styles.logo_outside} src={Verbify.src} />
      </Link>
      <img className={styles.chat} src={Chat.src} />
      <section className={styles.section}>
        <div>
          <Link href={"/"}>
            <img src={Verbify.src} />
          </Link>

          <p>Iniciar sesión para ver más contenido</p>
        </div>
        <form
          method="post"
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.errors_container}>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Correo electrónico requerido" }}
              render={({ field }) => (
                <input
                  type="email"
                  {...field}
                  placeholder="Correo electrónico"
                />
              )}
            />
            {errors.email && (
              <span className={styles.text_errors}>{errors.email.message}</span>
            )}
          </div>
          <div className={styles.errors_container}>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Contraseña requerida" }}
              render={({ field }) => (
                <div className={styles.password_input_container}>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...field}
                    placeholder="Contraseña"
                  />
                  <div className={styles.showpassword_container}>
                    <button type="button" onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <BiLowVision size={28} />
                      ) : (
                        <BiShow size={28} />
                      )}
                    </button>
                  </div>
                </div>
              )}
            />
            {errors.password && (
              <span className={styles.text_errors}>
                {errors.password.message}
              </span>
            )}
          </div>
          <Link className={styles.link_forget} href="/">
            ¿Has olvidado tu contraseña?
          </Link>
          <button type="submit" className={styles.button_sesion}>
            Iniciar sesión
          </button>
        </form>
        <div className={styles.container_line}>
          <span />
          <p>O</p>
          <span />
        </div>
        <button className={styles.button_google}>
          <FcGoogle size={28} />
          Iniciar sesión con Google
        </button>
        <div className={styles.link_footer}>
          ¿No tienes una cuenta?
          <Link className={styles.link} href="/register">
            Regístrate
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Login;
