import React from "react";
import styles from "../styles/NewsletterSection.module.css";
import Swal from "sweetalert2";

function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "¡Gracias por suscribirte!",
      text: "Recibirás nuestro newsletter lleno de contenido exclusivo y consejos prácticos en tu correo electrónico.",
      confirmButtonColor: "#D39245",
      timer: 1000,
      timerProgressBar: true,
    });
    e.currentTarget.reset();
  };

  return (
    <div className={styles.container__NewsletterSection}>
      <section className={styles.logo__newsletter}>
        <img src="https://i.ibb.co/Ct71D8d/Vector.png" alt="vector" />
      </section>
      <section className={styles.contenido__newsletter}>
        <h1>Recibe nuestras noticias</h1>
        <p>
          Descubre nuevas formas de aprender y mejorar con nuestro <br />
          newsletter lleno de contenido exclusivo y consejos prácticos.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
          <button type="submit">
            <img src="https://i.ibb.co/z8rdpLs/send-2.png" alt="Enviar" />
          </button>
        </form>
      </section>
    </div>
  );
}

export default NewsletterSection;
