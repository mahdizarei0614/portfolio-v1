import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-folded-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folded-page.component.html',
  styleUrl: './folded-page.component.scss'
})
export class FoldedPageComponent implements AfterViewInit {
  platformId!: object;
  foldedHover = false;
  initiated = false;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      this.platformId = platformId;
    }
  }
  showMyWork = false;

  public ngAfterViewInit() {
    if (this.platformId) {
      setTimeout(() => {
        this.initiated = true;
        document.getElementById('folded-paper')?.classList.remove('fold-enter');
      }, 1300);
    }
  }
}
