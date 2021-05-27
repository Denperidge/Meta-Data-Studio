function myFunction() {

  var dimension = AnalyticsReporting.newDimension();
  dimension.name = "ga:city";

  var metric = AnalyticsReporting.newMetric();
  metric.expression = "ga:users";

  var req = AnalyticsReporting.newReportRequest();
  req.viewId = '243716240';

  req.dimensions = [dimension];
  req.metrics = [metric];

  var result = AnalyticsReporting.Reports.batchGet({ "reportRequests": [req] });
  console.log(result.reports);


}

function jsonFunction() {

  var dimension = AnalyticsReporting.newDimension();
  dimension.name = "ga:city";

  var metric = AnalyticsReporting.newMetric();
  metric.expression = "ga:users";

  var req = AnalyticsReporting.newReportRequest();
  req.viewId = '243716240';

  req.dimensions = [dimension];
  req.metrics = [metric];

  var result = AnalyticsReporting.Reports.batchGet({
    "reportRequests": [
      {
        "viewId": "243716240",
        "metrics": [
          {
            "expression": "ga:users"
          }],
        "dimensions": [
          {
            "name": "ga:city"
          }]
      }]
  });
  console.log(result.reports[0].data.totals);


}

function json() {
  var req = {
    "reportRequests": [
      {
        "viewId": "243716240",
        "dateRanges": [
          {
            "startDate": "2015-06-15",
            "endDate": "2015-06-30"
          }],
        "metrics": [
          {
            "expression": "ga:sessions"
          }],
        "dimensions": [
          {
            "name": "ga:browser"
          }]
      }]
  }
  AnalyticsReporting.Reports.batchGet(req);
}

// Array from https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function other() {
  var viewId = 'ga:243716240';
  var sheetsId = '1YCP10jeTw6HqyE70z2mHf8VSKLg39SMIH8t9vZEg2SA';
  var result = Analytics.Data.Realtime.get(viewId, 'rt:activeUsers', { 'dimensions': 'rt:city,rt:browser,rt:operatingSystem,rt:deviceCategory' });


  // The id of your google sheet file
  // https://docs.google.com/spreadsheets/d/XXXXXXXXXXXXXXXXXXXX/edit --> where XXX is your id
  var allSheets = Sheets.Spreadsheets.get(sheetsId);

  // The title of your sheet within the file
  //var sheet = allSheets.sheets.filter(x => x.properties.title == "Meta Data Studio")[0];


  Promise.all([allSheets, result]).then(x => {
    var columnCount = result.rows[0].length
    var rowCount = result.totalResults;
    console.log("Promise completed");
    console.log(result.rows);

    Sheets.Spreadsheets.Values.append({
      "valueInputOption": "USER_ENTERED",
      "insertDataOption": "INSERT_ROWS",
      "data": [
        {
          "range": "Meta Data Studio!A1:A5",
          //"range": "Meta Data Studio!" + alphabet[columnCount-1] + "1:G" + rowCount,
          "values": result.rows
        }
      ]
    }, sheetsId);
  });


  //sheet.
  //console.log(result);
  console.log(result.totalResults);

  for (var rowIndex in result.rows) {
    //sheet.
    var row = result.rows[rowIndex];
    console.log(row);
  }
}

function manual() {

  var servicekey = PropertiesService.getScriptProperties().getProperty("servicekey");

  UrlFetchApp.fetch("https://www.googleapis.com/analytics/v3/data/realtime", {
    'method': 'get',
    //'ids': ,
    'metrics': 'rt:activeUsers'
  });
}