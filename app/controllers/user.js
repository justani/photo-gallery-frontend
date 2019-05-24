import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
	session: inject('session'),
	actions: {
		readUser() {
			let id = this.get('userId')
			this.store.findRecord('user', 1).then((user) => {
				alert(user.get('username'))
			})
		},
		createUser() {
			let username = this.get('regusername')
			let first_name = this.get('first_name')
			let last_name = this.get('last_name')
			let email = this.get('email')
			let gender = this.get('gender')
			let password = this.get('regpassword')
			let newRecord = this.store.createRecord('user', {
				username: username,
				first_name: first_name,
				last_name: last_name,
				email: email,
				gender: gender,
				password: password
			})
			newRecord.save()
		}
	}
});
