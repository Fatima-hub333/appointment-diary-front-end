/* eslint-disable no-dupe-keys */
export default function reducer(state = {
  visible: [],
  all: [],
  current: {
    id: 1, price: 1, name: 'Audi', image: 'https://i.ytimg.com/vi/L42-aFe8bMo/maxresdefault.jpg',
  },
  visible: true,
}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
