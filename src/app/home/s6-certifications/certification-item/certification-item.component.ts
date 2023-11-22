import { AfterViewInit, Component, Input } from '@angular/core';
import { Certificate } from '../s6-certifications.component';
// import {decode} from "blurhash";
import { getWindow } from '../../../app.component';

@Component({
  selector: 'app-certification-item',
  templateUrl: './certification-item.component.html',
  styleUrls: ['./certification-item.component.scss'],
  standalone: true
})
export class CertificationItemComponent implements AfterViewInit {
  @Input() certification!: Certificate;
  loaded = false;

  ngAfterViewInit() {
    // const pixels = decode(this.certification.blurHash, 284, 216);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const imageData = ctx?.createImageData(284, 216);
    // imageData?.data.set(pixels);
    ctx?.putImageData(imageData as ImageData, 0, 0);
    getWindow()?.document.getElementById(`blur-hash-${this.certification.id}`)?.append(canvas);
  }
}
