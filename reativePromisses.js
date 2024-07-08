export default class AsyncData {
  constructor(initialData) {
    this.data = initialData;
    this.subscribers = [];
  }

  subscribe(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }
    this.subscribers.push(callback);
  }

  async set(key, value) {
    this.data[key] = value;

    const updates = this.subscribers.map(async (callback) => {
      await callback(key, value);
    });

    await Promise.allSettled(updates);
  }
}
// A classe irá encapsula um objeto de dados e acionar a atualização quando eles forem alterados

const data = new AsyncData({ place: 'Minas Gerais' });

data.subscribe(async (key, value) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(`Update for ${key}: ${value}`);
});

async function upadateData() {
  await data.set('place', 'Mariana');

  console.log('Update all...');
}

upadateData();
