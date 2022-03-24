/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51Kg8rjGyJs3D9eOAR5AobWM5I8ERI7ijpzWIH7Al33eJHxTEiRX0RYQBzRv6WRY7QTINIr8brccGStAfaWZHWJkJ00A9qQttpL');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
