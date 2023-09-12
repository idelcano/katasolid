import {
  Item, getCompositionRoot,
} from "../../app/GildedRoseKata";

describe("GildedRose Suite", () => {
  it("Sell in value should be decreased", () => {
    const items = [
      new Item("whatever", 10, 0),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].sellIn).toBe(9);
  });

  it("Quality value should be decreased", () => {
    const items = [
      new Item("whatever", 1, 10),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(9);
  });

  it("Quality value decreases twice as much when sell by is passed", () => {
    const items = [
      new Item("whatever", 0, 10),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(8);
  });

  it("Quality is never negative", () => {
    const items = [new Item("whatever", 0, 0)];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(0);
  });

  it("Aged brie increases quality with age", () => {
    const items = [
      new Item("Aged Brie", 0, 0),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(2);
  });

  it("Qualify never increases past fifty", () => {
    const items = [
      new Item("Aged Brie", 5, 50),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(50);
  });

  it("Sulfuras never changes", () => {
    const items = [
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(80);
    expect(updatedItems[0].sellIn).toBe(0);
  });

  it("Backstage pass increases quality by one if sell by greater than ten", () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(21);
  });

  it("Backstage pass increases quality by two if sell by smaller than ten", () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(22);
  });

  it("Backstage pass increases quality by three if sell by smaller than five", () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 20),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(23);
  });

  it("Backstage pass loses value after sell by passes", () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20),
    ];
    
    const compositionRoot=getCompositionRoot(items);
    const updatedItems=compositionRoot.updateQualityItems.execute();
    expect(updatedItems[0].quality).toBe(0);
  });
});
