const carPassing = function(cars, speed) {
  let newCar = {
    time: Date.now(),
    speed: 39
  };
  cars.push(newCar);
  return cars;
};