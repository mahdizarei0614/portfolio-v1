import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s3-experience',
  templateUrl: './s3-experience.component.html',
  styleUrls: ['./s3-experience.component.scss'],
  standalone: true
})
export class S3ExperienceComponent {
  @Input() activated = false;
  public experience: ExperienceModel[] = [
    {
      id: 4,
      position: 'Senior Web Developer',
      companyName: 'OMPFinex',
      companyLogo: 'ompfinex.jpg',
      companyLocation: 'Tehran',
      companyWebsite: 'https://www.ompfinex.com',
      startDate: 'Mar 2023',
      endDate: null,
      bulletPoints: [
        ':)'
      ]
    },
    {
      id: 3,
      position: 'Senior Web Developer',
      companyName: 'Negah Bank',
      companyLogo: 'negah.jpg',
      companyLocation: 'Tehran',
      companyWebsite: 'https://negah-bank.com',
      startDate: 'Dec 2022',
      endDate: 'Mar 2023',
      bulletPoints: [
        'Managed the client-side unit through designing and developing a <span class="italic">chat-based person-to-person money transactions PWA</span> as the newest enterprise project of the company over 3 months.',
        'Settled a good relationship between units by communicating with the server-side development team as the leading role of the client-side team to improve teamwork over 3 months of development.'
      ]
    },
    {
      id: 2,
      position: 'Mid-level Angular Developer',
      companyName: 'Dotin',
      companyLogo: 'dotin.jpg',
      companyLocation: 'Tehran',
      companyWebsite: 'https://dotin.ir',
      startDate: 'Aug 2020',
      endDate: 'Dec 2022',
      bulletPoints: [
        'Merged <span class="font-semibold">1300+ commits</span> containing  <span class="font-semibold">140k+ lines of code</span> into WePOD <a href="https://web.wepod.ir" class="text-blue-800 underline" target="_blank">PWA</a>.',
        'Submitted <span class="font-semibold">170+ commits</span> and added <span class="font-semibold">50k+ lines of code</span> into the WePOD <span class="font-semibold">admin panel</span> (Angular Material).',
        'Completed <span class="font-semibold">500+ tasks</span> and spent <span class="font-semibold">4.5k+ hours</span> on the WePOD project within an <span class="font-semibold">agile</span> team of 20+ (4 client-side development members) to develop and maintain applications written in <span class="italic">Typescript</span> & <span class="italic">JavaScript</span>.',
        'Structured a clean, testable, and maintainable code base, analyzed requirements, and prioritized tasks, which increased the number of users from <span class="font-semibold">2k+</span> to <span class="font-semibold">750k+</span> in <span class="font-semibold">2 years</span>.',
        'Expedited knowledge sharing and management by <span class="font-semibold">80%</span> across the team of 20+ developers by redesigning <span class="font-semibold">Jira</span> workflow with two other colleagues in the <span class="font-semibold">first two months</span>.',
        'Refactored the code base, which <span class="font-semibold">reduced bug reports by 70% in the 1st month</span> of development.',
        'Held project on the edge of technologies by migrating WePOD PWA and WePOD admin panel code bases to the latest LTS version of Angular every three months.',
        'Promoted twice within 12 months due to strong performance and organizational impact - ahead of schedule by <span class="font-semibold">6 months</span>.\n'
      ]
    },
    {
      id: 1,
      position: 'Junior Full-stack Developer',
      companyName: 'YOLO Team',
      companyLogo: 'no-logo.png',
      companyLocation: 'Tehran',
      companyWebsite: null,
      startDate: 'Jun 2021',
      endDate: 'Jan 2022',
      bulletPoints: [
        'Solved complicated mathematical problems, added <span class="font-semibold">20k+ lines of code</span>, performed refactoring and optimization, and facilitated procedures by writing queries over <span class="font-semibold">MongoDB</span> using <span class="font-semibold">mongoose</span> as ORM in 7 months of development.',
        'Coordinated in a team of 6 to Develop and maintain highly complicated game rules into a platform over six months with <span class="font-semibold">200+ bug-less commits</span> merged into production.'
      ]
    },
    {
      id: 0,
      position: 'Junior Front-end Developer',
      companyName: 'Promte',
      companyLogo: 'no-logo.png',
      companyLocation: 'Tehran',
      companyWebsite: null,
      startDate: 'Jul 2019',
      endDate: 'Apr 2020',
      bulletPoints: [
        'Developed and merged <span class="font-semibold">300+ commits</span> into <span class="font-semibold">10+ projects</span> simultaneously in the <span class="font-semibold">first three months</span> with an on-time deliverance rate of <span class="font-semibold">100%</span>.',
        'Upgraded codes to the latest tech to <span class="italic">develop</span> and <span class="italic">maintain</span> <span class="font-semibold">10+ websites</span> for clients worldwide, including <a class="text-blue-800 underline" href="https://elpidacare.com" target="_blank">Elpida</a>, over seven months.',
        'Dealt with complicated mathematical problems during developing a <span class="italic">website builder</span> as the company\'s main product for over seven months and had <span class="font-semibold">100+ commits</span> on the mentioned project.',
        'Gained experience in the Ionic framework by constructing 3 PWAs in three months.',
        'Designed and developed more than 20 HTML pages in the Elpida project using PHP blades in two months.',
        'Answered <span class="font-semibold">200+</span> (acceptance rate of <span class="font-semibold">33%</span>) questions regarding <span class="font-semibold">Angular</span> & <span class="font-semibold">Ionic</span> in <a class="text-blue-800 underline" href="https://stackoverflow.com/users/11434373" target="_blank">Stackoverflow</a> since 2018.'
      ]
    }
  ];
  public selectedXp: ExperienceModel | undefined;

  changeSelected(e: ExperienceModel) {
    this.selectedXp = undefined;
    setTimeout(() => {
      this.selectedXp = e;
    });
  }
}

declare type ExperienceModel = {
  id: number;
  position: string;
  companyName: string;
  companyLogo: string;
  companyLocation: string;
  companyWebsite: string | null;
  startDate: string;
  endDate: string | null;
  bulletPoints: string[];
}
