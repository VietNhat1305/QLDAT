import store from "@/state/store";
export default [
  {
    path: "/dang-nhap",
    name: "login",
    component: () => import("../pages/login/login"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters["authStore/loggedIn"]) {
          next({ name: "default" });
        } else {
          next();
        }
      },
    },
  },

  {
    path: "/",
    name: "Menu",
    meta: {},
    component: () => import("../pages/menu"),
  },
  {
    path: "/danh-muc",
    name: "default",
    meta: {},
    component: () => import("../pages/danhMuc"),
  },

  {
    path: "/tai-khoan",
    name: "Tài khoản",
    component: () => import("../pages/user"),
  },

  {
    path: "/thong-tin-ca-nhan",
    name: "Thông tin cá nhân",
    // meta: {},
    component: () => import("../pages/login/profile"),
  },

  {
    path: "/tao-bai-viet",
    name: "Tạo bài viết",
    // meta: {},
    component: () => import("../pages/taobaiviet"),
  },

  {
    path: "/bai-thi",
    name: "Danh sách bài viết",
    // meta: {},
    component: () => import("../pages/baiThi"),
  },
  {
    path: "/nguoi-mua",
    name: "Danh sách người mua",
    // meta: {},
    component: () => import("../pages/NguoiMua"),
  },

  {
    path: "/404",
    name: "404",
    component: require("../pages/utility/404").default,
  },
  {
    path: "/unauthorized",
    name: "401",
    component: require("../pages/utility/401").default,
  },
  {
    path: "*",
    redirect: "404",
  },
];
