import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/lib/store';
import { Chrome } from '@/components/Chrome';

export const metadata: Metadata = {
  title: 'Antoleena — Home Decore from the Hills of Darjeeling',
  description:
    'Antoleena is an online home decor and furniture store — calm, hill-inspired pieces in warm woods and soft greens, made for slow living.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Chrome>{children}</Chrome>
        </StoreProvider>
      </body>
    </html>
  );
}
