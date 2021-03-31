// import App from 'next/app'
import React, {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register("/sw.js")
        .then(ready => console.log('ServiceWorker with scope:', ready.scope))
        .catch(error => console.log('ServiceWorker failed: ', error.message));
    }else {
      console.log('Service worker is not supported');
    }
    return () => {
      if('serviceWorker' in navigator){
        navigator.serviceWorker.ready.then(registration => registration.unregister());
      }
    }
  },[]);

  return <Component {...pageProps} />
}



export default MyApp