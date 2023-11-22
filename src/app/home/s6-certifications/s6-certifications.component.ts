import { Component } from '@angular/core';
import { CertificationItemComponent } from './certification-item/certification-item.component';

@Component({
  selector: 'app-s6-certifications',
  templateUrl: './s6-certifications.component.html',
  styleUrls: ['./s6-certifications.component.scss'],
  standalone: true,
  imports: [CertificationItemComponent]
})
export class S6CertificationsComponent {
  selectedCert: Certificate | null = null;

  certifications: Certificate[] = [
    {
      id: 'angular_basic',
      title: 'Angular (Basic)',
      issuer: 'HackerRank',
      tags: ['Angular', 'TypeScript'],
      icon: 'angular.svg',
      link: 'https://www.hackerrank.com/certificates/4029878be43b',
      cert: 'angular_basic.jpg',
      blurHash: 'L8Qd0{}y5h$uozj?t7j?00x9r@bI'
    },
    {
      id: 'angular_intermediate',
      title: 'Angular (Intermediate)',
      issuer: 'HackerRank',
      tags: ['Angular', 'TypeScript'],
      icon: 'angular.svg',
      link: 'https://www.hackerrank.com/certificates/759868e0e7a9',
      cert: 'angular_intermediate.jpg',
      blurHash: 'L8QTcM}y5#$uoyj?t7j?0Jx9nPbJ'
    },
    {
      id: 'javascript_basic',
      title: 'JavaScript (Basic)',
      issuer: 'HackerRank',
      tags: ['JavaScript'],
      icon: 'javascript.svg',
      link: 'https://www.hackerrank.com/certificates/66e359735047',
      cert: 'javascript_basic.jpg',
      blurHash: 'L8QTcM}y5h$uoyj?t7j?0Jx9nPbJ'
    },
    {
      id: 'problem_solving_basic',
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      tags: ['JavaScript', 'Algorithms'],
      icon: 'problem.svg',
      link: 'https://www.hackerrank.com/certificates/a492c627f960',
      cert: 'problem_solving_basic.jpg',
      blurHash: 'L8QTcM}y5$$uoyj?t7j@0Jx9i{bJ'
    },
    {
      id: 'typescript_quera',
      title: 'Task-Oriented Course in Development with Typescript',
      issuer: 'Quera',
      tags: ['TypeScript', 'Angular'],
      icon: 'problem.svg',
      link: 'https://quera.org/media/public/quera_certificate/c02e77c89fe042f19a3af991b500b75a.jpg',
      cert: 'typescript_quera.jpg',
      blurHash: 'L1M7x}D%01?c00-pERIV00Rj?way',
      marquee: true
    },
    {
      id: 'git_quera',
      title: 'Task-Oriented Course in Version Control with Git',
      issuer: 'Quera',
      tags: ['Git'],
      icon: 'problem.svg',
      link: 'https://quera.org/media/public/quera_certificate/8c0a2117f8024df28954884ead8601b6.jpg',
      cert: 'git_quera.jpg',
      blurHash: 'L1M7x}D%01?c00-pERIV00Rj?way',
      marquee: true
    },
    {
      id: 'algorithm_quera',
      title: 'Advanced Algorithmic Thinking and Data Structure',
      issuer: 'Quera',
      tags: ['Algorithm'],
      icon: 'problem.svg',
      link: 'https://quera.org/media/public/quera_certificate/f65580b95720457fa1eda0154b0fd015.jpg',
      cert: 'algorithm_quera.jpg',
      blurHash: 'L1M7x}D%01?c00-pERIV00Rj?way',
      marquee: true
    }
  ];

  openCert(cert: Certificate) {
    this.selectedCert = cert;
  }
}

export type Certificate = {
  id: string,
  title: string,
  issuer: string,
  tags: string[],
  icon: string,
  link: string,
  cert: string,
  blurHash: string,
  marquee?: boolean,
}
