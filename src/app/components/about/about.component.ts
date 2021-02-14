import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  about: any[] = [
    {
      id: 1,
      imgUrl: '../../assets/img/img1.jpg',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolore omnis eaque earum nulla. Mollitia, maxime? Atque obcaecati, fuga quam placeat, at, eius corporis expedita provident ullam eligendi ipsa.'
    },
    {
      id: 2,
      imgUrl: '../../assets/img/img2.jpg',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolore omnis eaque earum nulla. Mollitia, maxime? Atque obcaecati, fuga quam placeat, at, eius corporis expedita provident ullam eligendi ipsa.'
    },

    {
      id: 3,
      imgUrl: '../../assets/img/img3.jpg',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolore omnis eaque earum nulla. Mollitia, maxime? Atque obcaecati, fuga quam placeat, at, eius corporis expedita provident ullam eligendi ipsa.'
    }
  ];
}
