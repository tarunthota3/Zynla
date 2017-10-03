module.exports = {
	JWT: {
        secret: 'e3rwefsd'
    },
	facebookAuth: {
		clientID: '360769287679280',
		clientSecret: 'fe83eb10e2938f1b9732da76d226ee62',
		profileFields: ['id', 'displayName', 'photos', 'profileUrl', 'email'],
		callbackURL: 'http://ec2-52-14-238-159.us-east-2.compute.amazonaws.com:8080/users/auth/facebook/callback'
	},
	googleAuth: {
		clientID: '434902701721-8lf1aed894kvbp78fpj8979c732nj67e.apps.googleusercontent.com',
		clientSecret: 'CfjuRmx-B99GiM-6Av3molZi',
		profileFields: ['id', 'displayName', 'photos', 'profileUrl', 'email'],
		callbackURL: 'http://ec2-52-14-238-159.us-east-2.compute.amazonaws.com:8080/users/auth/google/callback'
	}
};
