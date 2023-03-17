export function ContactForm() {
  const d = document,
    $form = d.createElement("form");

  $form.innerHTML = `
<legend>Envíanos tus comentarios</legend>
  <input type="text" name="name" placeholder="Escribe tu nombre" title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$" required/>
  <input
      type="email"
      required
      placeholder="Escribe tu email"
      name="email"
      title="Email incorrecto" pattern="^[A-Za-z0-9]+(\.[A-Za-z0-9]+|-[A-Za-z0-9]+|_[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,15})$"/>
  <input type="text" name="subject" placeholder="Asunto a tratar" title="Escribe el asunto a tratar" required/>
  <textarea
      name="comments"
      cols="50"
      rows="5"
      placeholder="Escribe tus comentarios"
      data-pattern="^(\n|.){1,255}$"
      title="Tu comentario no debe exceder los 255 caracteres"
      required></textarea>
  <input type="submit" value="enviar" />
  <div class="contact-form-loader none">
      <img src="./assets/loader.svg" alt="cargando" />
  </div>
  <div class="contact-form-response none">
      <p>Los datos se han enviado</p>
  </div>
`;
}
