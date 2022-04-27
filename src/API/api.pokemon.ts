import axios from 'axios';
import { URL_BASE } from './constants';

export const API_POKEMON = async (params:string) => 
    await axios.get(`${URL_BASE}${params}`, {})
    .then((res:any) => res.data)
    .catch((err:any) => err)