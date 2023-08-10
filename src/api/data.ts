import { ContactProps, SocialProps } from '@/types/type';

export const logoData = {
  logo: '',
  title: 'leleduc',
  slogan:
    'We work with a passion of taking challenges and creating new ones in advertising sector.',
};

export const socialData: SocialProps[] = [
  {
    icon: 'facebook-f',
    url: '/',
  },
  {
    icon: 'twitter',
    url: '/',
  },
  {
    icon: 'youtube',
    url: '/',
  },
  {
    icon: 'linkedin',
    url: '/',
  },
];

export const contactData: ContactProps[] = [
  { icon: 'envelope', type: 'email', data: 'leleduc@gmail.com' },
  { icon: 'phone', type: 'phone', data: '+84 918 983 869' },
  { icon: 'location-dot', type: 'address', data: 'Lao Cai, Viet Nam' },
];

export const menuData = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/' },
  { name: 'My Skill', url: '/' },
  { name: 'Project', url: '/' },
  { name: 'Contact', url: '/' },
];

export const serviceData = [
  { name: 'Web Design', url: '/' },
  { name: 'Brand Strategy', url: '/' },
  { name: 'Product Design', url: '/' },
  { name: 'Web Development', url: '/' },
  { name: 'App Development', url: '/' },
];
