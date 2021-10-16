import axios from 'axios';

export async function fetchImages(searching, page) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?key=23884807-3582a3d87163efa52c00484da&q=${searching}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`,
    });
    return response.data;
  } catch (error) {
    console.log(`error: `, error);
  }
}