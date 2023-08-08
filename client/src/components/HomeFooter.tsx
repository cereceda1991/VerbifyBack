import styles from "../styles/HomeFooter.module.css";
import Swal from "sweetalert2";

function HomeFooter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "¡Gracias por suscribirte!",
      text: "Recibirás nuestro newsletter lleno de contenido exclusivo y consejos prácticos en tu correo electrónico.",
      confirmButtonColor: "#D39245",
      timer: 3000,
      timerProgressBar: true,
    });
    e.currentTarget.reset();
  };

  return (
    <div className={styles.container}>
      <div>
        <nav>
          <ul className={styles.first_ul}>
            <li>
              <h4>Compañía</h4>
            </li>
            <li>Acerca de Nosotros</li>
            <li>Por Qué Elegirnos</li>
            <li>Precios</li>
            <li>Testimonios</li>
          </ul>
          <ul>
            <li>
              <h4>Recursos</h4>
            </li>
            <li>Política de Privacidad</li>
            <li>Términos y Condiciones</li>
            <li>Blog</li>
            <li>Contáctanos</li>
          </ul>
          <ul>
            <li>
              <h4>Producto</h4>
            </li>
            <li>Gestión de Proyectos</li>
            <li>Seguimiento de Tiempo</li>
            <li>Programación de Tiempo</li>
            <li>Generación de Prospectos</li>
            <li>Colaboración Remota</li>
          </ul>
          <ul>
            <li>
              <section className={styles.suscribe}>
                <p>Verbify</p>
                <h5>Suscríbete a nuestro boletín</h5>
                <form onSubmit={handleSubmit}>
                  <input
                    placeholder="Ingresa tu correo"
                    type="email"
                    name="email"
                    required
                  />
                  <button type="submit">Suscribirse</button>
                </form>
              </section>
            </li>
          </ul>
        </nav>
        <section className={styles.logo_verbify}>
          <hr className={styles.linea} />
          <img src="https://i.ibb.co/TLQS9cS/Verbify-logo.png" />
          <hr className={styles.linea} />
        </section>
      </div>
    </div>
  );
}

export default HomeFooter;
