
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-gradient">
      <div className="scanline"></div>
      <div className="fixed w-full h-full opacity-10 pointer-events-none z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzAwMCI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIGZpbGw9IiMxYTFhMWEiPjwvcmVjdD4KPHJlY3QgeD0iMTUiIHk9IjE1IiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIGZpbGw9IiMxYTFhMWEiPjwvcmVjdD4KPC9zdmc+')] bg-repeat"></div>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
