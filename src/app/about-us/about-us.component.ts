import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Information } from '../models/aboutUs';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  aboutUs:Information = new Information(null);
  isLoading: boolean = true;
  
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  map: google.maps.Map;

  coordinates;
  
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  marker = new google.maps.Marker({
    position: null,
    map: this.map,
  });

  constructor(private apiService: ApiService) {

   }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.getInfoAboutUs();
    
    setTimeout(() => {
       this.mapInitializer();
    }, 1000);
    
  }

  getInfoAboutUs(){
    this.apiService.getAboutUs().subscribe((information: Information) => {
      this.aboutUs = information;
      this.isLoading = false;
    })
  }

  mapInitializer() {
      this.coordinates = new google.maps.LatLng(this.aboutUs.location.coordinates.latitude, this.aboutUs.location.coordinates.longitude);
      this.mapOptions.center = this.coordinates;
      this.marker.setPosition(this.coordinates);
      this.map = new google.maps.Map(this.gmap.nativeElement, 
      this.mapOptions);
      this.marker.setMap(this.map);
   }


}
