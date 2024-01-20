import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PayPage = () => {
  const stripePromise = loadStripe(`${import.meta.env.VITE_PUBLISABLE_KEY}`);

  return (
    <div className="w-full h-full bg-slate-100 pt-12 px-5">
      <SectionTitle heading="Payment " subHeading="Pay Now" />
      <div className="mt-20 lg:w-1/2 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default PayPage;
