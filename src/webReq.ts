import axios = require("axios");
import type { AxiosResponse } from "axios";

interface WebReq {
    username: string;
    age: number;
    followers: number;
    id: string;
    image?: string;
}

const fetchData = async (url: string) => {
    try {
        const response: AxiosResponse<WebReq[]> = await axios.get(url);
        const data: WebReq[] = response.data;
        // data.forEach((user) => {
        //     console.log(`Username: ${user.username}`);
        // });
     console.log(data[0]?.username);

    } catch (error : any) {
       if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
       } else {
        console.error("Unexpected error:", error);
       }
    }
};

const url = "http://localhost:3000/users";

fetchData(url);