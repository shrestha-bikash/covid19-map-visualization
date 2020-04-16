export const getGeosonData = (response) => {
    const { data = [] } = response;
    const hasData = Array.isArray(data) && data.length > 0;

    if ( !hasData ) return;

    const geoJson = {
        type: 'FeatureCollection',
        features: data.map((country = {}) => {
            const { lat, long: lng } = country;
            return {
                type: 'Feature',
                properties: {
                    ...country,
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