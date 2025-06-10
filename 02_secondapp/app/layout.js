
import "@/app/globals.css"
import Navigation from "@/component/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>This is permanet</h1>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
