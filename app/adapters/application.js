import DS from 'ember-data';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DS.RESTAdapter.extend(TokenAuthorizerMixin, {
	host: 'https://localhost/api',
	urlForCreateRecord(modelName, snapshot) {
	    return this._super(...arguments) + '/create';
	},
	urlForQuery(query) {
	    if (query.username) {
	    	let val = query.username;
	      delete query.username;
	      return `${this._super(...arguments)}/user/`+val;
	    }
	    return this._super(...arguments);
	},
	urlForQueryRecord(query) {
	    if (query.username) {
	    	let val = query.username;
	      delete query.username;
	      return `${this._super(...arguments)}/user/`+val;
	    }
	    return this._super(...arguments);
	}
});
