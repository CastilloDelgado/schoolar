const initialState = {
  fetching: false,
  fetched: false,
  lista: null,
  error: null,
  meta: null,
  links: null,
  aviso_para_actualizar: null,
};

export default function avisos(state = initialState, action) {
  switch (action.type) {
    case "FETCH_AVISOS_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case "FETCH_AVISOS_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };

    case "FETCH_AVISOS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        lista: action.payload.data.data,
        links: action.payload.data.links,
        meta: action.payload.data.meta,
      };
    }

    case "POST_AVISO_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case "POST_AVISO_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload.response.data,
      };

    case "POST_AVISO_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        result: action.payload.status,
      };

    case "ACTUALIZAR_AVISO":
      return {
        ...state,
        aviso_para_actualizar: action.payload,
        fetched: false,
      };

    case "PATCH_AVISO_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case "PATCH_AVISO_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload.response.data,
      };
    case "PATCH_AVISO_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        result: action.payload.status,
      };

    case "DELETE_AVISO_PENDING":
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case "DELETE_AVISO_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload,
      };

    case "DELETE_AVISO_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
      };

    default:
      return { ...state };
  }
}
