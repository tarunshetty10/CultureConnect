'use server';

/**
 * @fileOverview An AI agent to generate a spiritual motivational quote based on a keyword.
 *
 * - generateSpiritualQuote - A function that generates a quote.
 * - GenerateSpiritualQuoteInput - The input type for the generateSpiritualQuote function.
 * - GenerateSpiritualQuoteOutput - The return type for the generateSpiritualQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSpiritualQuoteInputSchema = z.object({
  keyword: z.string().describe('A single word to base the spiritual quote on.'),
});
export type GenerateSpiritualQuoteInput = z.infer<typeof GenerateSpiritualQuoteInputSchema>;

const GenerateSpiritualQuoteOutputSchema = z.object({
  quote: z.string().describe('The generated spiritual motivational quote.'),
  attribution: z.string().describe('A spiritual figure or source the quote might be attributed to, or "Traditional".'),
});
export type GenerateSpiritualQuoteOutput = z.infer<typeof GenerateSpiritualQuoteOutputSchema>;

export async function generateSpiritualQuote(
  input: GenerateSpiritualQuoteInput
): Promise<GenerateSpiritualQuoteOutput> {
  return generateSpiritualQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSpiritualQuotePrompt',
  input: {schema: GenerateSpiritualQuoteInputSchema},
  output: {schema: GenerateSpiritualQuoteOutputSchema},
  config: {
    temperature: 1.2, // Increased for maximum variety and uniqueness
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_CIVIC_INTEGRITY',
        threshold: 'BLOCK_NONE',
      },
    ],
  },
  prompt: `You are a wise spiritual sage. Generate a short, powerful, and COMPLETELY UNIQUE motivational spiritual quote that EXPLICITLY INCLUDES the keyword provided below. 
  The quote should be inspiring, promote personal growth, and the word should fit naturally within the wisdom shared.
  
  CRITICAL: Do not repeat common proverbs or clichés. Create something fresh, poetic, and insightful that hasn't been heard a thousand times before. 
  Each time you are asked, provide a different perspective or metaphor.

  Keyword: {{{keyword}}}`,
});

const generateSpiritualQuoteFlow = ai.defineFlow(
  {
    name: 'generateSpiritualQuoteFlow',
    inputSchema: GenerateSpiritualQuoteInputSchema,
    outputSchema: GenerateSpiritualQuoteOutputSchema,
  },
  async input => {
    try {
      const {output} = await prompt(input);
      if (!output) {
        // Fallback for unexpected empty output from the LLM
        return {
          quote: `In the quiet space of reflection, the essence of ${input.keyword} illuminates the soul's journey.`,
          attribution: "Ancient Wisdom"
        };
      }
      return output;
    } catch (error) {
      console.error('AI Quote Generation Error:', error);
      // High-level fallback to ensure the UI never shows "Generation Failed" for common errors
      return {
        quote: `True ${input.keyword} begins when the mind finds stillness and the heart finds courage.`,
        attribution: "Spiritual Proverb"
      };
    }
  }
);
