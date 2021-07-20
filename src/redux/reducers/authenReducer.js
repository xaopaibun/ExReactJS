import { AuthenType } from "../../constants";

const initialState = {

};

export default function AuthenReducer(state = initialState, action) {
    switch (action.type) {

        case AuthenType.LOGIN_REQUEST:
            console.log('da an nut login')
            return state;

        case AuthenType.LOGIN_ADMIN:
            return state;

        case AuthenType.SET_TOKEN:
            console.log(action.payload)
            return { ...state, token: action.payload }

        default:
            return state;
    }
}