# Understanding Nested Routes in Next.js

This guide explains how to create nested routes in Next.js, the role of `page.jsx` and `layout.jsx`, and key points to remember when working with nested routes.

---

## 1. How Nested Routes Are Created in Next.js

- **Folder Structure = Routing:**  
  In Next.js, the folder structure inside the `app` directory directly maps to your website's routes.
- **Nested Folders = Nested Routes:**  
  To create a nested route, simply create a folder inside another route folder.  
  For example:
```
about
├── nestedAbout
│   └── page.jsx
└── page.jsx
contact
├── teamsContact
│   └── page.jsx
└── page.jsx
```
- **Result:**  
- `/about` → `about/page.js`
- `/about/nestedAbout` → `about/nestedAbout/page.jsx`
- `/contact` → `contact/page.jsx`
- `/contact/teamsContact` → `contact/teamsContact/page.jsx`

---

## 2. Importance of `page.jsx` and `layout.jsx`

- **`page.jsx` (or `page.js`):**
- This file defines the content for a specific route.
- Every route (folder) must have a `page.jsx` to be accessible in the browser.

- **`layout.jsx` (or `layout.js`):**
- This file wraps the content of all pages inside its folder.
- Useful for adding headers, sidebars, or other UI that should appear on every page in that section.
- Layouts are also nested:  
  If you have a layout in a parent folder, and another in a child folder, both will be applied.

---

## 3. Key Points to Remember

- **Always use `page.jsx` for route content.**  
Without it, the route won't work.
- **Use `layout.jsx` for shared UI.**  
Place it in any folder where you want a common layout for all nested pages.
- **Nesting layouts:**  
Layouts in parent folders wrap layouts in child folders.
- **File names matter:**  
Use `page.jsx` and `layout.jsx` (or `.js`) exactly—Next.js looks for these names.
- **No need to configure routes manually:**  
The folder and file structure is your route configuration.

---


## 4. Example Structure
```
about
├── nestedAbout
│   ├── page.jsx
│   └── layout.jsx
└── page.jsx
contact
├── teamsContact
│   ├── page.jsx
│   └── layout.jsx
└── page.jsx
```
- **`about/nestedAbout/page.jsx`:**  
  Content for `/about/nestedAbout`.
- **`about/nestedAbout/layout.jsx`:**
  Layout for `/about/nestedAbout` and its children.
- **`about/page.jsx`:**
  Content for `/about`.
- **`contact/teamsContact/page.jsx`:**
  Content for `/contact/teamsContact`.
- **`contact/teamsContact/layout.jsx`:**
  Layout for `/contact/teamsContact` and its children.
- **`contact/page.jsx`:**
  Content for `/contact`.
- **`contact/layout.jsx`:**
  Layout for `/contact` and its children.
- **`layout.jsx` in `about` and `contact`:**
  These files can be used to define a common layout for all pages under `about` and `contact`, respectively.
- **`layout.jsx` in `nestedAbout` and `teamsContact`:**
  These files can be used to define a specific layout for pages under `nestedAbout` and `teamsContact`, respectively.
- **`page.jsx` in `nestedAbout` and `teamsContact`:**
  These files define the content for the nested routes `/about/nestedAbout` and `/contact/teamsContact`.
- **`layout.jsx` in `nestedAbout` and `teamsContact`:**
  These files can be used to define a specific layout for pages under `nestedAbout` and `teamsContact`, respectively.
- **`layout.jsx` in `about` and `contact`:**
  These files can be used to define a common layout for all pages under `about` and `contact`, respectively.
- **`layout.jsx` in `about` and `contact`:**
  These files can be used to define a common layout for all pages under `about` and `contact`, respectively.
- **`layout.jsx` in `nestedAbout` and `teamsContact`:**
  These files can be used to define a specific layout for pages under `nestedAbout` and `teamsContact`, respectively.
- **`layout.jsx` in `about` and `contact`:**
  These files can be used to define a common layout for all pages under `about` and `contact`, respectively.
- **`layout.jsx` in `nestedAbout` and `teamsContact`:**
  These files can be used to define a specific layout for pages under `nestedAbout` and `teamsContact`, respectively.
- **`layout.jsx` in `about` and `contact`:**
  These files can be used to define a common layout for all pages under `about` and `contact`, respectively.
- **`layout.jsx` in `nestedAbout` and `teamsContact`:**
  These files can be used to define a specific layout for pages under `nestedAbout` and `teamsContact`, respectively.
- **`layout.jsx` in `about` and `contact`:**

## 5. Summary

- **Nested routes** are created by nesting folders.
- **`page.jsx`** is for route content.
- **`layout.jsx`** is for shared layouts.
- **Folder structure = Route structure.**

This makes building complex websites in Next.js simple and organized!