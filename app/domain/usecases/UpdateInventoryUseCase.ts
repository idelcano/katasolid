import { Item } from "../../GildedRoseKata";
import { InventoryRepository } from "../repositories/InventoryRepository";

export class UpdateInventoryUseCase {
  constructor(private inventoryRepository: InventoryRepository) {}
  execute(items: Item[]): Item[] {
    return this.inventoryRepository.updateInventory(items);
  }
}
