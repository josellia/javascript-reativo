const dogs = [
  {
    id: 'dog-1',
    name: 'Poodle',
    temperament: [
      'Intelligent',
      'Active',
      'Alert',
      'Faithful',
      'Trainable',
      'Instinctual',
    ],
  },
  {
    id: 'dog-2',
    name: 'Bernese Mountain Dog',
    temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
  },
  {
    id: 'dog-3',
    name: 'Labrador Retriever',
    temperament: [
      'Intelligent',
      'Even Tempered',
      'Kind',
      'Agile',
      'Outgoing',
      'Trusting',
      'Gentle',
    ],
  },
];

export default function methodOfArray() {
  const findDog = dogs.find((dog) => dog.name === 'Labrador Retriever');
  const someDog = dogs.some((dog) => dog.temperament.includes('lazy'));
  const everyDog = dogs.every((dog) => dog.temperament.includes('Intelligent'));
  const mapDog = dogs.map((dog) => dog.name);
  const filterDog = dogs.map((dog) => dog.temperament.includes('Faithful'));

  console.log({ findDog, someDog, everyDog, mapDog, filterDog });
}
methodOfArray();
