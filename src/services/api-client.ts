import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '7bc84a7de1284c60a556d7e2c0620e14'
    }
})