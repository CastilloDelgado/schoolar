const initialState = {
    fetching: false,
    fetched: false,
    lista: null,
    error: null,
    meta: null,
    links: null,
    admin_para_actualizar: null,
  };
  
  export default function admins(state = initialState, action) {
    switch (action.type) {
      case "FETCH_ADMINS_PENDING":
        return {
          ...state,
          fetching: true,
          fetched: false,
        };
  
      case "FETCH_ADMINS_REJECTED":
        return {
          ...state,
          fetching: false,
          fetched: false,
          error: action.payload,
        };
  
      case "FETCH_ADMINS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          lista: action.payload.data.data,
          links: action.payload.data.links,
          meta: action.payload.data.meta,
        };
      }
  
      case "POST_ADMIN_PENDING":
        return {
          ...state,
          fetching: true,
          fetched: false,
        };
  
      case "POST_ADMIN_REJECTED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload.response.data,
        };
  
      case "POST_ADMIN_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          result: action.payload.status,
        };
        
      case "ACTUALIZAR_ADMIN":
        return {
          ...state,
          admin_para_actualizar: action.payload,
          fetched: false,
        };
  
      case "PATCH_ADMIN_PENDING":
        return {
          ...state,
          fetching: true,
          fetched: false,
        };
  
      case "PATCH_ADMIN_REJECTED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload.response.data,
        };
      case "PATCH_ADMIN_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          result: action.payload.status,
        };
  
      case "DELETE_ADMIN_PENDING":
        return {
          ...state,
          fetching: true,
          fetched: false,
        };
  
      case "DELETE_ADMIN_REJECTED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload,
        };
  
      case "DELETE_ADMIN_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
        };
  
      default:
        return { ...state };
    }
  }
  