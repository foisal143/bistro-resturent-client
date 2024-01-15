import Cover from '../../sharedPages/Cover/Cover';
import contactImage from '../../../assets/contact/banner.jpg';
import OurLocation from '../OurLocation/OurLocation';
import ContactForm from '../ContactForm/ContactForm';
const ContactPage = () => {
  return (
    <section>
      <Cover
        img={contactImage}
        title="CONTACT US"
        details="Would you like to try a dish?"
      ></Cover>
      <OurLocation />
      <ContactForm />
    </section>
  );
};

export default ContactPage;
