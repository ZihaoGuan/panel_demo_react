import axios from 'axios';

export default axios.create({
  baseURL: `http://www.nekosaysmeow.cyou:4000/api/`
});