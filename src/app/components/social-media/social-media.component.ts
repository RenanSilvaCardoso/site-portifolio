import { Component } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  instagram = faInstagram;
}
