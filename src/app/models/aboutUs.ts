export class Information{

    name: string;
    location: Location;
    phone_number: string;
    description: string;

    constructor(attributes: Information) {
        Object.assign(this, attributes);
    }
}

export class Location{

    address: string;
    coordinates: Coordinates;
    constructor(attributes: Location) {
        Object.assign(this, attributes);
    }

}

export class Coordinates{

    latitude: number;
    longitude: number;

    constructor(attributes: Coordinates) {
        Object.assign(this, attributes);
    }

}