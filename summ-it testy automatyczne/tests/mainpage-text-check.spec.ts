import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://summ-it.eu/');
//   await page.getByRole('heading', { name: 'Your data in good hands' });
//   await page.getByText('The highest data security level');
//   await page.getByText('Comprehensive data integration and management');
//   await page.getByText('Custom application development', { exact: true });
//   await page.getByText('High availability solutions with proven standards');
//   await page.getByText('The right business decisions and cost optimization');
//   await page.getByRole('heading', { name: 'Get to know our services' });
//   await page.getByRole('heading', { name: 'Managed Service' });
//   await page.getByText('The dedicated team supports nearly 10 000 databases, guaranteeing the systems av');
//   await page.getByRole('link', { name: 'Audit services' });
//   await page.getByRole('link', { name: 'Cloud Solutions', exact: true });
//   await page.getByRole('link', { name: 'Database systems support', exact: true });
// await page.getByRole('heading', { name: 'Data', exact: true });
//   await page.getByText('We transform the collected data into information that represents business value ');
//   await page.getByRole('link', { name: 'Analytics and Data Management' });
  
  
  await expect(page.getByRole('heading', { name: 'Your data in good hands' })).toHaveText('Your data in good hands');
  await expect(page.getByText('The highest data security level')).toHaveText('The highest data security level');
  await expect(page.getByText('Comprehensive data integration and management')).toHaveText('Comprehensive data integration and management');
  await expect(page.getByText('Custom application development', { exact: true })).toHaveText('Custom application development');
  await expect(page.getByText('High availability solutions with proven standards')).toHaveText('High availability solutions with proven standards');
  await expect(page.getByText('The right business decisions and cost optimization')).toHaveText('The right business decisions and cost optimization');
  await expect(page.getByRole('heading', { name: 'Get to know our services' })).toHaveText('Get to know our services');
  await expect(page.getByRole('heading', { name: 'Managed Service' })).toHaveText('Managed Service');
  await expect(page.getByText('The dedicated team supports nearly 10 000 databases, guaranteeing the systems av')).toHaveText('The dedicated team supports nearly 10 000 databases, guaranteeing the systems availability and security.');
  await expect(page.getByRole('link', { name: 'Audit services' })).toHaveText('Audit services');
  await expect(page.getByRole('link', { name: 'Cloud Solutions', exact: true })).toHaveText('Cloud Solutions');
  await expect(page.getByRole('link', { name: 'Database systems support', exact: true })).toHaveText('Database systems support');
  await expect(page.getByRole('heading', { name: 'Data', exact: true })).toHaveText('Data');
  await expect(page.getByText('We transform the collected data into information that represents business value ')).toHaveText('We transform the collected data into information that represents business value and allows to scale systems to the desired size and requirements.');
  await expect(page.getByRole('link', { name: 'Analytics and Data Management' })).toHaveText('Analytics and Data Management');
});


