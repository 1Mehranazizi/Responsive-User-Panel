import {
  MdDashboard,
  MdShoppingBasket,
  MdFavorite,
  MdLocationPin,
  MdAccountBalanceWallet,
  MdPerson,
  MdLogout,
} from "react-icons/md";

export const sideBarData = [
  { title: "داشبورد", icon: <MdDashboard />, path: "/dashboard" },
  { title: "سفارش ها", icon: <MdShoppingBasket />, path: "/order" },
  { title: "علاقه مندی ها", icon: <MdFavorite />, path: "/favorite" },
  { title: "آدرس ها", icon: <MdLocationPin />, path: "/address" },
  { title: "کیف پول", icon: <MdAccountBalanceWallet />, path: "/wallet" },
  { title: "اطلاعات حساب کاربری", icon: <MdPerson />, path: "/my-account" },
  { title: "خروج", icon: <MdLogout />, path: "/" },
];
