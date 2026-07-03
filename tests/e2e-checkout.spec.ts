import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Full E2E Checkout Flow - Happy Path', async ({ page }) => {
  // 1. จำลองหน้า Page Objects ทั้งหมด
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 2. เริ่มโฟลว์: Login
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // 3. หยิบของใส่ตะกร้า
  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  // 4. ทำการ Checkout และกรอกข้อมูล
  await checkoutPage.processCheckout('John', 'Doe', '10200');

  // 5. Assertion: ด่านสุดท้าย เช็คว่าซื้อของสำเร็จจริงไหม (สำคัญมาก ห้ามลืมเขียน expect เด็ดขาด)
  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});