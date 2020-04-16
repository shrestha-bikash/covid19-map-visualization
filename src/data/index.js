export const getGeosonData = (response) => {
    const { data = [] } = response;
    const hasData = Array.isArray(data) && data.length > 0;

    if ( !hasData ) return;

    const geoJson = {
        type: 'FeatureCollection',
        features: data.map((values = {}) => {
            const { lat, long: lng } = values;
            return {
                type: 'Feature',
                properties: {
                    ...values,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [ lng, lat ]
                }
            }
        })
    }

    return geoJson;
}