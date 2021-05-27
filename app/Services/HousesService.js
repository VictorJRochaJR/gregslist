import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"

let url = `https://bcw-sandbox.herokuapp.com/api/houses/`


class HousesService {
    constructor() {
        console.log("houseservice")

    }
    async getHouses() {
        let res = await axios.get(url)
        console.log(res.data)
        ProxyState.houses = res.data.map(h => new House(h))
        console.log(ProxyState.houses)
    }

    async addHouse(formData) {
        let res = await axios.post(url, formData)
        let newHouse = new House(res.data)
        ProxyState.house = [...newHouse, ProxyState.house]
    }
}


export const housesService = new HousesService()
