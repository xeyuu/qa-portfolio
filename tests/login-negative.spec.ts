import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// 1. เตรียมชุดข้อมูลพังๆ (Data-Driven)
const badUsers = [
  { 
    scenario: 'บัญชีถูกล็อค', 
    user: 'locked_out_user', 
    pass: 'secret_sauce', 
    expectedError: 'Epic sadface: Sorry, this user has been locked out.' 
  },
  { 
    scenario: 'รหัสผ่านผิด', 
    user: 'standard_user', 
    pass: 'wrong_password', 
    expectedError: 'Epic sadface: Username and password do not match any user in this service' 
  },
  { 
    scenario: 'ไม่กรอก Username', 
    user: '', 
    pass: 'secret_sauce', 
    expectedError: 'Epic sadface: Username is required' 
  },
];

// 2. ใช้ test.describe เพื่อจัดกลุ่ม และวนลูปเทสต์
test.describe('Negative Login Scenarios (Data-Driven)', () => {
  
  for (const data of badUsers) {
    test(`Should fail to login - ${data.scenario}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      
      // สั่งให้ทำ Action เหมือนปกติ
      await loginPage.navigate();
      await loginPage.login(data.user, data.pass);
      
      // 3. Assertion: ระบบต้องพ่น Error Message ออกมาตรงกับที่เราคาดหวังเป๊ะๆ
      const errorMsg = page.locator('[data-test="error"]');
      await expect(errorMsg).toBeVisible(); // เช็คว่ากล่องแดงๆ โผล่มาไหม
      await expect(errorMsg).toHaveText(data.expectedError); // เช็คข้อความข้างใน
    });
  }
});