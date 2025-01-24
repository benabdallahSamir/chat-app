import io from 'socket.io-client';
import {API_BASE_URL} from "./apiConstant"
const socket = io(API_BASE_URL , {withCredentials : true}); // Replace with your server URL



export default socket;