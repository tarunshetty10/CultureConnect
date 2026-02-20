'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { generateSpiritualQuote } from '@/ai/flows/generate-spiritual-quote';
import { useToast } from '@/hooks/use-toast';

export default function QuoteGenerator() {
  const [keyword, setKeyword] = useState('');
  const [quoteData, setQuoteData] = useState<{ quote: string; attribution: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    const trimmed = keyword.trim();
    if (!trimmed) return;

    if (trimmed.split(/\s+/).length > 1) {
      toast({
        variant: 'destructive',
        title: 'Validation Error',
        description: 'Please enter only one word.',
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await generateSpiritualQuote({ keyword: trimmed });
      setQuoteData(result);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'The keyword might be inappropriate or there was a system error.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="my-24 max-w-4xl mx-auto px-4">
      <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center pb-2">
          <CardTitle className="font-headline text-3xl md:text-4xl text-primary flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            Spiritual Quote Generator
            <Sparkles className="h-6 w-6 text-accent" />
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Enter a single word to find inner peace and motivation.
          </p>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="e.g., Peace, Love, Strength..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="h-12 text-lg bg-background"
              maxLength={20}
            />
            <Button
              onClick={handleGenerate}
              disabled={isLoading || !keyword.trim()}
              className="h-12 font-headline text-lg transition-all duration-300 hover:bg-background text-foreground hover:text-foreground border-2 border-transparent hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] px-8"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Seeking Wisdom...
                </>
              ) : (
                'Generate Quote'
              )}
            </Button>
          </div>

          {quoteData && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="p-8 rounded-xl bg-primary/5 border border-primary/10 relative">
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif opacity-50">&ldquo;</div>
                <p className="text-2xl md:text-3xl font-body italic text-center leading-relaxed text-foreground">
                  {quoteData.quote}
                </p>
                <div className="absolute -bottom-10 -right-4 text-6xl text-primary/20 font-serif opacity-50 rotate-180">&ldquo;</div>
                <p className="mt-6 text-right font-headline text-xl text-accent">
                  — {quoteData.attribution}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
