function resolvelater() {
       return new Promise (resolve => {
	        setTimeout(() => {
			    resolve( 'Welcome to the world');
			}, 2000);
		});
}
async function waitforWelcomeToTheWorld() {
     console.log('calling');
     const result = await resolvelater();
	 console.log(result);
}
waitforWelcomeToTheWorld()	 