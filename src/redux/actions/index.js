export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_MUSIC_DATA = "GET_MUSIC_DATA ";
export const GET_MS_LOADING = "GET_MS_LOADING";
export const GET_MS_ERROR = "GET_MS_ERROR";

export const addToFavourite = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data,
  };
};

export const removeFromFavourite = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: i,
  };
};

export const getMusicData = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_MUSIC_DATA,
          payload: data,
        });
        dispatch({
          type: GET_MS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_MS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_MS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_MS_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_MS_ERROR,
        payload: true,
      });
    }
  };
};
