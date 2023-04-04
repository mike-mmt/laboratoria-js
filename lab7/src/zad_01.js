const { lp3 } = require('./toplist');
const _ = require('lodash');

// 1
const queen = _.filter(lp3, {'author': 'Queen'});

const pinkchange10 = _.filter(lp3, function(o) {
    return o.author === 'Pink Floyd' && o.change >= 10;
}
);

// const sorted = _.sortBy(lp3, ['change']);
const sortedAndShortened = _.dropRight(_.sortBy(lp3, ['change']), 3);
const sortedAndShortened2 = _.chain(lp3).sortBy(['change']).dropRight(3).value();
console.log(queen);
console.log(pinkchange10);
console.log(sortedAndShortened);
console.log(sortedAndShortened2);

const topTrack = _.chain(lp3).head().pick(['author', 'song']).value();
console.log(topTrack);

function tracksUnderTheseNumbers(numbers) {
    if (_.every(numbers, function(x) {
        return _.isInteger(x);
    })) {
        _.each(numbers, function (number) {
            console.log( _.find(lp3, ['place', number]) );
        });
    }
}

tracksUnderTheseNumbers([1, 2, 3]);

// function printRandomTrackNTimesFromRange(n, min, max) {
// }