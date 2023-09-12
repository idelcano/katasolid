import { Item } from "./GildedRoseKata";

interface ItemQualityType {
  getNewQuality(item: Item): number;
}

interface ItemSellInType {
  getNewSellIn(item: Item): number;
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

class ItemType {
  readonly key: string;
}

function getItemType(item: Item): ItemType | ItemSellInType {
  const itemTypes = [
    new SulfurasItem(),
    new AgedBrieItem(),
    new BackstagePassItem(),
  ];
  const itemType = itemTypes.find((itemtype) => itemtype.key == item.name);
  if (!itemType) {
    return new CommonItem();
  }
  return itemType;
}

class CommonItem implements ItemType {
  readonly key: string = "common";
  getNewQuality(item: Item): number {
    const quality = degrade(item.quality, item.sellIn);
    return quality;
  }
  getNewSellIn(item: Item): number {
    const sellIn = decreaseSellIn(item.sellIn);
    return sellIn;
  }
}

class ConjuredItem implements ItemType {
  readonly key: string = "Conjured";
  getNewQuality(item: Item): number {
    const quality = degrade(item.quality, item.sellIn);
    return quality;
  }
  getNewSellIn(item: Item): number {
    const sellIn = decreaseSellIn(item.sellIn);
    return sellIn;
  }
}

class SulfurasItem implements ItemQualityType {
  readonly key: string = "Sulfuras, Hand of Ragnaros";
  getNewQuality(item: Item): number {
    const quality = increaseQuality(item.quality, item.sellIn);
    return quality;
  }
}

class AgedBrieItem implements ItemType {
  readonly key: string = "Aged Brie";
  getNewQuality(item: Item): number {
    const quality = increaseOlder(item.quality, item.sellIn);
    return quality;
  }
  getNewSellIn(item: Item): number {
    return decreaseSellIn(item.sellIn);
  }
}

class BackstagePassItem implements ItemType {
  readonly key: string = "Backstage passes to a TAFKAL80ETC concert";
  getNewQuality(Item): number {
    return Item.quality + 1;
  }
  getNewSellIn(item: Item): number {
    return decreaseSellIn(item.sellIn);
  }
}
