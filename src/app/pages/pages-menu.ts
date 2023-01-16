import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'MAIN',
    group: true,
  },
  {
    title: 'Invoice',
    icon: 'home-outline',
    children: [
      {
        title: 'List',
        link: '/pages/invoice/list',
      },
    ]
  },
  {
    title: 'Customers',
    icon: 'home-outline',
    children: [
      {
        title: 'List',
        link: '/pages/customers/list',
      },
    ]
  },
  {
    title: 'Products',
    icon: 'home-outline',
    children: [
      {
        title: 'List',
        link: '/pages/products/list',
      },
    ]
  },
  {
    title: 'Tools',
    icon: 'home-outline',
    children: [
      {
        title: 'List',
        link: '/pages/tools/list',
      },
    ]
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
