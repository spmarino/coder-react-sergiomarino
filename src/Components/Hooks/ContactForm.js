import { useForm } from "./useForm";
const initialForm = { name: "", email: "", phone: "", email2: "" };
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

  if (!form.name.trim()) {
    errors.name = "El campo nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo nombre solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Debe ser un email valido";
  }

  if (!form.email2.trim()) {
    errors.email2 = "El campo email es requerido";
  }
  if (form.email !== form.email2) {
    errors.email2 = "Las contraseñas deben coincidir";
  } else if (!regexEmail.test(form.email2.trim())) {
    errors.email2 = "Debe ser un email valido";
  }

  if (!form.phone.trim()) {
    errors.phone2 = "El campo phone es requerido";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "Debe ser un telefono valido";
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Formulario de Contacto</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.name && <p>{errors.email}</p>}

        <input
          type="email"
          name="email2"
          placeholder="Reingrese su email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email2}
          required
        />
        {errors.name && <p>{errors.email2}</p>}

        <input
          type="phone"
          name="phone"
          placeholder="Escribe tu telefono"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.phone}
          required
        />
        {errors.name && <p>{errors.phone}</p>}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
