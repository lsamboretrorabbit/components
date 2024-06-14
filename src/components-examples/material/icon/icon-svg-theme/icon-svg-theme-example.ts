import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';

/**
 * @title SVG Theme icons
 */
@Component({
  selector: 'icon-svg-theme-example',
  templateUrl: 'icon-svg-theme-example.html',
  standalone: true,
  imports: [MatIconModule],
})
export class IconSvgThemeExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {}
}
