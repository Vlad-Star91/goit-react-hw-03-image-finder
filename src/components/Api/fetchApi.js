import axios from 'axios';


function GetImagesApi(q, page = 1) {
  return axios.get(
    `https://pixabay.com/api/?key=23477910-25b98db95ade589aa6935604b&q=${q}&page=${page}&per_page=12&image_type=photo`,
  );
}

export { GetImagesApi };