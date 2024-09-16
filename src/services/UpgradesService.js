import { AppState } from "@/AppState"

class UpgradesService{
  purchaseUpgrade(upgrade){
    const resource = AppState.resource
    if (resource.count >= upgrade.price) {
      upgrade.qty++
      resource.count -= upgrade.price
      upgrade.price += upgrade.price
    }
    console.log(upgrade, resource)
  }
}

export const upgradesService = new UpgradesService()