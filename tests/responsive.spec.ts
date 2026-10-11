import {test,expect} from '@playwright/test';
const widths=[320,360,375,390,414,768,1024];
const routes=['/','/programs','/coaching','/membership','/gallery','/about','/contact'];
for(const width of widths){for(const route of routes){test(`${route} at ${width}px`,async({page})=>{await page.setViewportSize({width,height:800});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));const response=await page.goto(route);expect(response?.status()).toBe(200);await expect(page.locator('main')).toBeVisible();const scrollWidth=await page.evaluate(()=>document.documentElement.scrollWidth);expect(scrollWidth).toBeLessThanOrEqual(width+1);expect(errors).toEqual([])})}}
