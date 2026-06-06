import './globals.css';

export const metadata = {
  title: 'Fast Folders – Folders & Chat Organiser for Google Gemini',
  description: 'Fast Folders adds folders, prompt management and cloud sync to Google Gemini. Organise your AI chats the way you want. Free to install – 6,600+ users.',
  keywords: 'google gemini folders, gemini chat folders, gemini chat organiser, gemini extension, organise gemini chats, gemini productivity, gemini sidebar, superpower gemini',
  metadataBase: new URL('https://www.getfastfolders.com'),
  openGraph: {
    title: 'Fast Folders – Organise Your Google Gemini Chats',
    description: 'The folders Google Gemini forgot to build. Free to install.',
    url: 'https://www.getfastfolders.com',
    siteName: 'Fast Folders',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fast Folders – Google Gemini Chat Organiser',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fast Folders – Organise Your Google Gemini Chats',
    description: 'The folders Google Gemini forgot to build. Free to install.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
