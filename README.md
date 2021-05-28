# Meta Data Studio

A site that shows the Google Data Studio reports from the Google Analytics that tracks the site with the Google Data Studio reports.

## Building
Create a new Google Sheets file:
- Press Add-Ons --> Get Add-Ons
- Add the Google Analytics/google-analytics-add-ons
- Use it to create a new report to your liking
- In the Report Configuration sheet, change the "End Date" to today
- Use the Add-Ons' schedule reports to let it update as frequent as you want

In Google Data Studio:
- Connect to the Google Sheet you made  preeviously
- Set the freshness to as much as you want (I picked 15 minutes)
- Press File -> Embed report, placing the iframe in app/iframe.html

- Install gulp through `npm install --global gulp-cli`
- Run `npm install` to install build dependancies
- Place your UA-analytics (not Google Analytics 4) tracking snippet in app/header.html
- Simply run `gulp`, your Meta-Data-Studio is available in the docs folder