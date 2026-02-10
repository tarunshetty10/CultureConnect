import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { religions } from '@/lib/data/religions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center my-12 md:my-24">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary">
          CultureConnect
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
          Embark on a journey to explore the rich tapestry of global cultures and traditions. Discover connections, celebrate diversity, and broaden your understanding of the world's faiths.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button 
            asChild 
            size="lg" 
            className="font-headline transition-all duration-300 hover:bg-background text-foreground hover:text-foreground border-2 border-transparent hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
          >
            <Link href="#explore">Explore Religions</Link>
          </Button>
        </div>
      </section>

      <section id="explore" className="my-16">
        <h2 className="font-headline text-4xl font-bold text-center mb-12">
          Featured Religions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {religions.map((religion) => {
            const image = PlaceHolderImages.find(p => p.id === religion.heroImageId);
            return (
              <Link href={`/${religion.slug}`} key={religion.id} className="group">
                <Card className="h-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 border-transparent hover:border-primary">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                       {image && <Image src={image.imageUrl} alt={religion.name} width={600} height={400} data-ai-hint={image.imageHint} className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"/>}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-2xl">{religion.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                      {religion.summary}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  );
}
