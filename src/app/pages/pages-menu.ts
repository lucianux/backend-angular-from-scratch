import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Comercios',
    icon: 'shopping-cart-outline',
    link: '/pages/comercios',
    home: true,
  },
  {
    title: 'ARCHIVOS',
    group: true,
  },
  {
    title: 'Archivos',
    icon: 'archive-outline',
    link: '/pages/archivos',
    home: true,
  },
  {
    title: 'Subir',
    icon: 'cloud-upload-outline',
    link: '/pages/subir',
    home: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
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
