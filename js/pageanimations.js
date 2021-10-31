import barba from '/node_modules/@barba/core';
import anime from '/node_modules/animejs/lib/anime.es.js';

// barba.init({
//   // ...
// });

anime({
  targets: 'div',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
});

console.log("helloooooo");
