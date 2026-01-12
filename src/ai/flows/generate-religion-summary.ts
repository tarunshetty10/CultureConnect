'use server';

/**
 * @fileOverview An AI agent to generate a concise summary of a given religion.
 *
 * - generateReligionSummary - A function that generates a summary of a religion.
 * - GenerateReligionSummaryInput - The input type for the generateReligionSummary function.
 * - GenerateReligionSummaryOutput - The return type for the generateReligionSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateReligionSummaryInputSchema = z.object({
  religionName: z.string().describe('The name of the religion to summarize.'),
  religionDetails: z.string().describe('Detailed information about the religion.'),
});
export type GenerateReligionSummaryInput = z.infer<typeof GenerateReligionSummaryInputSchema>;

const GenerateReligionSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the religion.'),
  progress: z.string().describe('Progress of the flow'),
});
export type GenerateReligionSummaryOutput = z.infer<typeof GenerateReligionSummaryOutputSchema>;

export async function generateReligionSummary(
  input: GenerateReligionSummaryInput
): Promise<GenerateReligionSummaryOutput> {
  return generateReligionSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateReligionSummaryPrompt',
  input: {schema: GenerateReligionSummaryInputSchema},
  output: {schema: GenerateReligionSummaryOutputSchema},
  prompt: `You are an expert in comparative religion.  Please provide a concise summary of the key tenets and cultural significance of the following religion:

Religion Name: {{{religionName}}}
Religion Details: {{{religionDetails}}}`, 
});

const generateReligionSummaryFlow = ai.defineFlow(
  {
    name: 'generateReligionSummaryFlow',
    inputSchema: GenerateReligionSummaryInputSchema,
    outputSchema: GenerateReligionSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      ...output!,
      progress: 'Generated a concise, AI-generated summary of the religion.',
    };
  }
);
