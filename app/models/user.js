import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	username: DS.attr('string'),
	first_name: DS.attr('string'),
	last_name: DS.attr('string'),
	email: DS.attr('string'),
	gender: DS.attr('string'),
	profile_picture: DS.attr('string'),
	password: DS.attr('string')
});
