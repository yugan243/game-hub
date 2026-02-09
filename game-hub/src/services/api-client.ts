import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'e97a1bc987ea4ede9b4c81b704e00a1d' 
    }

})