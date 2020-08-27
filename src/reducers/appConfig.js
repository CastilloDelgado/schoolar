const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  data: null,
};

export default function appConfig(state = initialState, action) {
  switch (action.type) {
    case "FETCH_APP_CONFIG_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null,
        data: null,
      };

    case "FETCH_APP_CONFIG_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        data: action.payload.data.data,
      };

    case "FETCH_APP_CONFIG_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: null,
        error: action.payload.data,
      };

    default:
      return {
        ...state,
      };
  }
}
