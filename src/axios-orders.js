import axios from 'axios';
 
const instance =axios.create({
     baseURL:'https://react-my-burger-d2f09.firebaseio.com/'
 });

 export default instance;