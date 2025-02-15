import { Button } from '@/components/Button';
import { ProfileCard } from '@/components/ProfileCard';

export const HeroSection = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Transform Your HR
          <br />
          Streamline, Automate,
          <br />
          Succeed
        </h1>
        
        <p className="text-gray-600 text-xl mb-8">
          Transform the way you manage your workforce with intuitive,
          automated HR tools designed to help your team thrive.
        </p>
        
        <div className="flex space-x-4">
          <Button>Start Free</Button>
          <Button variant="secondary">Start a Tour</Button>
        </div>
      </div>

      <ProfileCard />
    </div>
  );
};