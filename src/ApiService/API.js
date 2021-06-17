import axios from 'axios'
class API{
    baseurl = "http://localhost:8000"
    async postAPI(url,data){
        let endpoint =this.baseurl+url
        return await axios.post(endpoint,data) 
    }

    async getAPI(url){
        let endpoint =this.baseurl+url
        return await axios.get(url)
    }


    async deleteAPI(url,data){
        let endpoint =this.baseurl+url
        return await axios.delete(endpoint,data) 
    }

}
export default new API