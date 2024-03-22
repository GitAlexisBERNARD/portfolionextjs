import React from 'react';
import Link from 'next/link';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        Page du Header
        <nav>
          <Link href="/">Accueil</Link>
          <Link href="/about">À Propos</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/addproject">Add Project</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        Page du footer
      </footer>
    </div>
  );
};

export default MainLayout;
