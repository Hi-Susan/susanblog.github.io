(function () {
  if (window.location.pathname === '/') {
    $('.nav-list li')
      .first()
      .addClass('active')
  } else {
    $('.nav-list li')
      .first()
      .removeClass('active')
  }
  var md = window.markdownit()
  var result = md.render('# markdown-it rulezz!')
  $('#nav-main .menu-icon').on('click', function () {
    $('#nav-main').toggleClass('active')
  })
  var $resources = $('#resources')
  if ($resources) {
    var resourcesInfo = ''
    var resourcesList = [
      {
        title: '字蛛 ( FontSpider )',
        text: '字蛛是一个中文字体压缩器',
        url: 'http://font-spider.org/',
        image: '/assets/themes/susan/images/FontSpider.png'
      },
      {
        title: 'Can I use...',
        text: 'Browser support tables for modern web technologies',
        url: 'https://caniuse.com',
        image: '/assets/themes/susan/images/CanIUse.png'
      },
      {
        title: 'Normalize.css',
        text: 'A modern, HTML5-ready alternative to CSS resets',
        url: 'https://necolas.github.io/normalize.css/',
        image: '/assets/themes/susan/images/Normalize.png'
      },
      {
        title: '日本の伝統色',
        text: '日本傳統顏色',
        url: 'http://nipponcolors.com/',
        image: '/assets/themes/susan/images/NIPPONCOLORS.png'
      },
      {
        title: 'FANCY-BORDER-RADIUS',
        text: '漂亮的圓角設定',
        url: 'https://9elements.github.io/fancy-border-radius/',
        image: '/assets/themes/susan/images/FancyBorderRadius.png'
      }
    ]
    for (var i = 0; i < resourcesList.length; i++) {
      var resourcesMode = '<div class="col-3"><a href="'.concat(resourcesList[i].url, '" target="_blank"><div class="card"><div class="card-image" style="background-image:url(').concat(resourcesList[i].image, ');"></div><div class="card-info"><div class="title">').concat(resourcesList[i].title, '</div><div class="text">').concat(resourcesList[i].text, '</div></div></div></a></div>')
      resourcesInfo += resourcesMode
    }
    $('#resources').html(resourcesInfo)
  }

  // $('#nav-main').on('click', function () {
  //   $('#nav-main').toggleClass('active');
  // }

  // $('.search>a').on('click', function () {
  //   $('.search>.form-search').toggleClass('open');
  // });
  // var options = {
  //   clientId:
  //     '621400367392-aaq9kasdt5uf0oqsb2nke11i2ln7fadu.apps.googleusercontent.com',
  //   email: 'susanblog@hallowed-geode-249900.iam.gserviceaccount.com',
  //   key: '9kqy7RLrZ7CJMfW4vfz6_T72',
  //   ids: '196605664'
  // }
  // gaApi = require('ga-api')
  // gaApi(
  //   _.extend({}, options, {
  //     startDate: '2015-06-03',
  //     endDate: '2015-06-10',
  //     dimensions: 'ga:affiliation,ga:date',
  //     metrics: 'ga:revenuePerTransaction'
  //   }),
  //   function(err, data) {
  //     console.log(data)
  //   }
  // )
})()
