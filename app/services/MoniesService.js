import { AppState } from "../AppState.js"

class MoniesService {
  addMonies() {
    AppState.totalMonies += .25
  }
}

export const moniesService = new MoniesService()