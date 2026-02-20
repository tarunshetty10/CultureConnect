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
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
    ],
  },
  prompt: `You are a wise spiritual sage. Generate a short, powerful, and motivational spiritual quote based on the keyword provided. 
  Ensure the quote is respectful and promotes peace, growth, and cross-cultural understanding.

  Keyword: {{{keyword}}}`,
});

const generateSpiritualQuoteFlow = ai.defineFlow(
  {
    name: 'generateSpiritualQuoteFlow',
    inputSchema: GenerateSpiritualQuoteInputSchema,
    outputSchema: GenerateSpiritualQuoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('No quote could be generated for this keyword. It might have been blocked by safety filters.');
    }
    return output;
  }
);
