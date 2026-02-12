
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-hero');

  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-8rem)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
        {/* Left Side: Image */}
        <div className="relative min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 bg-muted">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt="About CultureConnect"
              fill
              data-ai-hint={aboutImage.imageHint}
              className="object-cover"
              priority
            />
          )}
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
              About CultureConnect
            </h1>
            <div className="h-1.5 w-24 bg-accent rounded-full mb-8"></div>
          </div>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="font-headline text-2xl font-semibold text-accent mb-3">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                Empowering individuals to explore and connect through the rich tapestry of global traditions. CultureConnect is dedicated to fostering cross-cultural understanding and appreciation.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-accent mb-3">Connecting Traditions</h2>
              <p className="text-lg leading-relaxed">
                CultureConnect is an inclusive platform designed to bridge the gap between diverse cultures and religions. We believe that by exploring the sacred rituals and festive celebrations of the world, we can build a more connected and empathetic global community.
              </p>
            </section>

            <section className="pt-4">
              <p className="text-lg leading-relaxed font-medium italic border-l-4 border-primary pl-4 py-2">
                "In diversity, there is beauty and there is strength."
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
