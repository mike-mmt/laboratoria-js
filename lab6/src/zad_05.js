const seriesData = require('./series.js').series;

const miniseries = seriesData.filter(series => series.seasons === 1).reduce( (acc, currentSeries) => {
    const formattedSeries = {};
    formattedSeries["name"] = currentSeries.name;
    formattedSeries["type"] = currentSeries.type.reduce( (typeAcc, curType, typeIndex) => `${typeAcc}${typeIndex === 0 ? '' : ', '}${curType}`, '');
    formattedSeries["year"] = currentSeries.startYear;
    return [...acc, formattedSeries];
}, []).sort();

const series = seriesData.filter(series => series.seasons !== 1).reduce( (wholeArray, currentSeries) => {
    if (currentSeries.startYear < 2010) {
        //
        const formattedSeries = {};
        formattedSeries["id"] = currentSeries.id;
        formattedSeries["name"] = currentSeries.name;
        formattedSeries["type"] = currentSeries.type.reduce( (typeAcc, curType, typeIndex) => `${typeAcc}${typeIndex === 0 ? '' : ', '}${curType}`, '');
        formattedSeries["startYear"] = currentSeries.startYear;
        if (currentSeries["endYear"] !== null) {
            formattedSeries["endYear"] = currentSeries.endYear;
        }
        formattedSeries["seasons"] = currentSeries.seasons;
        wholeArray[0].push(formattedSeries);
        return wholeArray;
    } else if (currentSeries.startYear >= 2010 && currentSeries.startYear < 2020) {
        const formattedSeries = {};
        formattedSeries["id"] = currentSeries.id;
        formattedSeries["name"] = currentSeries.name;
        formattedSeries["type"] = currentSeries.type.reduce( (typeAcc, curType, typeIndex) => `${typeAcc}${typeIndex === 0 ? '' : ', '}${curType}`, '');
        formattedSeries["startYear"] = currentSeries.startYear;
        if (currentSeries["endYear"] !== null) {
            formattedSeries["endYear"] = currentSeries.endYear;
        }
        formattedSeries["seasons"] = currentSeries.seasons;
        wholeArray[1].push(formattedSeries);
        return wholeArray;
    } else {
        const formattedSeries = {};
        formattedSeries["id"] = currentSeries.id;
        formattedSeries["name"] = currentSeries.name;
        formattedSeries["type"] = currentSeries.type.reduce( (typeAcc, curType, typeIndex) => `${typeAcc}${typeIndex === 0 ? '' : ', '}${curType}`, '');
        formattedSeries["startYear"] = currentSeries.startYear;
        if (currentSeries["endYear"] !== null) {
            formattedSeries["endYear"] = currentSeries.endYear;
        }
        formattedSeries["seasons"] = currentSeries.seasons;
        wholeArray[2].push(formattedSeries);
        return wholeArray;
    }
}, [[], [], []]);

console.dir(miniseries, { depth: null });
console.dir(series, { depth: null });