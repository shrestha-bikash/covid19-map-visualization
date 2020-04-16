export const csvToArray = (strData, strDelimiter) => {
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");
    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec( strData )){
        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[ 1 ];
        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){
            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push( [] );
        }
        var strMatchedValue;
        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[ 2 ]){
            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );
        } else {

            // We found a non-quoted value.
            strMatchedValue = arrMatches[ 3 ];
        }
        // Now that we have our value string, let's add
        // it to the data array.
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }
    // Return the parsed data.
    return( arrData );
};

export const createSourceFromCsv =  (csvArray) => {
    // properties Meta contains column name and column index in header
    const [header, ...rows] = csvArray;
    // const [prov, country, lat, lon, ...dates] = header;
    const getPointFeature = (row, id) => ({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [parseFloat(row[3]), parseFloat(row[2])],
        },
        properties: {
            'province': row[0],
            'country': row[1],
            'dateWiseData': row.slice(4).map(x => parseInt(x)),
        },
        id: id,
    });

    return {
        type: 'FeatureCollection',
        features: rows.map(
            (row, index) => getPointFeature(row, index)
        ),
    };
}