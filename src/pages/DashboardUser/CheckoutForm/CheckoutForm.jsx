import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import useCarts from '../../../hooks/useCarts';
import { useContext, useEffect, useState } from 'react';
import useAxiosWithAuth from '../../../hooks/axiosSciure';
import { AuthContext } from '../../../AuthPorvaider/AuthProvaider';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const axiosSciure = useAxiosWithAuth();
  const [procesing, setProcesing] = useState(false);
  const [carts, refetch] = useCarts();
  const [secretKey, setSecretKey] = useState('');
  const total = carts.reduce((acu, value) => acu + value.price, 0);
  const price = parseFloat(total.toFixed(2));

  useEffect(() => {
    axiosSciure.post('/payment-post-api', { price }).then(res => {
      const sckey = res.data.clientSecret;
      setSecretKey(sckey);
    });
  }, [axiosSciure, price]);

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      toast.error('stripe or elements not found');
      console.log('stripe not found');
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      toast.error('card not fuound');
      return;
    }
    setProcesing(true);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(secretKey, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'unknown',
            email: user?.email || 'unknown',
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      setProcesing(false);
    }
    if (paymentIntent.status === 'succeeded') {
      const payment = {
        email: user?.email,
        date: new Date(),
        tranjactionId: paymentIntent.id,
        quentity: carts.length,
        price,
        cartsId: carts.map(item => item._id),
        menuId: carts.map(item => item.cartId),
        names: carts.map(item => item.name),
      };
      axiosSciure.post('/payments', payment).then(res => {
        console.log(res.data);
        if (res.data.insertedResult.insertedId) {
          toast.success('payment success');
        }
        if (res.data.deletedResult.deletedCount > 0) {
          refetch();
        }
      });
      setProcesing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        className="btn btn-primary w-full mt-5"
        type="submit"
        disabled={!stripe || !secretKey || procesing}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
