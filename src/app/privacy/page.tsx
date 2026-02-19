import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CultureConnect',
  description: 'Privacy Policy for CultureConnect.',
};

const sections = [
  {
    title: 'Information We Collect',
    bullets: [
      'Full Name',
      'Email Address',
      'Phone Number',
      'Location (City/State)',
      'Login credentials (via Firebase Authentication)',
      'Information submitted while booking pooja services',
      'Device information (IP address, browser type)',
    ],
  },
  {
    title: 'How We Use Your Information',
    bullets: [
      'Create and manage user accounts',
      'Allow users to explore and book pooja services',
      'Connect users with service providers via WhatsApp',
      'Improve website functionality',
      'Respond to customer queries',
      'Prevent fraud and misuse',
    ],
  },
  {
    title: 'Authentication & Security',
    paragraphs: [
      'We use Firebase Authentication for secure login.',
      'Passwords are encrypted and not stored in plain text.',
      'We take reasonable measures to protect user data from unauthorized access.',
    ],
  },
  {
    title: 'Sharing of Information',
    paragraphs: ['We do not sell or rent personal information. We may share information:'],
    bullets: [
      'With pooja service providers (only necessary booking details)',
      'When required by law',
      'To prevent fraud or misuse',
    ],
  },
  {
    title: 'Cookies & Tracking',
    bullets: [
      'We may use cookies to improve user experience.',
      'Cookies help remember login sessions and preferences.',
      'Users can disable cookies in browser settings.',
    ],
  },
  {
    title: 'Third-Party Services',
    paragraphs: ['We may use third-party services such as:'],
    bullets: ['Firebase (Authentication & Database)', 'Hosting providers', 'WhatsApp redirection for booking'],
    paragraphs2: ['These services have their own privacy policies.'],
  },
  {
    title: 'Data Retention',
    bullets: [
      'We retain user data as long as the account is active.',
      'Users can request account deletion.',
      'Deleted data may be removed from our active systems within a reasonable period.',
    ],
  },
  {
    title: 'User Rights',
    paragraphs: ['Users have the right to:'],
    bullets: ['Access their personal data', 'Update their information', 'Request deletion of their account', 'Withdraw consent'],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      'CultureConnect is not intended for children under 13 years of age.',
      'We do not knowingly collect data from children.',
    ],
  },
  {
    title: 'Changes to Privacy Policy',
    paragraphs: [
      'We may update this policy from time to time.',
      'Users will be notified of significant changes.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: ['For any privacy-related concerns, contact us at:', 'support@cultureconnect.com'],
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-8rem)]">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
            Privacy Policy – CultureConnect
          </h1>
          <p className="text-muted-foreground text-lg">
            This policy explains what we collect, why we collect it, and your rights.
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
                      <p key={`${section.title}-${p}`} className="text-foreground/90 leading-relaxed">
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
                      <p key={`${section.title}-p2-${p}`} className="mt-3 text-foreground/90 leading-relaxed">
                        {p}
                      </p>
                    ))}

                  {idx === sections.length - 1 && (
                    <div className="mt-4 rounded-lg border border-border bg-muted/40 p-4">
                      <p className="text-sm text-muted-foreground">
                        If you contact us, please include relevant details so we can respond quickly.
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

