import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"

class SnacksService {
  buy(snackName) {
    let snacks = AppState.snacks
    let cart = AppState.cart

    let foundSnack = snacks.find(s => s.name == snackName)
    if (AppState.totalMonies >= foundSnack.price) {
      AppState.totalMonies -= foundSnack.price
    } else {
      Pop.error("You don't have enough monies!!")
    }

    if (!cart[foundSnack.name]) {
      cart[foundSnack.name] = 1
    } else {
      cart[foundSnack.name]++
    }
    AppState.emit('cart')
  }
}

export const snacksService = new SnacksService()