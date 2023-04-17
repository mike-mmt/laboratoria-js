const { lp3 } = require('./toplist');
const _ = require('lodash');

function separator() {
    console.log(`${'-'.repeat(80)}`);
}

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
separator();
console.log(pinkchange10);
separator();
console.log(sortedAndShortened);
separator();
console.log(sortedAndShortened2);
separator();


const topTrack = _.chain(lp3).head().pick(['author', 'song']).value();
console.log(topTrack);
separator();

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
separator();

function printRandomTrackNTimesFromRange(n, min, max) {
    _.times(n, () => console.log(_.chain(lp3).slice(min, max).sample().value()));
}

printRandomTrackNTimesFromRange(5, 1, 13);
separator();

// let delayTime = 0;
// _.chain(lp3).take(10).value().forEach(function(value){
//     _.delay( () => console.log(value), delayTime += 2000);
//  });

 separator();

 const tracksThatAreLowerThanBefore = _.chain(lp3).filter(function(o){
    return o.change < 0;
}).value();
 console.log(tracksThatAreLowerThanBefore);

 separator();

 const topListDictionary = {};
 _.forEach(lp3, function(value) {
    topListDictionary[value.song] = value;
 });

 console.log(topListDictionary);

 separator();

console.dir(_.chain(lp3).unionBy('author').map( (value) => value.author ) // ['Queen', 'Deep Purple', ...]
.map( function(name) {
    const bandObject = {};
    bandObject[name] = _.chain(lp3).filter({'author': name}).map( (curSong) => {
        const newObject = {};
         newObject['song'] = curSong.song;
         newObject['place'] = curSong.place;
        return newObject;
        }).value();
    return bandObject;
}).value(), { depth: null });

separator();

console.log(_.countBy(lp3, 'author'));

separator();

console.log(`Największy spadek: ${_.minBy(lp3, (o) => o.change).change}`);
console.log(`Największy wzrost: ${_.maxBy(lp3, (o) => o.change).change}`);