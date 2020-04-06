import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

interface Entrada {
  titulo: string;
}

const Cabezera = (props: Entrada) => {
  useEffect(() => {
    var notification = null;

    if (!('Notification' in window)) {
      alert('Su navegador no soporta la API de Notificaciones :(');
      return;
    } else if (Notification.permission === 'granted') {
      notification = new Notification('Tienes permisos');
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === 'granted') {
          notification = new Notification('Es posible que tengas permisos');
        }
      });
    }
  });

  return (
    <Helmet>
      <title>{props.titulo}</title>
      <link rel='apple-touch-icon' href='/virus.png' />
      <link rel='icon' href='/virus.png' />
      <link href='https://fonts.googleapis.com/css2?family=Amaranth&display=swap' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap' rel='stylesheet'></link>
      <script src='https://cdn.jsdelivr.net/npm/chart.js@2.8.0'></script>
    </Helmet>
  );
};
export default Cabezera;
