export function componentDidMount() {
  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }
}

export function getGeolocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  });
}
