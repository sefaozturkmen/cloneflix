import { Component, OnInit } from '@angular/core';
import { DevList } from 'src/app/datasources/dev-list';
import { Dev } from 'src/app/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  imgUrl='../../../assets/img/'

  devList: Dev[] = DevList

  constructor() { }

  ngOnInit(): void {
  }

}
