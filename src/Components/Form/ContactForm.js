import { useForm } from "../Hooks/useForm";
import Loader from "react-loader-spinner";
import {Form, Input, Button, Err, Title} from "./CFStyle.jsx"

const initialForm = { name: "", email: "", phone: "", email2: "" };
const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

  if (!form.name.trim()) {
    errors.name = "You must enter a name";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The name field only accepts letters and blanks";
  }

  if (!form.email.trim()) {
    errors.email = "You must enter an email address";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "It must be a valid email";
  }

  if (!form.email2.trim()) {
    errors.email2 = "You must enter an email address";
  }
  else if (form.email !== form.email2) {
    errors.email2 = "The emails must match";
  } else if (!regexEmail.test(form.email2.trim())) {
    errors.email2 = "It must be a valid email";
  }

  if (!form.phone.trim()) {
    errors.phone = "you must enter a phone number";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "You must enter a 10 digit number";
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <Title>Contact Information</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Write your name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <Err>{errors.name}</Err>}
        <Input
          type="email"
          name="email"
          placeholder="Write your email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email&& <Err>{errors.email}</Err>}

        <Input
          type="email"
          name="email2"
          placeholder="Rewrite your email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email2}
          required
        />
        {errors.email2 && <Err>{errors.email2}</Err>}

        <Input
          type="phone"
          name="phone"
          placeholder="Write your phone"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.phone}
          required
        />
        {errors.phone && <Err>{errors.phone}</Err>}
        <Button type="submit" value="Enviar" />
      </Form>
      {loading && <Loader
        type="Circles"
        color="#256ce1"
        height={80}
        width={80}
        timeout={3000}
      
        />}
     
       
    </div>
  );
};

export default ContactForm;
