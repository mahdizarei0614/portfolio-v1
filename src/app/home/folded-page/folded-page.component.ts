import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-folded-page',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './folded-page.component.html',
  styleUrl: './folded-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoldedPageComponent implements AfterViewInit {
  foldedHover = false;
  initiated = false;
  platformId!: object;
  showMyWork = false;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      this.platformId = platformId;
    }
  }

  public ngAfterViewInit() {
    if (this.platformId) {
      setTimeout(() => {
        this.initiated = true;
        document.getElementById('folded-paper')?.classList.remove('fold-enter');
      }, 1300);
    }
  }
}
