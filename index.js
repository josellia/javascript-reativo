import './style.css';
import './methodsOfArray.js';
import './patternObserver.js';
import './reactiveObjectProperties.js';
import './objectDefineProperty.js';
import './reativePromisses.js';
import Observable from './observablePadraoRxJs.js';
import { createSignal, createEffect } from './patternSolid.js';

const places = [
  {
    id: 1,
    title: 'Plaza Mayor',
    rating: 9,
    img: 'https://tecolotito.elsiglodetorreon.com.mx/i/2022/02/1527961.jpeg',
    description: 'Prédio comercial com vários restaurantes.',
    favorite: false,
  },
  {
    id: 2,
    title: 'Museu Arocena',
    rating: 8,
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ab/b0/32/museo-arocena.jpg?w=1200&h=1200&s=1',
    description: 'Objetos históricos.',
    favorite: false,
  },
];
const observable = new Observable((observer) => {
  observer.next(places);
  observer.next(2);
  observer.complete();

  return () => {
    console.log('Observer unsubcribed');
  };
});

const observer = {
  next: (value) => console.log('Value', value),
  error: (err) => console.log('Error', err),
  complete: () => console.log('completed'),
};

const subscription = observable.subscribe(observer);
subscription.unsubscribe();

// PATTERN SOLID
const [place, setPlace] = createSignal([]);

createEffect(() => {
  console.log(place());
}, []);

setPlace(places);

// ANIMATION
const el = document.querySelector('.list');

const animation = el.animate(
  [
    {
      transform: 'scale(1)',
      backgroundColor: 'orange',
      left: '50px',
      top: '250px',
    },
    {
      transform: 'scale(1.5)',
      backgroundColor: 'purple',
      left: '200px',
      top: '200px',
    },
  ],
  {
    duration: 1000,
    fill: 'forwards',
  }
);

animation.playbackRate = 0;

el.addEventListener('click', () => {
  if (animation.playbackRate === 0) {
    animation.playbackRate = 1;
  } else {
    animation.reverse();
  }
});
