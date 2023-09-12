import { Item } from "@/GildedRoseKata";
import { ItemsProviderRepository } from "@/domain/repositories/ItemsProviderRepository";

export class GildedRoseItemsProviderRepository implements ItemsProviderRepository {
    constructor(private items: Item[]) {}
    get(): Item[] {
        return this.items;
    }

}