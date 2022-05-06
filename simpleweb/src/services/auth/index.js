import axios from 'axios';
import { getUrl } from '../../api';
export const postUserRegistration = async (userRequest) => {
    debugger
  const base_url = getUrl('/brand/register');
  const response= await axios.post(base_url, userRequest)
  return response 
};
