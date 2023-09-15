import type Item from './Item'

export default interface ItemStorage {
  [key: string]: Item
}
