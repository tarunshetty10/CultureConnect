import { notFound } from 'next/navigation';
import { religions } from '@/lib/data/religions';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

type ReligionPageProps = {
  params: {
    religion: string;
  };
};

export default function ReligionPage({ params }: ReligionPageProps) {
  const religion = religions.find((r) => r.slug === params.religion);

  if (!religion) {
    notFound();
  }

  const heroImage = PlaceHolderImages.find(p => p.id === religion.heroImageId);

  return (
    <article>
      <header className="relative h-[50vh] flex items-center justify-center text-primary-foreground">
        {heroImage && <Image src={heroImage.imageUrl} alt={religion.name} fill data-ai-hint={heroImage.imageHint} className="object-cover -z-10 brightness-[0.4]" />}
        <div className="text-center p-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg transition-all duration-500 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] cursor-default">
            {religion.name}
          </h1>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl">About {religion.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg/relaxed">{religion.description}</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Accordion type="multiple" className="w-full space-y-8" defaultValue={['traditions', 'festivals', 'rituals']}>
            {religion.traditions.length > 0 && (
              <AccordionItem value="traditions">
                <AccordionTrigger className="font-headline text-3xl text-accent hover:no-underline">Traditions</AccordionTrigger>
                <AccordionContent className="pt-4 space-y-6">
                  {religion.traditions.map((tradition, index) => (
                    <div key={tradition.id}>
                      <h3 className="font-headline text-2xl text-primary">{tradition.name}</h3>
                      <p className="mt-2 text-base/relaxed">{tradition.description}</p>
                      {index < religion.traditions.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )}

            {religion.festivals.length > 0 && (
              <AccordionItem value="festivals">
                <AccordionTrigger className="font-headline text-3xl text-accent hover:no-underline">Festivals</AccordionTrigger>
                <AccordionContent className="pt-4 space-y-6">
                  {religion.festivals.map((festival, index) => (
                     <div key={festival.id}>
                      <h3 className="font-headline text-2xl text-primary">{festival.name}</h3>
                      <p className="mt-2 text-base/relaxed">{festival.description}</p>
                      {index < religion.festivals.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )}
            
            {religion.rituals.length > 0 && (
              <AccordionItem value="rituals">
                <AccordionTrigger className="font-headline text-3xl text-accent hover:no-underline">Rituals</AccordionTrigger>
                <AccordionContent className="pt-4 space-y-6">
                  {religion.rituals.map((ritual, index) => (
                     <div key={ritual.id}>
                      <h3 className="font-headline text-2xl text-primary">{ritual.name}</h3>
                      <p className="mt-2 text-base/relaxed">{ritual.description}</p>
                      {index < religion.rituals.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </section>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return religions.map((religion) => ({
    religion: religion.slug,
  }));
}
