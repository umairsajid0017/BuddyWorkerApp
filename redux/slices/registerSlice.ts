import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegisterState {
    name:string
  email: string;
  phone:string
  password: string;
  errorMessage: {
    email:'',
    phone:''
  }
}

const initialState: RegisterState = {
    name:'',
  email: '',
  phone:'',
  password: '',
  errorMessage:{
    email:'',
    phone:''
  },
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
        state.name = action.payload;
      },
    
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
        state.phone = action.payload;
      },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    resetForm(state) {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.password = '';
      state.errorMessage = {
         email:'',
    phone:''
      };
    },
  },
});

export const {setName,setPhone, setEmail, setPassword, setErrorMessage, resetForm } = registerSlice.actions;
export default registerSlice.reducer;
