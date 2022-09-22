export default function reducer(state = {
  visible: [],
  all: [],
  current: {
    id: 1,
    price: 1,
    name: 'Audi',
    image: 'https://i.ytimg.com/vi/mVptBDTYoLQ/maxresdefault.jpg',
    visible: true,
  },
}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
