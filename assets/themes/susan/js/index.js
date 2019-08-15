;(function() {
  // $('.search>a').on('click', function () {
  //   $('.search>.form-search').toggleClass('open');
  // });
  var options = {
    clientId:
      '621400367392-aaq9kasdt5uf0oqsb2nke11i2ln7fadu.apps.googleusercontent.com',
    email: 'susanblog@hallowed-geode-249900.iam.gserviceaccount.com',
    key: '9kqy7RLrZ7CJMfW4vfz6_T72',
    ids: '196605664'
  }
  gaApi = require('ga-api')

  gaApi(
    _.extend({}, options, {
      startDate: '2015-06-03',
      endDate: '2015-06-10',
      dimensions: 'ga:affiliation,ga:date',
      metrics: 'ga:revenuePerTransaction'
    }),
    function(err, data) {
      console.log(data)
    }
  )
})()
