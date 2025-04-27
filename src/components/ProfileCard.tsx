
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SocialLinks from './SocialLinks';

interface ProfileCardProps {
  name: string;
  bio: string;
  avatarUrl?: string;
  socialLinks: Array<{
    platform: string;
    username: string;
    url: string;
  }>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, bio, avatarUrl, socialLinks }) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex flex-col items-center text-center animate-float">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue opacity-75 blur"></div>
        <Avatar className="h-24 w-24 border-2 border-white">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-gradient-to-r from-brand-purple to-brand-blue text-white text-xl">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-gray-600 max-w-md">{bio}</p>
      
      <SocialLinks links={socialLinks} />
    </div>
  );
};

export default ProfileCard;
