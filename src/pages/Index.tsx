
import React from 'react';
import ProfileCard from '@/components/ProfileCard';
import LinkCard from '@/components/LinkCard';
import Footer from '@/components/Footer';
import { Link2, Mail, Users } from 'lucide-react';

const Index = () => {
  // Replace with your own info
  const profile = {
    name: "Your Name",
    bio: "Digital creator & social media enthusiast. Sharing my journey in tech, travel, and more.",
    avatarUrl: "", // Add your photo URL here
    socialLinks: [
      { platform: "Instagram", username: "yourname", url: "https://instagram.com/yourname" },
      { platform: "Twitter", username: "yourname", url: "https://twitter.com/yourname" },
      { platform: "LinkedIn", username: "yourname", url: "https://linkedin.com/in/yourname" },
      { platform: "YouTube", username: "yourname", url: "https://youtube.com/@yourname" },
      { platform: "Email", username: "you@example.com", url: "mailto:you@example.com" }
    ]
  };

  // Links to other content
  const links = [
    {
      title: "My Portfolio",
      href: "#",
      description: "Check out my latest work and projects",
      icon: <Link2 size={20} />
    },
    {
      title: "Subscribe to my Newsletter",
      href: "#",
      description: "Get weekly updates on my latest content",
      icon: <Mail size={20} />
    },
    {
      title: "Join my Community",
      href: "#",
      description: "Connect with like-minded people",
      icon: <Users size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-purple/10 via-brand-blue/10 to-white animate-pulse-gradient">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-purple opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-4 w-80 h-80 bg-brand-blue opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-16">
        <ProfileCard 
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
          socialLinks={profile.socialLinks}
        />
        
        <div className="mt-12 space-y-4">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              href={link.href}
              title={link.title}
              description={link.description}
              icon={link.icon}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
