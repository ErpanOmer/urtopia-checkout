import {register} from "@shopify/web-pixels-extension";

register(({ configuration, analytics, browser }) => {
    // Bootstrap and insert pixel script tag here

    // Sample subscribe to page view
    analytics.subscribe('checkout_completed', (event) => {
      console.log('checkout_completed', event.data.checkout);
    });
});


