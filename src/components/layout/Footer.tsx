import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="border-t border-border mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold font-headline text-primary">CultureConnect</h2>
          </div>
          <div className="grid grid-cols-3 gap-8 md:col-span-3">
            <div>
              <h3 className="font-headline text-lg font-semibold">Explore</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/#explore" className="hover:text-primary transition-colors">Religions</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61588366056555" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" /> Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/cultureconnect2026?igsh=bXl4NGducmx0dDd0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" /> Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CultureConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
