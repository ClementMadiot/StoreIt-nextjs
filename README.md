<div align="center">
  <a href="https://store-it-cm.vercel.app/sign-up" target="_blanck"><img src="./app/storeIt-screen.png" alt="StoreIt sign-Up"></a>
   <div align="center">
      <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextjs" />
      <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
      <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
      <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    </div>
  <h3 align="center">StoreIt - Storage and File Sharing Platform</h3>
</div>

## <br /> 📋 <a name="table">Summary</a>

- ✨ [Introduction](#introduction)
- 🛠 [Technology Used](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Launch App](#launch-app)
- 🎨 [Styling](#style)

## <br /> <a name="introduction">✨ Introduction</a>

**[ENG]** This project is a comprehensive file management system built with Next.js 15 and the Appwrite Node SDK, leveraging advanced features for seamless file handling. It utilizes Tailwind CSS, ShadCN UI, and React Dropzone to create a modern and intuitive user experience. Offering Google Drive-like functionalities, it includes secure authentication, file upload, download, sharing, and advanced search and filtering capabilities for efficient file management.

**[FR]** Ce projet est un système de gestion de fichiers complet développé avec Next.js 15 et le SDK Appwrite pour Node, exploitant des fonctionnalités avancées pour une gestion fluide des fichiers. Il utilise Tailwind CSS, ShadCN UI et React Dropzone pour offrir une expérience utilisateur moderne et intuitive. Proposant des fonctionnalités similaires à Google Drive, il inclut une authentification sécurisée, l’upload et le téléchargement de fichiers, le partage, ainsi qu’une recherche avancée avec des options de filtrage pour une gestion efficace des fichiers.

## <br /> <a name="tech-stack">🛠 Technology Used</a>

- [TailwindCSS](https://tailwindcss.com/docs/installation)
  It's a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.

- [tailwindcss-animated](https://www.npmjs.com/package/tailwindcss-animated)
  Extended animation utilities for Tailwind CSS that brings various utility classes as well as several ready-to-use CSS animations.

- [shadcn/ui](https://ui.shadcn.com/docs)
Open-source UI component library for React that focuses on flexibility and customization.

- [Appwrite](https://www.npmjs.com/package/node-appwrite)
Appwrite is an open-source backend as a service server that abstract and simplify complex and repetitive development tasks behind a very simple to use REST API.

- [react-dropzone](https://react-dropzone.js.org/)
Simple React hook to create a HTML5-compliant drag'n'drop zone for files

- [useDebounce](https://www.npmjs.com/package/use-debounce)
Delay the execution of function or state update with useDebounce.

## <a name="features">📝 Features</a>

### File Management:

👉 **Upload**: Allows users to upload files of various types using drag-and-drop functionality.

👉 **Download**: Enables users to download files directly from the platform.

👉 **Sharing**: Facilitates file sharing with other users by generating unique sharing links.

👉 **Advanced Search**: Provides a powerful search bar to quickly find files based on keywords or metadata.

👉 **Categorization**: Organizes files into categories (Documents, Images, Media, Others) for easy navigation.

👉 **Sorting**: Offers flexible sorting options within each category:
  - *Alphabetical* Order: Sorts files alphabetically by name.
  - *File Size*: Sorts files by size (ascending or descending).

### Technical Stack:

👉 **Next.js**: A React framework for building web applications.

👉 **Tailwind** CSS: A utility-first CSS framework for rapid UI development.1   

👉 **Appwrite**: A backend server for building web and mobile applications.

👉 **Shadcn** UI: A modern UI component library built with Next.js and Tailwind CSS.

👉 **React** Dropzone: A HTML5-compliant drag-and-drop zone for files.


## <br /> <a name="launch-app">🚀 Launch App</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

> [!NOTE]
> Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) _(Node Package Manager)_

**Cloning the Repository**

```bash
git clone {git remote URL}
cd {git project..}
```

**Installation**

> After cloning the repository, run the command `npm i` or `yarn i` to install the project's dependencies.

> Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up &
creating a new project on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

## <br /> <a name="style">🎨 Styling</a>

Global styling are defined using **CSS** & **TailwindCSS**

<details>
<summary><code>global.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply scroll-smooth;
  }

  body {
    @apply bg-white text-dark-200 min-h-screen;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
    height: 3px;
    border-radius: 50px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 50px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #fa7275;
  }

  /* Remove scrollbar */
  .remove-scrollbar::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    border-radius: 0px;
  }

  .remove-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .remove-scrollbar::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 0px;
  }

  .remove-scrollbar::-webkit-scrollbar-thumb:hover {
    /* background: #1e2238; */
    background: transparent;
  }

  .recharts-responsive-container {
    height: initial !important;
  }
}

@layer utilities {
  /* ===== TYPOGRAPHY */
  .h1 {
    @apply text-[34px] leading-[42px] font-bold;
  }
  .h2 {
    @apply text-[24px] leading-[36px] font-bold;
  }
  .h3 {
    @apply text-[20px] leading-[28px] font-semibold;
  }
  .h4 {
    @apply text-[18px] leading-[20px] font-medium;
  }
  .h5 {
    @apply text-[16px] leading-[24px] font-semibold;
  }
  .subtitle-1 {
    @apply text-[16px] leading-[24px] font-medium;
  }
  .subtitle-2 {
    @apply text-[14px] leading-[20px] font-semibold;
  }
  .body-1 {
    @apply text-[16px] leading-[24px] font-normal;
  }
  .body-2 {
    @apply text-[14px] leading-[20px] font-normal;
  }
  .button {
    @apply text-[14px] leading-[20px] font-medium;
  }
  .caption {
    @apply text-[12px] leading-[16px] font-normal;
  }
  .overline {
    @apply text-[10px] leading-[14px] font-normal;
  }

  /* ===== HELPER CLASSES */
  .container {
    @apply mx-auto max-w-7xl px-5;
  }
  .primary-btn {
    @apply bg-brand hover:bg-brand-100 transition-all rounded-full button !important;
  }
  .flex-center {
    @apply flex items-center justify-center;
  }

  /* =====  SHADCN OVERRIDES */
  .shad-no-focus {
    @apply outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 !important;
  }
  .shad-input {
    @apply border-none shadow-none p-0 shad-no-focus placeholder:text-light-200 body-2 !important;
  }

  .shad-form-item {
    @apply flex h-[78px] flex-col justify-center rounded-xl border border-light-300 px-4 shadow-drop-1;
  }
  .shad-form-label {
    @apply text-light-100 pt-2 body-2 w-full !important;
  }
  .shad-form-message {
    @apply text-red body-2 ml-4 !important;
  }
  .shad-alert-dialog {
    @apply space-y-4 max-w-[95%] sm:w-fit rounded-xl md:rounded-[30px] px-4 md:px-8 py-10 bg-white outline-none !important;
  }
  .shad-submit-btn {
    @apply bg-brand button hover:bg-brand-100 transition-all rounded-full !important;
  }
  .shad-otp {
    @apply w-full flex gap-1 sm:gap-2 justify-between !important;
  }
  .shad-otp-slot {
    @apply text-[40px] font-medium rounded-xl ring-brand shadow-drop-1 text-brand-100 justify-center flex border-2 border-light-300 size-12 md:size-16 gap-5 !important;
  }

  .shad-sheet {
    @apply pt-0 !important;
  }
  .shad-sheet button,
  .shad-dialog button {
    @apply focus:ring-0 focus:ring-offset-0 focus-visible:border-none outline-none focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0 !important;
  }
  .shad-dialog {
    @apply rounded-[26px] w-[90%] max-w-[400px] px-6 py-8   !important;
  }
  .shad-chart-title {
    @apply text-white !important;
  }

  /* Sidebar & MobileNavigation */
  .nav-icon {
    @apply w-6 filter invert opacity-25 !important;
  }
  .nav-icon-active {
    @apply invert-0 opacity-100 !important;
  }

  /* =====  STYLE CLASSES */

  /* Root Layout */
  .main-content {
    @apply remove-scrollbar h-full flex-1 overflow-auto bg-light-400 px-5 py-7 sm:mr-7 sm:rounded-[30px] md:mb-7 md:px-9 md:py-10 !important;
  }

  /* Dashboard */
  .dashboard-container {
    @apply mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:gap-10 !important;
  }
  .dashboard-summary-list {
    @apply mt-6 grid grid-cols-1 gap-4 xl:mt-10 xl:grid-cols-2 xl:gap-9 !important;
  }
  .dashboard-summary-card {
    @apply relative mt-6 rounded-[20px] bg-white p-5 transition-all hover:scale-105 !important;
  }
  .summary-type-icon {
    @apply absolute -left-3 top-[-25px] z-10 w-[190px] object-contain !important;
  }
  .summary-type-size {
    @apply h4 relative z-20 w-full text-right !important;
  }
  .summary-type-title {
    @apply h5 relative z-20 text-center !important;
  }
  .dashboard-recent-files {
    @apply h-full rounded-[20px] xl:h-[654px] custom-scrollbar overflow-auto bg-white p-5 xl:p-7 !important;
  }
  .recent-file-details {
    @apply flex w-full justify-between items-center !important;
  }
  .recent-file-name {
    @apply subtitle-2 line-clamp-1 w-full text-light-100 sm:max-w-[200px] lg:max-w-[250px] !important;
  }
  .recent-file-date {
    @apply body-2 text-light-100/80 !important;
  }
  .empty-list {
    @apply body-1 mt-10 text-center text-light-200 !important;
  }

  /* Type page */
  .page-container {
    @apply mx-auto flex w-full max-w-7xl flex-col items-center gap-8 !important;
  }
  .total-size-section {
    @apply flex mt-2 flex-col justify-between sm:flex-row sm:items-center !important;
  }
  .file-list {
    @apply grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 !important;
  }
  .sort-container {
    @apply mt-5 flex items-center sm:mt-0 sm:gap-3 !important;
  }

  /* ActionsDropdown */
  .rename-input-field {
    @apply body-2 shad-no-focus h-[52px] w-full rounded-full border px-4 shadow-drop-1 !important;
  }
  .delete-confirmation {
    @apply text-center text-light-100 !important;
  }
  .delete-file-name {
    @apply font-medium text-brand-100 !important;
  }
  .modal-cancel-button {
    @apply h-[52px] flex-1 rounded-full bg-white text-light-100 hover:bg-transparent !important;
  }
  .modal-submit-button {
    @apply primary-btn !mx-0 h-[52px] w-full flex-1 !important;
  }

  /* ActionsModalContent */
  .file-details-thumbnail {
    @apply !mb-1 flex items-center gap-3 rounded-xl border border-light-200/40 bg-light-400/50 p-3 !important;
  }
  .file-details-label {
    @apply body-2 w-[30%] text-light-100 !important;
  }
  .file-details-value {
    @apply subtitle-2 flex-1 !important;
  }

  .share-wrapper {
    @apply !mt-2 space-y-2 !important;
  }
  .share-input-field {
    @apply body-2 shad-no-focus h-[52px] w-full rounded-full border px-4 shadow-drop-1 !important;
  }
  .share-remove-user {
    @apply rounded-full bg-transparent text-light-100 shadow-none hover:bg-transparent !important;
  }
  .remove-icon {
    @apply aspect-square rounded-full !important;
  }

  /* AuthForm */
  .auth-form {
    @apply flex max-h-[800px] w-full max-w-[580px] flex-col justify-center space-y-6 transition-all lg:h-full lg:space-y-8 !important;
  }
  .form-title {
    @apply h1 text-center text-light-100 md:text-left !important;
  }
  .form-submit-button {
    @apply primary-btn h-[66px] !important;
  }
  .error-message {
    @apply body-2 mx-auto w-fit rounded-xl bg-error/5 px-8 py-4 text-center text-error !important;
  }

  /* Card */
  .file-card {
    @apply flex cursor-pointer flex-col gap-6 rounded-[18px] bg-white p-5 shadow-sm transition-all hover:shadow-drop-3 !important;
  }
  .file-card-details {
    @apply flex flex-col gap-2 text-light-100 !important;
  }

  /* Chart */
  .chart {
    @apply flex items-center rounded-[20px] bg-brand p-2 text-white md:flex-col xl:flex-row !important;
  }
  .chart-container {
    @apply mx-auto aspect-square w-[180px] text-white xl:w-[200px] !important;
  }
  .polar-grid {
    @apply first:fill-white/20 last:fill-brand !important;
  }
  .chart-details {
    @apply flex-1 items-start px-3 py-0 sm:px-5 lg:p-3 xl:pr-5 !important;
  }
  .chart-total-percentage {
    @apply fill-white text-4xl font-bold !important;
  }
  .chart-title {
    @apply h3 font-bold md:text-center lg:text-left !important;
  }
  .chart-description {
    @apply subtitle-1 mt-2 w-full text-white/70 md:text-center lg:text-left !important;
  }

  /* FileUploader */
  .uploader-button {
    @apply primary-btn h-[52px] gap-2 px-10 shadow-drop-1 !important;
  }
  .uploader-preview-list {
    @apply fixed bottom-10 right-10 z-50 flex size-full h-fit max-w-[480px] flex-col gap-3 rounded-[20px] bg-white p-7 shadow-drop-3 !important;
  }
  .uploader-preview-item {
    @apply flex items-center justify-between  gap-3 rounded-xl p-3 shadow-drop-3 !important;
  }
  .preview-item-name {
    @apply subtitle-2 mb-2 line-clamp-1 max-w-[300px] !important;
  }

  .error-toast {
    @apply bg-red !rounded-[10px] !important;
  }

  /* Header */
  .header {
    @apply hidden items-center justify-between gap-5 p-5 sm:flex lg:py-7 xl:gap-10 !important;
  }
  .header-wrapper {
    @apply flex-center min-w-fit gap-4 !important;
  }
  .sign-out-button {
    @apply flex-center h-[52px] min-w-[54px] items-center rounded-full bg-brand/10 p-0 text-brand shadow-none transition-all hover:bg-brand/20 !important;
  }

  /* Mobile Navigation */
  .mobile-header {
    @apply flex h-[60px] justify-between px-5 sm:hidden !important;
  }
  .header-user {
    @apply my-3 flex items-center gap-2 rounded-full p-1 text-light-100 sm:justify-center sm:bg-brand/10 lg:justify-start lg:p-3 !important;
  }
  .header-user-avatar {
    @apply aspect-square w-10 rounded-full object-cover !important;
  }
  .mobile-nav {
    @apply h5 flex-1 gap-1 text-brand !important;
  }
  .mobile-nav-list {
    @apply flex flex-1 flex-col gap-4 !important;
  }
  .mobile-nav-item {
    @apply flex text-light-100 gap-4 w-full justify-start items-center h5 px-6 h-[52px] rounded-full !important;
  }
  .mobile-sign-out-button {
    @apply h5 flex h-[52px] w-full items-center gap-4 rounded-full bg-brand/10 px-6 text-brand shadow-none transition-all hover:bg-brand/20 !important;
  }

  /* OTP Modal */
  .otp-close-button {
    @apply absolute -right-1 -top-7 cursor-pointer sm:-right-2 sm:-top-4  !important;
  }

  /* Search */
  .search {
    @apply relative w-full md:max-w-[480px] !important;
  }
  .search-input-wrapper {
    @apply flex h-[52px] flex-1 items-center gap-3 rounded-full px-4 shadow-drop-3 !important;
  }
  .search-input {
    @apply body-2 shad-no-focus  placeholder:body-1 w-full border-none p-0 shadow-none placeholder:text-light-200 !important;
  }
  .search-result {
    @apply absolute left-0 top-16 z-50 flex w-full flex-col gap-3 rounded-[20px] bg-white p-4 !important;
  }
  .empty-result {
    @apply body-2 text-center text-light-100 !important;
  }

  /* Sidebar */
  .sidebar {
    @apply remove-scrollbar hidden h-screen w-[90px] flex-col overflow-auto px-5 py-7 sm:flex lg:w-[280px] xl:w-[325px] !important;
  }
  .sidebar-nav {
    @apply h5 mt-9 flex-1 gap-1 text-brand !important;
  }
  .sidebar-nav-item {
    @apply flex text-light-100 gap-4 rounded-xl lg:w-full justify-center lg:justify-start items-center h5 lg:px-[30px] h-[52px] lg:rounded-full !important;
  }
  .sidebar-user-info {
    @apply mt-4 flex items-center justify-center gap-2 rounded-full bg-brand/10 p-1 text-light-100 lg:justify-start lg:p-3 !important;
  }
  .sidebar-user-avatar {
    @apply aspect-square w-10 rounded-full object-cover !important;
  }

  .shad-active {
    @apply bg-brand text-white shadow-drop-2 !important;
  }

  /* Sort */
  .sort-select {
    @apply shad-no-focus h-11 w-full rounded-[8px] border-transparent bg-white !shadow-sm sm:w-[210px] !important;
  }

  /* Thumbnail */
  .thumbnail {
    @apply flex-center size-[50px] min-w-[50px] overflow-hidden rounded-full bg-brand/10;
  }
  .thumbnail-image {
    @apply size-full object-cover object-center !important;
  }
}
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```cjs
theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FA7275',
          100: '#EA6365',
        },
        red: '#FF7474',
        error: '#b80000',
        green: '#3DD9B3',
        blue: '#56B8FF',
        pink: '#EEA8FD',
        orange: '#F9AB72',
        light: {
          100: '#333F4E',
          200: '#A3B2C7',
          300: '#F2F5F9',
          400: '#F2F4F8',
        },
        dark: {
          100: '#04050C',
          200: '#131524',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      boxShadow: {
        'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
        'drop-2': '0 8px 30px 0 rgba(65, 89, 214, 0.3)',
        'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
```

</details>
