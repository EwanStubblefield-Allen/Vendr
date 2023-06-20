export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get snackTemplate() {
    return /*HTML*/`
    <div class="col-4 d-flex justify-content-center p-3">
      <div class="card" style="width: 20rem;">
        <img class="card-img-top"
          src="${this.imgUrl}"
          alt="${this.name}">
        <div class="card-body p-2">
          <div class="d-flex justify-content-between">
            <div>
              <p class="card-text mb-0">${this.name}</p>
              <p class="card-text">$${this.price.toFixed(2)}</p>
            </div>
            <button id="${this.name}btn" onclick="app.SnacksController.buy('${this.name}')" class="btn btn-success" disabled>Buy</button>
          </div>
        </div>
      </div>
    </div>`
  }
}