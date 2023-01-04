import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { IBody } from '../../../api/auth';
import { authApi, productApi } from '../../../api'

interface IInitialState {
    userInfo?: { 
        id?: number;
        name?: string;
        email?: string;
        unpaidCart? :any
    };
    token?: string;
}

const initialState = { 
    userInfo: {},
    token: '',
}

const login = createAsyncThunk(
    'auth/login',
    async (id:number , { rejectWithValue }) => {
        try {
            const res:any = await authApi.login(id);
            return res.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        logout(state, action) {
            state.userInfo = {}
            state.token = action.payload
        },
        addtoUnPaidCart(state: IInitialState, action) {
            state.userInfo!.unpaidCart = [...state.userInfo?.unpaidCart ,action.payload];
            console.log('addtoUnPaidCart Reducer: ',state.userInfo?.unpaidCart);
            productApi.addtoCart(state.userInfo);
        },
        removeUnPaidCart (state: IInitialState, action) {
            const same = state.userInfo?.unpaidCart.map((obj:any) => obj.id).indexOf(action.payload);
            console.log('remove from unpaid Cart');
            if(same !== -1) {
                state.userInfo?.unpaidCart.splice(same, 1);
                productApi.removeCart(state.userInfo);
            }
        },
        clearUnpaidCart(state:IInitialState,action) {
            state.userInfo!.unpaidCart = action.payload
            console.log('Clear !');
        }
    },

    extraReducers: (builder) => {
        builder.addCase(
            login.fulfilled,
            (state: IInitialState, action) => {
                const payload = action.payload;
                state.userInfo = payload;
                console.log('userInfo', state.userInfo);
                state.token = payload.token;
            }
        )
    }

})

export default authSlice.reducer;
export const { logout, addtoUnPaidCart, removeUnPaidCart, clearUnpaidCart } = authSlice.actions
export { login }