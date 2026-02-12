'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, User, MessageSquare } from 'lucide-react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/client';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const wordCount = (str: string) => {
  return str.trim().split(/\s+/).length;
};

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .refine((val) => wordCount(val) <= 300, {
      message: 'Message cannot exceed 300 words.',
    }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    setIsSubmitting(true);
    const submissionId = crypto.randomUUID();
    const submissionRef = doc(db, 'contact_submissions', submissionId);
    
    // Non-blocking Firestore write
    setDoc(submissionRef, {
      id: submissionId,
      ...values,
      submissionDate: new Date().toISOString(),
    })
    .then(() => {
      toast({
        title: 'Message Sent!',
        description: "We've received your message and will get back to you soon.",
      });
      form.reset();
    })
    .catch(async (serverError) => {
      const permissionError = new FirestorePermissionError({
        path: submissionRef.path,
        operation: 'create',
        requestResourceData: values,
      });
      errorEmitter.emit('permission-error', permissionError);
      
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-8rem)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Updated with a prominent borderline */}
        <div className="bg-card p-8 rounded-2xl border-2 border-primary shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="h-4 w-4" /> Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="h-4 w-4" /> Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} className="bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" /> Your Message
                    </FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[200px] bg-background resize-none" 
                          {...field} 
                        />
                        <div className="text-right text-xs text-muted-foreground">
                          {field.value ? wordCount(field.value) : 0} / 300 words
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-headline h-12 text-lg transition-all duration-300 hover:bg-background text-foreground hover:text-foreground border-2 border-transparent hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Submit Message'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
