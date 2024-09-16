import { AppState } from "@/AppState"

class ResourcesServices {
  mineResource() {
    AppState.resource.count++
  }
}

export const resourcesServices = new ResourcesServices()