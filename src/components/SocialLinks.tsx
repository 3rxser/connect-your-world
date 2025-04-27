
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Link } from 'lucide-react';

interface SocialLinkProps {
  platform: string;
  username: string;
  url: string;
}

const SocialLinks: React.FC<{ links: SocialLinkProps[] }> = ({ links }) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <Facebook size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'youtube':
        return <Youtube size={20} />;
      case 'email':
        return <Mail size={20} />;
      default:
        return <Link size={20} />;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 my-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${link.platform}`}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-white hover:bg-gradient-to-r from-brand-purple to-brand-blue transition-all duration-300 hover:scale-110 hover:shadow-md"
        >
          {getIcon(link.platform)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
