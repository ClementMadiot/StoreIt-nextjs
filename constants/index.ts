export const navItems = [
  { name: "Dashboard", url: "/", icon: "/assets/icons/dashboard.svg" },
  { name: "Documents", url: "/documents", icon: "/assets/icons/documents.svg" },
  { name: "Images", url: "/images", icon: "/assets/icons/images.svg" },
  { name: "Media", url: "/media", icon: "/assets/icons/video.svg" },
  { name: "Others", url: "/others", icon: "/assets/icons/others.svg" },
];

export const avatarplaceholderUrl =
  "https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg?semtu003dais_hybrid";

export const actionsDropdownItems = [
  {
    label: "Rename",
    icon: "/assets/icons/edit.svg",
    value: "rename",
  },
  {
    label: "Details",
    icon: "/assets/icons/info.svg",
    value: "details",
  },
  {
    label: "Share",
    icon: "/assets/icons/share.svg",
    value: "share",
  },
  {
    label: "Download",
    icon: "/assets/icons/download.svg",
    value: "download",
  },
  {
    label: "Delete",
    icon: "/assets/icons/delete.svg",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];
export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
