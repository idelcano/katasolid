import { Item } from "../../GildedRoseKata";
import { InventoryRepository } from "../repositories/InventoryRepository";
import { ItemsProviderRepository } from "../repositories/ItemsProviderRepository";

export class UpdateInventoryUseCase {
  constructor(private inventoryRepository: InventoryRepository, private itemsProviderRepository: ItemsProviderRepository) {}
  execute(): Item[] {
    return this.inventoryRepository.updateInventory(this.itemsProviderRepository.get());
  }
}
