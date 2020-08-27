const initialState = {
  fetching: false,
  fetched: false,
  lista: null,
  error: null,
  meta: null,
  links: null,
  alumno_para_actualizar: null,
};

export default function alumnos(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALUMNOS_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case "FETCH_ALUMNOS_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };

    case "FETCH_ALUMNOS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        lista: action.payload.data.data,
        links: action.payload.data.links,
        meta: action.payload.data.meta,
      };
    }

    case "POST_ALUMNO_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case "POST_ALUMNO_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload.response.data,
      };

    case "POST_ALUMNO_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        result: action.payload.status,
      };
      
    case "ACTUALIZAR_ALUMNO":
      return {
        ...state,
        alumno_para_actualizar: action.payload,
        fetched: false,
      };

    case "PATCH_ALUMNO_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case "PATCH_ALUMNO_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload.response.data,
      };
    case "PATCH_ALUMNO_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        result: action.payload.status,
      };

    case "DELETE_ALUMNO_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case "DELETE_ALUMNO_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload,
      };

    case "DELETE_ALUMNO_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
      };

    default:
      return { ...state };
  }
}
