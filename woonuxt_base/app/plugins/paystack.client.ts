// plugins/paystack.client.ts

import PaystackPop from '@paystack/inline-js';

export default defineNuxtPlugin(() => {
  const paystack = new PaystackPop();

  return {
    provide: {
      paystack: paystack,
    },
  };
});