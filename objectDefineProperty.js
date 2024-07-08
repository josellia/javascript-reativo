const place = {
  _name: 'Belo Horizonte',
};

Object.defineProperty(place, 'name', {
  get: function () {
    console.log(`Getting property name`);
    return this._name;
  },
  set: function (value) {
    console.log(`Setting property name to ${value}`);
    this._name = value;
  },
});

console.log(place.name);
place.name = 'Ouro Preto';
