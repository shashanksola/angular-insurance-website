import { Component, Input } from '@angular/core';
import { Service } from '../../../Service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css'
})
export class ServiceItemComponent {
  @Input() item!: Service;
}
