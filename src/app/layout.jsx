import './globals.css';

export const metadata = {
  title: 'Fast Folders - A Browser Extension For Google Gemini',
  description: 'Organize your Google Gemini chats with Fast Folders.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
