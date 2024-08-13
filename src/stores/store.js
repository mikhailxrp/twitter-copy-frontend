import { configureStore } from '@reduxjs/toolkit';
import mainStateSlice from './mainStateSlice';

export default configureStore({
  reducer: {
    mainState: mainStateSlice,
  },
});
