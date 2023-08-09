import { ContactProps, SocialProps } from "@/types/type";

export const logoData = {
  logo: "",
  title: "leleduc",
  slogan:
    "We work with a passion of taking challenges and creating new ones in advertising sector.",
};

export const socialData: SocialProps[] = [
  {
    icon: "facebook-f",
    url: "/",
  },
  {
    icon: "twitter",
    url: "/",
  },
  {
    icon: "youtube",
    url: "/",
  },
  {
    icon: "linkedin",
    url: "/",
  },
];

export const contatData: ContactProps[] = [
  { icon: "envelope", type: "email", data: "leleduc@gmail.com" },
  { icon: "phone", type: "phone", data: "+84 918 983 869" },
];

export const menuData = [
  { name: "Home", url: "/" },
  { name: "About", url: "/" },
  { name: "My Skill", url: "/" },
  { name: "Project", url: "/" },
  { name: "Contact", url: "/" },
];
