import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
	session: inject('session'),
	onSignOut: function() {
		this.transitionToRoute('index')
	},
	actions: {
		authenticate: function() {
		  const credentials = this.getProperties('username', 'password');
		  const authenticator = 'authenticator:jwt';

		  this.get('session').authenticate(authenticator, credentials)
		  .then(() => {
		        this.store.findRecord('user', this.session.data.authenticated.tokenData.data.id).then(user => {
		          this.session.set('data.currentUser', user);
		        });
		    }
		    );
		},
		logout: function() {
			this.session.invalidate().then(this.onSignOut.bind(this));
		}

	}
});