'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the disclaimer in this session
    const hasSeenDisclaimer = sessionStorage.getItem('cultureconnect_disclaimer_seen');
    if (!hasSeenDisclaimer) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('cultureconnect_disclaimer_seen', 'true');
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-2xl border-4 border-primary bg-card/95 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        <AlertDialogHeader className="relative p-6">
          {/* Decorative Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-accent -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-accent translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-accent -translate-x-2 translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-accent translate-x-2 translate-y-2"></div>

          <AlertDialogTitle className="font-headline text-3xl text-primary text-center mb-4">
            Disclaimer
          </AlertDialogTitle>
          <AlertDialogDescription className="text-foreground text-lg leading-relaxed text-center font-body">
            CultureConnect is created to promote cultural understanding and appreciation. The content on this platform is intended only for educational and informational purposes. We respect all religions, traditions, and communities, and there is no intention to offend or hurt the sentiments of any individual or group. Our goal is to bring people and cultures together through awareness, respect, and shared knowledge.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-center sm:justify-center p-4">
          <AlertDialogAction
            onClick={handleClose}
            className="font-headline text-lg px-8 h-12 transition-all duration-300 hover:bg-background text-foreground hover:text-foreground border-2 border-transparent hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
          >
            I Understand
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
