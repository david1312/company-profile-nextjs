export const mockHashrate = `
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Bitcoin Hashrate Chart - BTC Hashrate 650.30 EH/s - CoinWarz</title>
    <meta
      name="description"
      content="The Bitcoin hashrate chart provides the current BTC hashrate as well as the history of Bitcoin hashrate in graph format with an option to expand the Bitcoin global hashrate chart time span back to 2009."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="og:title"
      property="og:title"
      content="Bitcoin Hashrate Chart - BTC Hashrate 650.30 EH/s"
    />
    <link
      rel="canonical"
      href="https://www.coinwarz.com/mining/bitcoin/hashrate-chart"
    />
    <link rel="preload" href="/content/v3/font.css" as="style" />
    <link href="/content/v3/font.css" rel="stylesheet" />
    <link href="/content/v3/abtf.css?v=04102022" rel="stylesheet" />
    <link href="/content/v3/abtf-responsive.css?v=04102022" rel="stylesheet" />
    <link href="/content/toastr.css" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    
  </head>
  <body>

    <div id="toolTipUp"></div>
    <div id="toolTipDown"></div>
    <script src="/jsbundles/v3?v=GcWemXVbzG7r5o4YBxBZ2Xul2gZag0VlJBKBjhkyux01"></script>

    <script src="https://code.highcharts.com/stock/highstock.js"></script>
    <script>
      $(function () {
        RenderSparklinePrice();

        LoadHashrateChartData(
          "#chart-container",
          "1",
          "086084147028233019061109178025166037213012224135115212040185134137053123196231199008098035155183",
          2
        );
      });
    </script>

    <!-- CoinTraffic -->
   
    </div>
  </body>
</html>
`;
