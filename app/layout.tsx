import Navbar from '@/components/Navbar';
import ReactQueryProvider from '../components/ReactQueryProvider';
import '../styles/_globals.scss';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Navbar />
          <main style={{ padding: '2rem' }}>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
