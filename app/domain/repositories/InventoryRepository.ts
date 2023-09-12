import { Item } from "../../GildedRoseKata";

export interface InventoryRepository {
  updateInventory(items: Item[]): Item[];
}
