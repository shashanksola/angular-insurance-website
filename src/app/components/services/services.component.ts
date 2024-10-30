import { Component } from '@angular/core';
import { ServiceItemComponent } from "../service-item/service-item.component";
import { Service } from '../../../Service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceItemComponent, NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {
  services: Service[] = [
    { insuranceName: 'VEHICLE', insuranceType: 'Bussiness Insurance', bgImage: 'https://plus.unsplash.com/premium_photo-1723809866190-3087e75192ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { insuranceName: 'VEHICLE', insuranceType: 'VEHICLE Insurance', bgImage: 'https://images.unsplash.com/photo-1482235225574-c37692835cf3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { insuranceName: 'CAR', insuranceType: 'Car Insurance', bgImage: 'https://plus.unsplash.com/premium_photo-1661773826635-5635efc0d888?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ]

  constructor() {
  }
}
