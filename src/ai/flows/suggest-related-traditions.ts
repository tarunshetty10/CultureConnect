'use server';

/**
 * @fileOverview Suggests related traditions or festivals across different religions to promote cross-cultural understanding.
 *
 * - suggestRelatedTraditions - A function that suggests related traditions.
 * - SuggestRelatedTraditionsInput - The input type for the suggestRelatedTraditions function.
 * - SuggestRelatedTraditionsOutput - The return type for the suggestRelatedTraditions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelatedTraditionsInputSchema = z.object({
  traditionName: z.string().describe('The name of the tradition or festival the user is currently viewing.'),
  traditionDescription: z.string().describe('A detailed description of the tradition or festival.'),
  religion: z.string().describe('The religion the tradition or festival belongs to.'),
});

export type SuggestRelatedTraditionsInput = z.infer<typeof SuggestRelatedTraditionsInputSchema>;

const SuggestRelatedTraditionsOutputSchema = z.array(z.object({
  name: z.string().describe('The name of the related tradition or festival.'),
  religion: z.string().describe('The religion the related tradition or festival belongs to.'),
  description: z.string().describe('A brief description of the related tradition or festival.'),
  culturalSignificance: z.string().describe('Explanation of the cultural significance of the tradition or festival')
})).describe('A list of related traditions or festivals from different religions.');

export type SuggestRelatedTraditionsOutput = z.infer<typeof SuggestRelatedTraditionsOutputSchema>;

export async function suggestRelatedTraditions(input: SuggestRelatedTraditionsInput): Promise<SuggestRelatedTraditionsOutput> {
  return suggestRelatedTraditionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelatedTraditionsPrompt',
  input: {schema: SuggestRelatedTraditionsInputSchema},
  output: {schema: SuggestRelatedTraditionsOutputSchema},
  prompt: `Based on the tradition or festival named "{{traditionName}}" from the religion "{{religion}}", which is described as "{{traditionDescription}}", suggest other related traditions or festivals from DIFFERENT religions.\n
  The goal is to promote cross-cultural understanding by showing similarities and connections between different faiths.\n
  Please provide a list of related traditions or festivals, including their name, religion, a brief description, and cultural significance. Focus on identifying traditions that share similar themes, origins, or purposes.\n
  Format your response as a JSON array of objects, where each object represents a related tradition or festival.\n  `,
});

const suggestRelatedTraditionsFlow = ai.defineFlow(
  {
    name: 'suggestRelatedTraditionsFlow',
    inputSchema: SuggestRelatedTraditionsInputSchema,
    outputSchema: SuggestRelatedTraditionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      ...output!,
      progress: 'Suggested related traditions and festivals across different religions to promote cross-cultural understanding.',
    };
  }
);

