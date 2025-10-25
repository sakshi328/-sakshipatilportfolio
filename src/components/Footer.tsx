import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {year} Sakshi Patil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
