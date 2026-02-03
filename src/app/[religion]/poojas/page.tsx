'use client';

import { use, useState, useMemo } from 'react';
import { religions } from '@/lib/data/religions';
import { notFound } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Search, Send } from 'lucide-react';

export default function PoojasPage({ params }: { params: Promise<{ religion: string }> }) {
  const resolvedParams = use(params);
  const religion = religions.find((r) => r.slug === resolvedParams.religion);

  const [searchQuery, setSearchQuery] = useState('');

  if (!religion || (resolvedParams.religion === 'hinduism' && !religion.poojas)) {
    notFound();
  }

  const filteredPoojas = useMemo(() => {
    if (!religion?.poojas) return [];
    return religion.poojas.filter(pooja => 
      pooja.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pooja.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [religion, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-4">
          Search {religion?.name} Poojas
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover and book sacred rituals and poojas performed with tradition and devotion.
        </p>
      </header>

      <div className="max-w-xl mx-auto mb-16 relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input 
            placeholder="Search for a pooja (e.g. Ganesh, Lakshmi...)" 
            className="pl-10 h-12 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPoojas.length > 0 ? (
          filteredPoojas.map((pooja) => {
            const image = PlaceHolderImages.find(p => p.id === pooja.imageId);
            return (
              <Card key={pooja.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <div className="relative h-56 w-full">
                  {image && (
                    <Image 
                      src={image.imageUrl} 
                      alt={pooja.name} 
                      fill 
                      data-ai-hint={image.imageHint}
                      className="object-cover"
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{pooja.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {pooja.description}
                  </p>
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Button variant="default" className="flex-1 font-headline">
                      Explore Now
                    </Button>
                    <Button variant="outline" className="flex-1 font-headline border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                      <a href={`https://wa.me/1234567890?text=I'm interested in booking ${pooja.name}`} target="_blank" rel="noopener noreferrer">
                        <Send className="mr-2 h-4 w-4" />
                        Book on WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-muted-foreground">No poojas found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
