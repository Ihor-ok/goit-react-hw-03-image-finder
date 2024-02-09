import axios from "axios";

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// axios.defaults.baseURL = "<https://pixabay.com/api>";
const KEY = '35579810-55fc44ce50f1d75978380d9a0'

export const fetchImgWithQuery = async searchQuery => {
  const response = axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
  return response;
};

export default fetchImgWithQuery
