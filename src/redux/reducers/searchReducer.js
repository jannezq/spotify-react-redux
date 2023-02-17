import { GET_MUSIC_DATA, GET_MS_LOADING, GET_MS_ERROR } from "../actions";

const initialState = {
  songsData: [],
  isLoading: true,
  isError: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC_DATA:
      return {
        songs: action.payload,
      };

    case GET_MS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_MS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
