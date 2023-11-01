import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.scss']
})
export class WhatsappBtnComponent {
  wpp = faWhatsapp;
}
