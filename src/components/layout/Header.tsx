'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import UserNav from '@/components/auth/UserNav';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { user, loading } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold text-primary">CultureConnect</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {!loading && (
              <>
                {user ? (
                  <UserNav />
                ) : (
                  <>
                    <Button asChild variant="ghost" className="font-headline">
                      <Link href="/login">Log In</Link>
                    </Button>
                    <Button asChild className="font-headline">
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
