
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>This is permanet</h1>
        {children}
      </body>
    </html>
  );
}
