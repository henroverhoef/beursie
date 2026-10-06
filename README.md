# Beursie

A pocket budget tracker that installs on your phone like an app. Logging a purchase takes three taps: amount, category, save.

Your transactions are stored only on the device you use, in the browser's storage for this site. Nothing is sent to a server, so this folder contains no personal data and can safely be public.

## Put it online (once, about 5 minutes)

To install on a phone and work offline, the app has to be served over https. GitHub Pages does this for free:

1. Create a new repository on github.com, e.g. `beursie`.
2. Click **Add file → Upload files** and drag in everything in this folder. Do **not** upload `budget-starter.json`; it holds your personal budget.
3. Open **Settings → Pages** and set Source to *Deploy from a branch*, branch `main`, folder `/ (root)`. Save.
4. After a minute your app is at `https://<your-username>.github.io/beursie/`.

Vercel or Netlify work the same way: import the repo, or drag the folder in. No build step is needed.

## Install on your phone

- **Android (Chrome):** open the link, then tap ⋮ → **Add to Home screen / Install app**.
- **iPhone (Safari):** tap Share → **Add to Home Screen**.

On first open, tap **Load starter file** and pick `budget-starter.json`. Then go to **Budget → Import bank statement** and choose your ABSA CSV to bring in your history.

## Everyday use

- **Add:** choose *Spent*, *Received* (income) or *Moved* (between your own accounts), type the amount, tap a category, then tap Save. Swipe the category strip sideways for more; your most-used ones come first. Savings like the lumpsum fund are categories too, so a contribution is logged as *Spent → Lumpsum fund*. Going over the warning level pops up a message (and a phone notification, if you've turned those on).
- **Overview:** tap any warning, category or the fund card to jump to its transactions. Phone back button returns you.
   shows what's left to spend this budget month (25th to 24th) and a daily allowance. It also shows warnings, every category's progress, your lumpsum fund against its emergency floor, and a 6-month trend.
- **Today:** your flexible budget left, divided by the days left, is what you can spend today. Spending today fills the bar; tomorrow it recalculates, so overspending today lowers tomorrow's number (and underspending raises it). The Add screen shows today's bar too.
- **Planned vs actual:** a running-total chart of this month's flexible spending against an even pace to budget, with a dotted line showing where you'll end up at your current pace.
- **History:** browse by budget month and filter by category. Tap any entry to edit it. When you give an imported shop a category, Beursie remembers it for next time.
- **Budget:** change amounts, add or remove categories, and set up monthly payments that are added automatically (rent, tithe, subscriptions, savings).

## Bank imports and doubles

Bank imports don't create duplicates. If you logged R85 by hand and it later shows up on your statement, the import matches it to your entry. It does the same for automatic monthly payments when the amount and date are close. Rows you've already imported are skipped.

## Backups and sharing with Claude

- **Back up everything** saves a `.json` file. Keep it in Google Drive. **Restore** loads it on a new phone.
- **Export CSV for Claude** gives you every transaction plus your budget in one file. Attach it to a chat for a monthly review.
- **Overview → Copy summary for Claude** copies a short text summary you can paste into a chat.

Beursie reminds you if your last backup is more than 30 days old. If you clear your browser's site data or uninstall the app, everything not backed up is lost.

## Updating the app

Edit `index.html`, change `VERSION` in `sw.js` (e.g. `beursie-v2`), and upload both files again. Your data is not affected.
