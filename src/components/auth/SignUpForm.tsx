'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '@/lib/firebase/client';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { Loader2, User } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  displayName: z.string().min(2, {
    message: 'User Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phoneNumber: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and privacy policy.',
  }),
});

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: '',
      email: '',
      phoneNumber: '',
      password: '',
      acceptedTerms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      // Update auth profile
      await updateProfile(userCredential.user, {
        displayName: values.displayName,
      });

      // Save additional user details to Firestore for the profile page
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        displayName: values.displayName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        createdAt: serverTimestamp(),
      });
      
      toast({
        title: 'Account Created',
        description: "You've been successfully signed up.",
      });
      router.push('/');
      router.refresh();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="displayName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User className="h-4 w-4" /> User Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Lionel Messi" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 123 456 7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="acceptedTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="grid gap-1.5 leading-none">
                  <FormLabel className="text-sm text-muted-foreground">
                    By clicking continue, you agree to our{' '}
                    <Link
                      href="/terms"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/privacy"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Privacy Policy
                    </Link>.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full font-headline transition-all duration-300 hover:bg-background text-foreground hover:text-foreground border-2 border-transparent hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
}
