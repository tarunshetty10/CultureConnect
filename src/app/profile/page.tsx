'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/lib/firebase/client';
import { doc } from 'firebase/firestore';
import { useDoc } from '@/firebase';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAuth, signOut } from 'firebase/auth';

type UserProfileData = {
  email: string;
  phoneNumber?: string;
};

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const userDocRef = useMemo(
    () => (user ? doc(db, 'users', user.uid) : null),
    [user],
  );

  const { data: profile, isLoading } = useDoc<UserProfileData>(userDocRef);

  const handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    router.push('/');
    router.refresh();
  };

  if (loading || !user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            Your Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-lg">
              {user.email ?? profile?.email ?? 'Not available'}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone Number</p>
            <p className="text-lg">
              {isLoading
                ? 'Loading...'
                : profile?.phoneNumber ?? 'Not provided'}
            </p>
          </div>
          <div className="pt-4">
            <Button
              variant="outline"
              className="w-full font-headline border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              onClick={handleSignOut}
            >
              Log Out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

