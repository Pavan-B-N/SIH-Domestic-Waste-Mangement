import axios from "axios";
const axios_client=axios.create({baseURL:"http://localhost:3030/"})
export default axios_client;