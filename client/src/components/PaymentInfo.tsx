import React from "react";
import Verbify from "../assets/Verbify.png";
import styles from "@/styles/PaymentInfo.module.css";
import PaymentForm from "./PaymentForm";
import Link from "next/link";

type Props = {
  plan: string;
  price: number;
  id?: number;
  handleClickConfirm: () => void;
};

function PaymentInfo(props: Props) {
  const { plan, price, handleClickConfirm } = props;

  return (
    <main className={styles.main}>
      <div>
        <div>
          <div className={styles.top}>
            <p>1. Información del pago</p>
            <Link href={"/home"}>
              <img src={Verbify.src} alt="Verbify logo" />
            </Link>
          </div>
          <hr />
        </div>
        <div className={styles.mid}>
          <span>
            <p>Verifica tu información y haz click en Realizar pago</p>
          </span>
          <PaymentForm />
          <div>
            <h4>Resumen</h4>
            <div>
              <p>Producto</p>
              <p>{plan}</p>
            </div>
          </div>
          <hr />
        </div>
        <div className={styles.middle}>
          <span>
            <p>Precio</p>
            <p>{"$" + price + ".00"}</p>
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Paso 1 de 2</p>
        <button onClick={handleClickConfirm}>Realizar pago</button>
        <div>
          <div>
            <input type="checkbox" />
            <p>Acepto recibir notificaciones a mi correo</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Acepto términos y condiciones</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PaymentInfo;
