import Axios from "axios";

const instance = Axios.create({
	baseURL: "https://www.chickeera.com/backend/api/consumer",
});

export default instance;
