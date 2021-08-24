import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

class GeolocationExample {
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates;
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
      console.log(position)
      console.log(err)
    });
    return wait;
  }

  
}

export default new GeolocationExample();