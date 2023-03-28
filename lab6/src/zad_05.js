const seriesData = require('./series.js').series;

const miniseries = seriesData.filter(series => series.seasons === 1).reduce( (acc, currentSeries) => {
    const formattedSeries = {};
    formattedSeries["name"] = currentSeries.name;
    formattedSeries["type"] = currentSeries.type.reduce( (typeAcc, curType, typeIndex) => `${typeAcc}${typeIndex === 0 ? '' : ', '}${curType}`, '');
    formattedSeries["year"] = currentSeries.startYear;
    return [...acc, formattedSeries];
}, []).sort();

const series = seriesData.reduce( (wholeArray, currentSeries) => {
    if (currentSeries.startYear < 2010) {
        //
        // const formattedSeries = {};
    } else if (2010 <= currentSeries.startYear < 2020) {
        //
    } else {
        //
    }
}, [[], [], []]);

console.dir(miniseries, { depth: null });
console.dir(series, { depth: null });