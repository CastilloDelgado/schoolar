const initialState = {
    fetching: false,
    fetched: false,
    lista: null,
    error: null,
    meta: null,
    links: null,
    maestro_para_actualizar: null,
  };
  
  export default function maestros(state = initialState, action) {
    switch (action.type) {
      case "FETCH_MAESTROS_PENDING":
        return {
          ...state,
          fetching: true,
          fetched: false,
        };
  
      case "FETCH_MAESTROS_REJECTED":
        return {
          ...state,
          fetching: false,
          fetched: false,
          error: action.payload,
        };
  
      case "FETCH_MAESTROS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          lista: action.payload.data.data,
          links: action.payload.data.links,
          meta: action.payload.data.meta,
        };
      }
  
      case "POST_MAESTRO_PENDING":
        return {
          ...state,
          fetching: true,
          fetched: false,
        };
  
      case "POST_MAESTRO_REJECTED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload.response.data,
        };
  
      case "POST_MAESTRO_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          result: action.payload.status,
        };
        
      case "ACTUALIZAR_MAESTRO":
        return {
          ...state,
          maestro_para_actualizar: action.payload,
          fetched: false,
        };
  
      case "PATCH_MAESTRO_PENDING":
        return {
          ...state,
          fetching: true,
          fetched: false,
        };
  
      case "PATCH_MAESTRO_REJECTED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload.response.data,
        };
      case "PATCH_MAESTRO_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          result: action.payload.status,
        };
  
      case "DELETE_MAESTRO_PENDING":
        return {
          ...state,
          fetching: true,
          fetched: false,
        };
  
      case "DELETE_MAESTRO_REJECTED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload,
        };
  
      case "DELETE_MAESTRO_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
        };
  
      default:
        return { ...state };
    }
  }
  