
// Interface to gatekeep the addMarker() 
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}


// CustomMap class inorder to restrict the Google Maps API surface area
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(item: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
