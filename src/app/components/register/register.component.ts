import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
	email:string;
	password:string;

	constructor(
		public authService: AuthService,
		public route: Router,
		public flashMessagesService: FlashMessagesService
	) {}

	ngOnInit() {

	}

	onSubmit() {
		this.authService.register(this.email, this.password)
		.then((res) => {
			this.flashMessagesService.show('New user registered', {cssClass:'flashSuccess', timeout:5000});
			this.route.navigate(['/']);
		})
		.catch((err) => {
			this.flashMessagesService.show(err.message, {cssClass:'flashError', timeout: 5000});
			this.route.navigate(['/register']);
		})
	}

}
