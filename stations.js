const data = [
  {
    "city": "Paris",
    "station_name": "Paris Gare-du-Nord",
    "id": 1,
    "lat": 48.8828,
    "long": 2.3567,
    "comments": "25/01/1846"
  },
  {
    "city": "Paris",
    "station_name": "Paris Gare-de-Lyon",
    "id": 2,
    "lat": 48.8448,
    "long": 2.3735,
    "comments": "12/08/1849"
  },
  {
    "city": "Lille",
    "station_name": "Lille Flandres",
    "id": 4,
    "lat": 50.636278,
    "long": 3.070944,
    "comments": ""
  },
  {
    "city": "Lyon",
    "station_name": "Lyon Part-Dieu",
    "id": 5,
    "lat": 45.759978,
    "long": 4.859669,
    "comments": ""
  }
]
 
// 1.⁠ ⁠Load ⁠ stations.json ⁠ data
const stations = loadStationsData();

// 2.⁠ ⁠Search for every station in the city of Paris
const parisStations = getParisStations(stations);
console.log('parisStations', parisStations)

// 3.⁠ ⁠Find the closest station to Lyon Part-Dieu station
const garLyonParDieu = getStationByName('Lyon Part-Dieu')
const closestStationToLyonParDieu = closestStation(garLyonParDieu, parisStations)
console.log(closestStationToLyonParDieu);

function loadStationsData() {
    return data;
}

function getParisStations(stations) {
    return stations.filter(s => s.city === 'Paris');
}

function getStationByName(name) {
    return stations.filter(s => s.station_name === 'Lyon Part-Dieu')[0];
}

function closestStation(station, stations) {
    const stationsDistances = stations.sort((s1,s2) => {
        return Math.abs(station.lat - s1.lat)+Math.abs(station.long - s1.long) - Math.abs(station.lat - s2.lat)+Math.abs(station.long - s2.long);
    })
    return stationsDistances[0];
}
