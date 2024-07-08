const handler = {
  get: function (target, property) {
    console.log(`Getting property ${property}`);
    return target[property];
  },
  set: function (target, property, value) {
    console.log(`Setting property ${property} to ${value}`);
    target[property] = value;
    return true;
  },
};

const place = {
  name: 'Rio',
  toppings: ['Cristo Redentor', 'Apoador', 'Praia da Barra', 'Corcovado'],
};
const proxiedPlace = new Proxy(place, handler);

console.log(proxiedPlace.name);
proxiedPlace.name = 'Rio de Janeiro';
