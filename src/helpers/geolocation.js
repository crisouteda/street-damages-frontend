export function componentDidMount() {
  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }
}

function getCoordinates() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
export async function getGeolocation() {
  const position = await getCoordinates();
  const param = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  return param;
}
