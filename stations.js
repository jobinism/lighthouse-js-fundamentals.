const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
  ['Blue Mountain State'], 60, 'school'
];

function chooseStations(stations) {
  for(const station of stations){
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === 'school') {
        console.log(station[0]);
      }
    }
    
  }
}
