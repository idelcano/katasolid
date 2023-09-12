import { Item } from "../../GildedRoseKata";
import { InventoryRepository } from "../../domain/repositories/InventoryRepository";

export class GildedRoseInventoryRepository implements InventoryRepository {
  updateInventory(items: Item[]): Item[] {
    items.forEach((item) => ({
      name: item.name,
      quality: this.getItemQuality(item),
      sellIn: this.getItemSellIn(item),
    }));
  }

  private getItemQuality(item:Item) {
    getItemType(item).
  }

  private getItemSellIn(item:Item) {}
}
