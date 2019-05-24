import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
	onCreateUser: function() {
		alert("Successfully Registered. Please Login")
		this.transitionToRoute('login')

	},
	session: inject('session'),
	actions: {
		readUser() {
			let id = this.get('userId')
			this.store.findRecord('user', 1).then((user) => {
				alert(user.get('username'))
			})
		},
		createUser() {
			let newUser = this.getProperties('username', 'first_name', 'last_name', 'email', 'gender', 'password')
			let newRecord = this.store.createRecord('user', newUser)
			newRecord.save().then(this.onCreateUser.bind(this)).catch((reason) => { 
			  	this.set('errorMessage', reason.error || reason);
			});
		}
	}
});
