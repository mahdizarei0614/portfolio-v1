import {Component, Input, OnInit} from '@angular/core';
import {getWindow} from "../../app.component";

@Component({
  selector: 'app-s5-skills',
  templateUrl: './s5-skills.component.html',
  styleUrls: ['./s5-skills.component.scss']
})
export class S5SkillsComponent implements OnInit {
  @Input() activated = false;

  skills = [
    {label: 'Angular', level: 5, left: '', delay: '', duration: ''},
    {label: 'TypeScript', level: 5, left: '', delay: '', duration: ''},
    {label: 'Ionic', level: 5, left: '', delay: '', duration: ''},
    {label: 'HTML & CSS', level: 5, left: '', delay: '', duration: ''},
    {label: 'Bootstrap', level: 5, left: '', delay: '', duration: ''},
    {label: 'JavaScript', level: 4, left: '', delay: '', duration: ''},
    {label: 'Git', level: 4, left: '', delay: '', duration: ''},
    {label: 'Sass & Less', level: 4, left: '', delay: '', duration: ''},
    {label: 'Tailwind', level: 4, left: '', delay: '', duration: ''},
    {label: 'jQuery', level: 4, left: '', delay: '', duration: ''},
    {label: 'Node.js', level: 3, left: '', delay: '', duration: ''},
    {label: 'Express.js', level: 3, left: '', delay: '', duration: ''},
    {label: 'MongoDB', level: 3, left: '', delay: '', duration: ''},
    {label: 'ReactJs', level: 2, left: '', delay: '', duration: ''}
  ];

  ngOnInit() {
    this.skills.forEach((s) => {
      s.left = Math.floor((Math.random() * ((getWindow() as Window).innerWidth - 200)) + 50) + 'px';
      s.delay = (Math.random() * 7 + 3) + 's';
      s.duration = (Math.random() * 15 + 5) + 's';
    })
  }
}
