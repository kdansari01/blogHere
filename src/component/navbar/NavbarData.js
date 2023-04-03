export const getNavbarSections = (isLoggedIn) => [
  {
    path: "/",
    icon: (
      <lord-icon
        src="https://cdn.lordicon.com/osuxyevn.json"
        trigger="hover"
        colors="primary:#000000"
        state="hover-3"
        style={{ width: 40, height: 40 }}
      />
    ),
    // name: "Home",
  },
  {
    path: "/blogs",
    name: "Blogs",
  },
  ...(isLoggedIn
    ? [
        {
          path: "/new-blog",
          name: "New Blogs",
        },
      ]
    : []),
  {
    path: "/about-us",
    name: "About Us",
  },
  // {
  //   path: "/contact",
  //   name: "Contact",
  // },
];
