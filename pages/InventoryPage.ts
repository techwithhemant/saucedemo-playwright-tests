export class InventoryPage {
  constructor(private page) {}

  async sortBy(option: string) {
    await this.page.selectOption('[data-test="product_sort_container"]', option);
  }

  async getItemNames(): Promise<string[]> {
    return await this.page.$$eval('.inventory_item_name', els => els.map(el => el.textContent!.trim()));
  }

  async getItemPrices(): Promise<number[]> {
    return await this.page.$$eval('.inventory_item_price', els => els.map(el => parseFloat(el.textContent!.replace('$', ''))));
  }

  async addItemsByIndexes(indexes: number[]) {
    for (const index of indexes) {
      await this.page.locator('.inventory_item').nth(index).locator('button').click();
    }
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
