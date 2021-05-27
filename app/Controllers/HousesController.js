import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";

function drawHouses() {
    let template = ''
    ProxyState.houses.forEach(house => {
        template += house.cardTemplate
    })
    document.getElementById('listings').innerHTML = template
}
export class HousesController {
    constructor() {
        ProxyState.on('houses', drawHouses)
    }
    getHouses() {
        housesService.getHouses()
    }
    addHouse(event) {
        event.preventDefault()
        console.log(event)

    }

    toggleForm() {
        document.getElementById("house-form").classList.toggle("d-none")
    }
}
