'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function UserNav() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const initial = user.email?.charAt(0).toUpperCase() ?? 'U';

  return (
    <Button
      asChild
      className="font-headline transition-all duration-300 hover:bg-background text-foreground hover:text-foreground border-2 border-transparent hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] px-3 py-1 rounded-full"
    >
      <Link href="/profile" className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={user.photoURL ?? ''}
            alt={user.displayName ?? user.email ?? ''}
          />
          <AvatarFallback>{initial}</AvatarFallback>
        </Avatar>
      </Link>
    </Button>
  );
}
