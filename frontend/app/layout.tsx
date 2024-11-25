// app/layout.tsx
import './globals.css';  // Correct import path for globals.css

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}  {/* Renders the page content */}
      </body>
    </html>
  );
}
