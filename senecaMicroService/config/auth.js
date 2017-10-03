module.exports = {
	JWT: {
        secret: 'e3rwefsd'
    },
	facebookAuth: {
		clientID: '360769287679280',
		clientSecret: 'fe83eb10e2938f1b9732da76d226ee62',
		profileFields: ['id', 'displayName', 'photos', 'profileUrl', 'email'],
		callbackURL: 'http://52.14.238.159:8080/users/auth/facebook/callback'
	},
	googleAuth: {
		clientID: '241052907365-7plusehb1ba1uaokuk0c530rri7pnnig.apps.googleusercontent.com',
		clientSecret: 'cnOj31vuFsAHQUvezOEM8OeF',
		profileFields: ['id', 'displayName', 'photos', 'profileUrl', 'email'],
		callbackURL: 'http://localhost:8080/users/auth/google/callback'
	}
};
