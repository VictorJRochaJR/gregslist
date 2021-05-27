export default class House {
    constructor({ id, bathrooms, bedrooms, levels, year, price, description, imgUrl }) {
        this.id = id
        this.bathrooms = bathrooms
        this.bedrooms = bedrooms
        this.levels = levels
        this.year = year
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
    }
    get cardTemplate() {
        return /*html */`
        <div class="col-lg-4 listing my-3">
        <div class="card">  
          <img src="${this.imgUrl}" height="250" /> 
          
          <div class="card-body">
              <p>
                  <b>Bedrooms: ${this.bedrooms} Floors: ${this.levels}</b>
              </p>
              <p>
                  <em>$${this.price.toFixed(2)}</em>
              </p>

                <button class="btn btn-warning btn-block" >EDIT HOUSE</button>
               <button class="btn btn-danger btn-block" >DELETE HOUSE</button>
          </div>
        </div>
        </div>
        `
    }
}