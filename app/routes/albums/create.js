import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
	session: inject('session'),
	redirect() {
		if (!this.session.isAuthenticated) {
			// console.log("auth hai");
			this.transitionTo('login');
		}
	}
});
