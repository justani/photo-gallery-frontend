import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
	session: inject('session'),
	onCreateAlbum: function() {
		alert("Successfully Created")
		this.transitionToRoute('albums.user-albums', this.session.data.currentUser.username)
	},
	actions: {
		createAlbum() {
			let newAlbum = this.getProperties('name', 'description')
			newAlbum['created_by'] = this.session.data.currentUser.username;
			let newRecord = this.store.createRecord('album', newAlbum)
			newRecord.save().then(this.onCreateAlbum.bind(this)).catch((reason) => { 
			  	this.set('errorMessage', reason.error || reason);
			});
		}
	}
});
