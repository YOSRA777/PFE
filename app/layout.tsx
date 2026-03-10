import type { Metadata } from 'next';
import './globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'SocialAI Manager',
  description: 'Plateforme IA social media dashboard-ready',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
