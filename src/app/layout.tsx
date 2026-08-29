import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. AlHasan | Aesthetic & Plastic Surgery',
  description:
    'Dr. AlHasan — Aesthetic and Plastic Surgery'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}