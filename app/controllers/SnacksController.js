import { AppState } from "../AppState.js"
import { snacksService } from "../services/SnacksService.js"
import { setHTML, setText } from "../utils/Writer.js"

function _drawSnacks() {
  const snacks = AppState.snacks
  let template = ''
  snacks.forEach(s => {
    template += s.snackTemplate
  })
  setHTML('snacks', template)
}

function _drawCart() {
  const cart = AppState.cart
  let cartStr = ''
  let cartKeys = Object.keys(cart)
  let cartValues = Object.values(cart)

  for (let i = 0; i < cartKeys.length; i++) {
    cartStr += `
    <li>${cartKeys[i]}: ${cartValues[i]}</li>`
  }
  console.log(cartStr);
  setHTML('cart', cartStr)
}

function _checkButtons() {
  AppState.snacks.forEach(s => {
    if (AppState.totalMonies < s.price) {
      document.getElementById(`${s.name}btn`).setAttribute('disabled', '')
    } else {
      document.getElementById(`${s.name}btn`).removeAttribute('disabled')
    }
  })
}

export class SnacksController {
  constructor() {
    _drawSnacks()

    AppState.on('cart', _drawCart)
    AppState.on('totalMonies', _checkButtons)
  }

  buy(snackName) {
    snacksService.buy(snackName)
  }
}