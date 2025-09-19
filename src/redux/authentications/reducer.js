const initialState = {
  Email: null,
  Password: null,
  IsLoggedIn: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "email":
      return { ...state, Email: action.payload };
    case "password":
      return { ...state, Password: action.payload };
    case "isLoggedIn":
      return { ...state, IsLoggedIn: action.payload };
    default:
      return state;
  }
}