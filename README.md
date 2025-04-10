# Barrel Master BBQ

This is the official site for Barrel Master BBQ — a mobile BBQ operation that partners with local breweries. Built with [Next.js](https://nextjs.org/) and Tailwind CSS.

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/barrelmasterbbq.git
cd barrelmasterbbq
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment variables

Create a .env.local file in the root of the project and add the following:

```env
MENU_API_URL=https://your-google-apps-script-url
NEXT_PUBLIC_CALENDAR_URL=https://calendar.google.com/calendar/embed?src=your-calendar-id
NEXT_PUBLIC_ORDER_FORM_URL=https://your-order-form-link
```

These values are used to fetch the live menu, display your public calendar, and link to your order form.

### 4. Run the dev server

```bash
npm run dev
```

Then visit http://localhost:3000 to see the site locally.

## 🏗 Building for Production

If you’re hosting as a static site (like on Netlify):

```bash
npm run build
```

The output will be in the /out folder — you can upload that to Netlify or any static hosting provider.

## 📦 Tech Stack

- Next.js
- Tailwind CSS
- Google Sheets (as a mini CMS)
- Google Calendar (for upcoming stops)

## 📬 License

MIT — do what you want, just don’t mess with our brisket.
