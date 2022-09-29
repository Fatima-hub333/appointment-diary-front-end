import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'vehicle 1',
    description: 'This is a description for vehicle 1',
    image: 'https://images.unsplash.com/photo-1610553556003-9b2ae8ef1b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: '$900',
  },
  {
    id: 2,
    name: 'vehicle 2',
    description: 'This is a description for vehicle 2',
    image: 'https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: '$600',
  },
  {
    id: 3,
    name: 'vehicle 3',
    description: 'This is a description for vehicle 3',
    image: 'https://images.unsplash.com/photo-1609316696815-29de8998f96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: '$1000',
  },
  {
    id: 4,
    name: 'vehicle 4',
    description: 'This is a description for vehicle 4',
    image: 'https://images.unsplash.com/photo-1626840362735-afb64615318d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: '$500',
  },
];

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducusers: {
    addVehicle(state, action) {
      state.push(action.payload);
    },
  },
});

export const { allVehicle, addVehicle, deleteVehicle } = vehicleSlice.actions;

export default vehicleSlice.reducer;
