import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    // เลือกสินค้าชิ้นแรก (Backpack)
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}