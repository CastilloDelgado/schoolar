const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  meta: null,
  infoCorto: null,
  infoLargo: null,
  loggedIn: false,
};

export default function usuario(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case "LOGIN_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload,
      };

    case "LOGIN_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        infoCorto: action.payload.data.data,
        loggedIn: true,
      };

    case "LOGOUT":
      return initialState
    default:
      return state;
  }
}
