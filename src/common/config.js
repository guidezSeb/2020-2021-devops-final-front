export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://whispering-forest-11533.herokuapp.com/api"
    : "http://localhost:2020/api";
export default API_URL;
