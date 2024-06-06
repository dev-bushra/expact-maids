import axios from "axios";


// make an 'instance' of axios
const instance = axios.create({
  baseURL: "http://localhost:4001/",
  // baseURL: "https://api.expatmaids.com/",
});


// set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.post["Content-Type"] = "application/json";
// instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";


// Also add/ configure interceptors && all the other cool stuff
instance.interceptors.request.use(
  (request) => {
    console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);


instance.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);


export default instance;