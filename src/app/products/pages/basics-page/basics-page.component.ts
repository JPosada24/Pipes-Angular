import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

	public nameLower: string = 'julian';
	public nameUpper: string = 'JULIAN';
	public fullName: string = 'jUliAN PosADa';

	public customDate: Date = new Date();

}
