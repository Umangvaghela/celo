import { Component, OnInit } from '@angular/core';
import "lodash" ;
import { startWarServies } from './star-wars.service';

declare var _: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Excersise';
  number = 0;
  rootName = "UmangVaghela";
  rootItem = ['Apple', 'Banana' , 'Graps'];
  public data: any;
  name =  '';
  userprofile = '';
  userfullimage = '';
  country = '';
  city = '';
  state = '';
  postcode  = '';
  email  =  '';
  userage = '';
  registeredAge = '';
  phone = '';
  userTitle = '';
  lastname = '';

  strwarservice: startWarServies;
  constructor ( strwarservice: startWarServies ) {
    this.strwarservice = strwarservice;
  }
  ngOnInit() {
    this.strwarservice.featcharacter();
    this.strwarservice.getRandomUser().subscribe((res)=>{
        this.name = res.name.first;
        this.userTitle = res.name.title;
        this.lastname = res.name.last;
        this.userprofile = res.picture.thumbnail;
        this.userfullimage = res.picture.large;
        this.country = res.location.country;
        this.city = res.location.city;
        this.state = res.location.state;
        this.postcode = res.location.postcode;
        this.email = res.email;
        this.userage = res.dob.age;
        this.registeredAge = res.registered.age;
        this.phone = res.phone;
      })
  }
  OnNameChanged(newName) {
    this.rootName = newName;
  }
  OnItemwasadded(NewItem){
    this.rootItem.push(NewItem);
  }

  IncreaseNumber() {
    this.number = _.random(1, 10);
  }

}
