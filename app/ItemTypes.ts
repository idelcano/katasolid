import { Item } from "./GildedRoseKata";

interface ItemType {
  readonly key: string;
  getQuality(item: Item): number;
  getSellIn(item: Item): number;
}

class CommonItem implements ItemType {
  readonly key: string = "common";
  getQuality(item: Item): number {
    const quality = degrade(item.quality, item.sellIn);
    return quality;
  }
  getSellIn(item: Item): number {
    const sellIn = decreaseSellIn(item.sellIn);
    return sellIn;
  }
}

class ConjuredItem implements ItemType {
  readonly key: string = "Conjured";
  getQuality(item: Item): number {
    const quality = degrade(item.quality, item.sellIn);
    return quality;
  }
  getSellIn(item: Item): number {
    const sellIn = decreaseSellIn(item.sellIn);
    return sellIn;
  }
}

class SulfurasItem implements ItemType {
  readonly key: string = "Sulfuras, Hand of Ragnaros";
  getQuality(item: Item): number {
    return item.quality
  }
  getSellIn(item: Item):number { return item.sellIn;}
}

class AgedBrieItem implements ItemType {
  readonly key: string = "Aged Brie";
  getQuality(item: Item): number {
    const quality = increaseOlder(item.quality, item.sellIn);
    return quality;
  }
  getSellIn(item: Item): number {
    return decreaseSellIn(item.sellIn);
  }
}

class BackstagePassItem implements ItemType {
  readonly key: string = "Backstage passes to a TAFKAL80ETC concert";
  getQuality(Item): number {
    return Item.quality + 1;
  }
  getSellIn(item: Item): number {
    return decreaseSellIn(item.sellIn);
  }
}

export function getItemType(name: string): ItemType {
  const itemTypes = [
    new SulfurasItem(),
    new AgedBrieItem(),
    new BackstagePassItem(),
  ];
  const itemType = itemTypes.find((itemtype) => itemtype.key == name);
  if (!itemType) {
    return new CommonItem();
  }
  return itemType;
}

function decreaseSellIn(sellIn: number) {
  return sellIn - 1;
}

function increaseOlder(quality: number, days: number) {
  quality = days;
  return quality;
}

function increaseQuality(quality: number, days: number) {
  if (days == 0) return 0;
  else if (days <= 5) {
    quality + 3;
  } else if (days <= 10) {
    quality + 2;
  }
  if (quality > 50) return 50;
  else {
    return quality;
  }
}

function degrade(quality: number, sellIn: number) {
  if (sellIn == 0) {
    quality = quality - 2;
  } else {
    quality = quality - 1;
  }
  if (quality < 0) {
    return 0;
  } else {
    return quality;
  }
}
function degradeTwice(quality: number, sellIn: number) {
  if (sellIn == 0) {
    quality = quality - 4;
  } else {
    quality = quality - 2;
  }

  if (quality < 0) {
    quality = 0;
  }
  return quality;
}