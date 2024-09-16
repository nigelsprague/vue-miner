import { reactive } from 'vue'
import { Resource } from './models/Resource.js'
import { Upgrade } from './models/Upgrade.js'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  resource: new Resource(),

  clickUpgrade: [
    new Upgrade({
      name: 'Double Feature',
      price: 25,
      qty: 0,
      multiplier: 1 }),
    new Upgrade({
      name: 'Box-Set',
      price: 50,
      qty: 0,
      multiplier: 5 })
],

  autoUpgrade: [
    new Upgrade({
      name: 'Channel Subscription',
      price: 100,
      qty: 0,
      multiplier: 10 }),
    new Upgrade({
      name: 'Criterion Closet',
      price: 1000,
      qty: 0,
      multiplier: 100 })
  ]
})

