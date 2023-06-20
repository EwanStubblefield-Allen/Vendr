import { AppState } from "../AppState.js"
import { moniesService } from "../services/MoniesService.js"
import { setText } from "../utils/Writer.js"

function _drawMonies() {
  let totalMonies = AppState.totalMonies.toFixed(2)
  setText('totalMonies', totalMonies)
}

export class MoniesController {
  constructor() {
    _drawMonies()

    AppState.on('totalMonies', _drawMonies)
  }

  addMonies() {
    moniesService.addMonies()
  }
}