import axios from 'axios';

export const GET_PHOTOS = 'get_photos';

export function getPhotos() {
  return (dispatch) => {
    axios.get('http://localhost:3000/photos')
      .then((response) => dispatch({ type: GET_PHOTOS, payload: response.data}));
  };
}
