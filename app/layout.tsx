import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Define el tipo para children
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
