import { ReactNode } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ArticlesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex flex-col flex-1">
      <Navigation />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </main>
  );
}
