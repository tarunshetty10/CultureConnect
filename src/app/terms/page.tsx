import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | CultureConnect',
  description: 'Terms of Service for using the CultureConnect platform.',
};

const sections = [
  {
    title: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using CultureConnect, you agree to comply with these Terms of Service.',
      'If you do not agree, you must not use the website.',
    ],
  },
  {
    title: 'Eligibility',
    paragraphs: [
      'Users must be at least 18 years old to create an account.',
      'By using the platform, you confirm that the information provided is accurate and truthful.',
    ],
  },
  {
    title: 'Account Registration',
    bullets: [
      'Users are responsible for maintaining the confidentiality of their login credentials.',
      'You agree not to share your account with others.',
      'CultureConnect reserves the right to suspend accounts that provide false information.',
    ],
  },
  {
    title: 'Platform Purpose',
    paragraphs: [
      'CultureConnect acts as a platform to discover pooja services and connect users with service providers.',
      'We do not directly perform poojas and do not guarantee availability or quality of services. We only facilitate communication between users and service providers.',
    ],
  },
  {
    title: 'Booking & Payments',
    paragraphs: [
      'Bookings made via WhatsApp or other external platforms are between the user and the service provider.',
      'CultureConnect is not responsible for payment disputes, cancellations, or refunds unless explicitly stated.',
    ],
  },
  {
    title: 'User Conduct',
    paragraphs: ['Users agree NOT to:'],
    bullets: [
      'Use the platform for illegal activities.',
      'Post false, misleading, or harmful content.',
      'Attempt to hack or disrupt the website.',
      'Harass service providers or other users.',
    ],
    paragraphs2: ['Violation may result in account suspension.'],
  },
  {
    title: 'Intellectual Property',
    bullets: [
      'All website content (including logos, design, text, and images) belongs to CultureConnect.',
      'Users may not copy, reproduce, or distribute content without prior written permission.',
    ],
  },
  {
    title: 'Third-Party Links',
    paragraphs: [
      'CultureConnect may redirect users to third-party services (such as WhatsApp).',
      'We are not responsible for third-party policies, content, or actions.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'CultureConnect shall not be liable for service quality issues, financial losses from bookings, technical errors, or website downtime.',
      'To the maximum extent permitted by law, CultureConnect is not liable for any indirect, incidental, or consequential damages arising from the use of the platform.',
      'Use of the platform is at your own risk.',
    ],
  },
  {
    title: 'Termination',
    bullets: [
      'We reserve the right to suspend or terminate accounts.',
      'We may remove content or restrict access without prior notice for violations of these Terms.',
    ],
  },
  {
    title: 'Changes to Terms',
    paragraphs: [
      'We may update these Terms from time to time.',
      'Continued use of the website after changes means you accept the updated Terms.',
    ],
  },
  {
    title: 'Governing Law',
    paragraphs: ['These Terms shall be governed by the laws of India.'],
  },
  {
    title: 'Contact Information',
    paragraphs: [
      'For questions regarding these Terms, contact us at:',
      'support@cultureconnect.com',
    ],
  },
] as const;

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-8rem)]">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
            Terms of Service – CultureConnect
          </h1>
          <p className="text-muted-foreground text-lg">
            Please read these Terms carefully before using the CultureConnect platform.
          </p>
        </header>

        <div className="bg-card rounded-2xl border-2 border-primary/30 shadow-xl overflow-hidden">
          <div className="p-8 md:p-10 space-y-10">
            <ol className="space-y-10 list-decimal pl-5 marker:text-primary">
              {sections.map((section, idx) => (
                <li key={section.title} className="pl-1">
                  <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">
                    {section.title}
                  </h2>

                  {'paragraphs' in section &&
                    section.paragraphs?.map((p) => (
                      <p
                        key={`${section.title}-${p}`}
                        className="text-foreground/90 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}

                  {'bullets' in section && section.bullets && (
                    <ul className="mt-3 space-y-2 list-disc pl-5 text-foreground/90">
                      {section.bullets.map((b) => (
                        <li key={`${section.title}-${b}`} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {'paragraphs2' in section &&
                    section.paragraphs2?.map((p) => (
                      <p
                        key={`${section.title}-p2-${p}`}
                        className="mt-3 text-foreground/90 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}

                  {idx === sections.length - 1 && (
                    <div className="mt-4 rounded-lg border border-border bg-muted/40 p-4">
                      <p className="text-sm text-muted-foreground">
                        If you contact us about these Terms, please include relevant details so we can
                        respond quickly.
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

