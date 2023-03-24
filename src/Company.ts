import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent() {
    return `<div>
    <h4>Company Name: ${this.companyName}</h4>
    <h5>Catch Phrase: ${this.catchPhrase}</h5>
    </div>
    `;
  }
}
