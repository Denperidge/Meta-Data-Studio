# Meta Data Studio

A site that shows the Google Data Studio reports from the Google Analytics that tracks the site with the Google Data Studio reports.

## Building
- Place your analytics tracking snippet in header.html
- `npm install --global gulp-cli`
- In this directory run `npm install`
- Simply run `gulp`

Create a new Google Sheets file:
- Press Add-Ons --> Get Add-Ons
- Add the Google Analytics/google-analytics-add-ons
- Use it to create a new report
- In the Report Configuration sheet, change the "End Date" to today
- Use the Add-Ons' schedule reports to let it update as frequent as you want

In Google Data Studio:
- Connect to the CSV
- Set the freshness to as much as you want
- File -> Embed report, place the iframe in iframe.html