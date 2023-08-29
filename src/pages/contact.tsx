import "../styles.css";
import { ContactForm } from "../components/ContactForm";

export function Contact() {
  return (
    <>
      <h1 className="contact-form-header">We would appreciate any feedback!</h1>
      <ContactForm></ContactForm>
    </>
  );
}
