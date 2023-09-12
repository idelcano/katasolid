import { Item } from "@/GildedRoseKata";

export interface ItemsProviderRepository {
    get(): Item[]
}