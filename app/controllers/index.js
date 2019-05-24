import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
	session: inject('session'),
	actions: {
		logout: function() {
			this.session.invalidate();
		}
	}
});