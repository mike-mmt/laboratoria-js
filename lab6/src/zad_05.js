const seriesData = require('./series.js').series;

const miniseries = seriesData.filter(series => series.seasons === 1).reduce( (acc, currentSeries) => {
    const formattedSeries = {};
    formattedSeries["name"] = currentSeries.name;
    formattedSeries["type"] = currentSeries.type.reduce( (typeAcc, curType, typeIndex) => `${typeAcc}${typeIndex === 0 ? '' : ', '}${curType}`, '');
    formattedSeries["year"] = currentSeries.startYear;
    return [...acc, formattedSeries];
}, []).sort();


console.dir(miniseries, { depth: null });