if (navigator.serviceWorker) {
 navigator.serviceWorker.register(
  //aca la ruta del service worker
  '/sw.js'
 )
}

//esto de aca en adelante no lo vamos a tocar mas a menos que instalemos otro service worker