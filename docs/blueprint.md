# **App Name**: CultureConnect

## Core Features:

- User Authentication: Secure user sign-up and login using email/password and phone number (OTP-based) via Firebase Authentication. Redirect authenticated users to the Home page.
- Home Page with Preview Mode: Display a welcome section with highlights of religions, traditions, and cultural categories. Implement a read-only mode for non-logged-in users to preview the web app.
- Navigation Drawer: Implement a circular floating menu icon that opens a left-side sliding panel. The panel includes a main heading 'Religions' with clickable text buttons for different religions.
- Religion-Specific Pages: Create dedicated pages for each religion with a structured layout to support traditions, festivals, rituals, and cultural information. Pages will serve as a tool that the LLM will analyze to create informative and tailored cultural content and interactions.
- Firestore Integration: Use Firestore database for saving the articles related to traditions, festivals, rituals and cultural information of religions. Firebase will also enable authentication using phone number and email/password

## Style Guidelines:

- Primary color: Saffron (#FF9933), reminiscent of traditional Indian colors and symbolizing sacrifice and courage.
- Background color: Light beige (#F5F5DC), a muted, earthy tone providing a subtle traditional feel.
- Accent color: Deep green (#006400), complementing the saffron and evoking growth and auspiciousness.
- Body font: 'Literata', a transitional serif with a literary feel, for body text.
- Headline font: 'Belleza', a humanist sans-serif, for headings and short chunks of text; pair with 'Literata' for body text
- Use culturally relevant icons, inspired by traditional Indian art and symbols.
- Implement a responsive, mobile-friendly design with a clean, component-based structure, optimized for both phones and laptops.
- Use smooth, subtle animations for menu opening and page transitions to enhance the user experience.