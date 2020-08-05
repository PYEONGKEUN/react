export const initState = {
    isLogin : false,
    userName: "",
}
const userReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGIN_SUCCESS":
            return{
                ...state,
                isLogin: true,
                userName: action.payload.userName,
            };
            default:
                return state;
    }
}

export default userReducer;