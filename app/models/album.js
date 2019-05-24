import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
	created_by: DS.attr('string'),
	cover_photo: DS.attr('string'),
	created_at: DS.attr('string'),
	photo_count: DS.attr('string'),
	likes_count:DS.attr('string')
});
