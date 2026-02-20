'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { religions } from '@/lib/data/religions';
import { activityDetails } from '@/lib/data/activity-details';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function ActivityDetailPage({
  params,
}: {
  params: Promise<{ religion: string; activityId: string }>;
}) {
  const { religion: religionSlug, activityId } = use(params);
  const religion = religions.find((r) => r.slug === religionSlug);
  const activity = religion?.activities?.find((a) => a.id === activityId);
  const detail = activity ? activityDetails[activityId] : null;

  if (!religion || !activity) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `I'm interested in booking ${activity.name} via CultureConnect`
  )}`;

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <Link
        href={`/${religionSlug}/activities`}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {religion.slug === 'hinduism' ? 'Poojas' : 'Services'}
      </Link>

      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          {activity.name}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {activity.description}
        </p>
      </header>

      {/* Example Photos Gallery */}
      <section className="mb-16">
        <h2 className="font-headline text-2xl font-semibold text-foreground mb-6">
          Example Photos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {detail?.galleryImageIds?.map((imageId, idx) => {
            const img = PlaceHolderImages.find((p) => p.id === imageId);
            return img ? (
              <div
                key={`${imageId}-${idx}`}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg"
              >
                <Image
                  src={img.imageUrl}
                  alt={`${activity.name} example ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ) : null;
          })}
          {!detail?.galleryImageIds?.length && (
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/20 col-span-full max-w-2xl mx-auto">
              {(() => {
                const img = PlaceHolderImages.find((p) => p.id === activity.imageId);
                return img ? (
                  <Image
                    src={img.imageUrl}
                    alt={activity.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                ) : null;
              })()}
            </div>
          )}
        </div>
      </section>

      {/* YouTube Video */}
      {detail?.youtubeVideoId && (
        <section className="mb-16">
          <h2 className="font-headline text-2xl font-semibold text-foreground mb-6">
            Watch How It&apos;s Done
          </h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border-2 border-primary/20 shadow-xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${detail.youtubeVideoId}`}
              title={`${activity.name} - Video guide`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* How It's Done / Information */}
      <section className="mb-16">
        <h2 className="font-headline text-2xl font-semibold text-foreground mb-6">
          About This {religion.slug === 'hinduism' ? 'Pooja' : 'Service'}
        </h2>
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="font-headline text-xl">{activity.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">{activity.description}</p>
            {detail?.howItsDone && detail.howItsDone.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="font-headline font-semibold text-foreground">
                  How It Is Performed
                </h3>
                <ul className="space-y-2 list-disc pl-5 text-foreground/90">
                  {detail.howItsDone.map((step, i) => (
                    <li key={i} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Book on WhatsApp */}
      <section className="text-center">
        <Button
          size="lg"
          variant="default"
          className="font-headline transition-all duration-300 hover:bg-background text-foreground hover:text-foreground border-2 border-transparent hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
          asChild
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send className="mr-2 h-5 w-5" />
            Book on WhatsApp
          </a>
        </Button>
      </section>
    </div>
  );
}
