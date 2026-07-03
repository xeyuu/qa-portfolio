import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Should login successfully with standard user', async ({ page }) => {
  const loginPage = new LoginPage(page); // เรียกใช้งาน Page Object

  // 1. ไปที่เว็บ และทำการ Login
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Assertion: ตรวจสอบว่าเข้าสู่ระบบสำเร็จ โดยเช็คว่ามีคำว่า Products ปรากฏบนหน้าจอ
  const title = page.locator('.title');
  await expect(title).toHaveText('Products');
});