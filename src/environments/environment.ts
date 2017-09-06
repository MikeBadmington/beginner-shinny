// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
	apiKey: "AIzaSyBCcdXUSS1hYiwgS-B3wRlzZn2ejepxb_0",
    authDomain: "ngfbauth-e0a6d.firebaseapp.com",
    databaseURL: "https://ngfbauth-e0a6d.firebaseio.com",
    projectId: "ngfbauth-e0a6d",
    storageBucket: "ngfbauth-e0a6d.appspot.com",
    messagingSenderId: "502664022010"
  }
};
