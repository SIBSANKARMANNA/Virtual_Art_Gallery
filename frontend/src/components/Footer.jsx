// // src/components/Footer.jsx
// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-4 mt-8">
//       <div className="container mx-auto text-center text-sm">
//         <p>
//           © {new Date().getFullYear()} Virtual Art Gallery • Created with ❤️ by{" Sib"}
//           <a
//             href="https://github.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-indigo-500 hover:underline"
//           >
//             Sankar
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// }


import { useGallery } from "../context/GalleryContext";

export default function Footer() {
  const { themeColors } = useGallery();

  return (
    <footer
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
      }}
      className="text-center py-4 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300"
    >
      © 2025 Virtual Art Gallery. All rights reserved.
    </footer>
  );
}
