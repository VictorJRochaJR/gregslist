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
        let form = event.target
        let formData = {
            bathrooms: form.bathrooms.value,
            bedrooms: form.bedrooms.value,
            year: form.year.value,
            price: form.price.value,
            imgUrl: form.imgUrl.value,
        }
        if (form.houseId.value) {
            formData.id = form.houseId.value
            housesService.updateHouse(formData)
        } else {
            housesService.addHouse(formData)
        }
        form.reset()
        this.toggleForm()
    } catch(e) {
        console.error(e.message)
    }
    toggleForm() {
        document.getElementById("house-form").classList.toggle("d-none")
    }
}



