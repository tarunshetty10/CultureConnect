'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Lotus } from 'lucide-react';
import { religions } from '@/lib/data/religions';

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg animate-bounce"
            style={{
              animationIterationCount: 3.5,
              animationDuration: '1.5s',
            }}
          >
            <Menu className="h-8 w-8" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background">
          <SheetHeader className="mb-8">
            <SheetTitle className="font-headline text-3xl text-primary">Religions</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4">
            {religions.map((religion) => (
              <Button
                key={religion.id}
                asChild
                variant="ghost"
                className="justify-start font-headline text-xl h-12"
                onClick={() => setOpen(false)}
              >
                <Link href={`/${religion.slug}`} className="flex items-center gap-4">
                  <Lotus className="h-5 w-5 text-accent" />
                  {religion.name}
                </Link>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
