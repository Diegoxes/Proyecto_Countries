const axios = require("axios");
let arrayCountries = [];
axios("https://restcountries.com/v3.1/all")
  .then(({ data }) => {
   
    arrayCountries=[...arrayCountries,...data]

    
    arrayCountries.forEach((country) => {
      console.log(country);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });


/*  [        {   nombrePais:elemento.name.common  }

  name: {
    common: 'Gabon',
    official: 'Gabonese Republic',
    nativeName: { fra: [Object] }
  }],
  tld: [ '.ga' ],
  cca2: 'GA',
  ccn3: '266',
  cca3: 'GAB',
  cioc: 'GAB',
  independent: true,
  status: 'officially-assigned',
  unMember: true,
  currencies: { XAF: { name: 'Central African CFA franc', symbol: 'Fr' } },
  idd: { root: '+2', suffixes: [ '41' ] },
  capital: [ 'Libreville' ],
  altSpellings: [ 'GA', 'Gabonese Republic', 'République Gabonaise' ],
  region: 'Africa',
  subregion: 'Middle Africa',
  languages: { fra: 'French' },
  translations: {
    ara: { official: 'جمهورية الغابون', common: 'الغابون' },
    bre: { official: 'Republik Gabonat', common: 'Gabon' },
    ces: { official: 'Gabonská republika', common: 'Gabon' },
    cym: { official: 'Gabonese Republic', common: 'Gabon' },
    deu: { official: 'Gabunische Republik', common: 'Gabun' },
    est: { official: 'Gaboni Vabariik', common: 'Gabon' },
    fin: { official: 'Gabonin tasavalta', common: 'Gabon' },
    fra: { official: 'République gabonaise', common: 'Gabon' },
    hrv: { official: 'Gabon Republika', common: 'Gabon' },
    hun: { official: 'Gaboni Köztársaság', common: 'Gabon' },
    ita: { official: 'Repubblica gabonese', common: 'Gabon' },
    jpn: { official: 'ガボン共和国', common: 'ガボン' },
    kor: { official: '가봉 공화국', common: '가봉' },
    nld: { official: 'Republiek Gabon', common: 'Gabon' },
    per: { official: 'جمهوری گابُن', common: 'گابن' },
    pol: { official: 'Republika Gabońska', common: 'Gabon' },
    por: { official: 'República do Gabão', common: 'Gabão' },
    rus: { official: 'Габона Республика', common: 'Габон' },
    slk: { official: 'Gabonská republika', common: 'Gabon' },
    spa: { official: 'República de Gabón', common: 'Gabón' },
    srp: { official: 'Габонска Република', common: 'Габон' },
    swe: { official: 'Republiken Gabon', common: 'Gabon' },
    tur: { official: 'Gabon Cumhuriyeti', common: 'Gabon' },
    urd: { official: 'جمہوریہ گیبون', common: 'گیبون' },
    zho: { official: '加蓬共和国', common: '加蓬' }
  },
  latlng: [ -1, 11.75 ],
  landlocked: false,
  borders: [ 'CMR', 'COG', 'GNQ' ],
  area: 267668,
  demonyms: {
    eng: { f: 'Gabonese', m: 'Gabonese' },
    fra: { f: 'Gabonaise', m: 'Gabonais' }
  },
  flag: '🇬🇦',
  maps: {
    googleMaps: 'https://goo.gl/maps/vyRSkqw1H1fnq4ry6',
    openStreetMaps: 'https://www.openstreetmap.org/relation/192793'
  },
  population: 2225728,
  gini: { '2017': 38 },
  fifa: 'GAB',
  car: { signs: [ 'G' ], side: 'right' },
  timezones: [ 'UTC+01:00' ],
  continents: [ 'Africa' ],
  flags: {
    png: 'https://flagcdn.com/w320/ga.png',
    svg: 'https://flagcdn.com/ga.svg',
    alt: 'The flag of Gabon is composed of three equal horizontal bands of green, yellow and blue.'
  },
  coatOfArms: {
    png: 'https://mainfacts.com/media/images/coats_of_arms/ga.png',
    svg: 'https://mainfacts.com/media/images/coats_of_arms/ga.svg'
  },
  startOfWeek: 'monday',
  capitalInfo: { latlng: [ 0.38, 9.45 ] }

}       ]*/