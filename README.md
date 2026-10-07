# Beursie

A pocket budget tracker that installs on your phone like an app. Logging a purchase takes three taps: amount, category, save.

Your transactions are stored only on your device: in the browser's storage for this site, and in a save file you choose. Nothing is sent to a server, so this folder contains no personal data and can safely be public.

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

On first open, a short tip walks you through installing Beursie as an app and turning on notifications. Then tap **Load starter file** and pick `budget-starter.json`. Then go to **Budget → Import bank statement** and choose your ABSA CSV to bring in your history.

## Everyday use

- **Add:** choose *Spent*, *Received* (income) or *Moved* (between your own accounts), type the amount, tap a category, then tap Save. Swipe the category strip sideways for more; your most-used ones come first. Savings like the lumpsum fund are categories too, so a contribution is logged as *Spent → Lumpsum fund*. Going over the warning level pops up a message (and a phone notification, if you've turned those on).
- **Overview:** tap any warning, category or the fund card to jump to its transactions. Phone back button returns you.
   shows what's left to spend this budget month (25th to 24th) and a daily allowance. It also shows warnings, every category's progress, your lumpsum fund against its emergency floor, and a 6-month trend.
- **Today:** your flexible budget left, divided by the days left, is what you can spend today. Spending today fills the bar; tomorrow it recalculates, so overspending today lowers tomorrow's number (and underspending raises it). The Add screen shows today's bar too.
- **Planned vs actual:** a running-total chart of this month's flexible spending against an even pace to budget, with a dotted line showing where you'll end up at your current pace.
- **History:** browse by budget month and filter by category. Tap any entry to edit it. When you give an imported shop a category, Beursie remembers it for next time.
- **Budget:** change amounts, add or remove categories, and set up monthly payments that are added automatically (rent, tithe, subscriptions, savings).

## Favourites, goals and the month review

- **Favourites:** the ★ row on the Add screen logs a purchase in one tap, and Undo appears for a few seconds in case you tapped by mistake. Save one from the Add screen with "☆ Save … as a favourite", or add suggestions in Budget → Favourites. Suggestions are purchases you've made 3 or more times at the same amount.
- **Fund goals:** go to Overview → Lumpsum fund → Goals. Goals sit inside the fund, above the emergency floor. When you log a fund contribution and the floor is already full, each goal gets its "per contribution" amount until it reaches its target, and the rest stays free money. You can also move money in or out of a goal by hand. When you pay for something from the fund, choose which goal it came from.
- **Month review:** opens after each budget month ends (Overview banner, or Budget → Month review). It shows money in, living costs, savings and each category against its budget.
  - **Check against your bank:** pick the month's bank CSV. Beursie lists what it missed, where amounts differ and what's in Beursie but not on the statement. Nothing changes until you tap to add or fix.
  - **Roll over:** moves unspent flexible money into the lumpsum fund. Do the same transfer in your banking app.
- **Icon shortcuts:** long-press the Beursie icon for Add expense, Today, Overview and Month review. Android picks up new shortcuts when it next refreshes the installed app, usually within a day. If they don't appear, remove and reinstall the app (back up first).

## Backing up (a few taps, no setup)

The app's own copy of your data lives in the browser, so clearing Chrome's **Cookies and site data** erases it. (Clearing only **Cached images and files** is safe.)

The Overview shows how many changes aren't backed up yet, e.g. *"28 changes not backed up yet"*. Tap it (or **Budget → Backup → Back up now**), choose **Drive** in the share menu and tap **Save**. Each backup is a new dated file like `beursie-backup-2026-10-07.json`, so you also keep a history; delete old ones whenever you like. On a computer the file goes to Downloads.

If the browser is ever cleared, or you get a new phone, open Beursie, tap **Restore my backup** and pick the newest file.

## Google Drive backup (advanced, optional)

You don't need this: sharing a backup to Drive (above) does the same job. This option connects to Drive directly instead, so it can back up weekly by itself, but it needs the setup below. Beursie can save its backup file to your own Google Drive every week. It can only see the file it creates, not the rest of your Drive. Google requires you to register the app once:

1. Go to https://console.cloud.google.com and create a project called **Beursie**.
2. Open **APIs & Services → Library**, search **Google Drive API** and click **Enable**.
3. Open **Google Auth Platform** (called *OAuth consent screen* in older layouts) and click **Get started**. Enter the app name Beursie and your email. Choose **External** as the audience, then create it.
4. Under **Audience → Test users**, add your own Gmail address. Leaving the app in *Testing* is fine for personal use.
5. Open **Clients → Create client**, choose **Web application**, and under **Authorized JavaScript origins** add `https://henroverhoef.github.io`. Create it and copy the **Client ID** (it ends in `.apps.googleusercontent.com`).
6. In Beursie, go to **Budget → Google Drive backup**, paste the client ID, tap **Save**, then **Connect Google Drive**. Google will say the app isn't verified; tap **Continue**, since it's your own app.

After that, Beursie backs up automatically once a week, the next time you log something. Google may flash a sign-in window briefly while it does this. **Restore from Drive** brings everything back on a new phone. A client ID is not a secret, but it only works from your GitHub Pages address.

## Bank imports and doubles

Bank imports don't create duplicates. If you logged R85 by hand and it later shows up on your statement, the import matches it to your entry. It does the same for automatic monthly payments when the amount and date are close. Rows you've already imported are skipped.

## Backups and sharing with Claude

- **Back up now** saves a `.json` file. Keep it in Google Drive. **Restore a backup** loads it on a new phone.
- **Export CSV for Claude** gives you every transaction plus your budget in one file. Attach it to a chat for a monthly review.
- **Overview → Copy summary for Claude** copies a short text summary you can paste into a chat.

Anything logged since your last backup is lost if you clear your browser's site data or uninstall the app, so back up now and then.

## Updating the app

Edit `index.html`, change `VERSION` in `sw.js` (e.g. `beursie-v2`), and upload both files again. Your data is not affected.
