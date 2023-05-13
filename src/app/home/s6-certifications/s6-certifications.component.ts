import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-s6-certifications',
  templateUrl: './s6-certifications.component.html',
  styleUrls: ['./s6-certifications.component.scss']
})
export class S6CertificationsComponent {
  @Input() activated = false;
  selectedCert: Certificate | null = null;

  certifications: Certificate[] = [
    {
      title: 'Angular (Basic) Certificate',
      icon: 'angular.svg',
      link: 'https://www.hackerrank.com/certificates/4029878be43b',
      cert: 'angular_basic.jpg'
    },
    {
      title: 'Angular (Intermediate) Certificate',
      icon: 'angular.svg',
      link: 'https://www.hackerrank.com/certificates/759868e0e7a9',
      cert: 'angular_intermediate.jpg'
    },
    {
      title: 'JavaScript (Basic) Certificate',
      icon: 'javascript.svg',
      link: 'https://www.hackerrank.com/certificates/66e359735047',
      cert: 'javascript_basic.jpg'
    },
  ];

  openCert(cert: Certificate) {
    this.selectedCert = cert;
  }
}

declare type Certificate = {
  title: string,
  icon: string,
  link: string,
  cert: string,
}
