medals = '';
ngio = {};
scoreboards = '';
appID = '54963:uiIPq89x';
encryptionKey = 'Xb1dDvpfhljhg2CyUCSs6Q==';

class newgroundsio extends Phaser.Scene
{
	// import { appID } from "../lib/credentials.js";
	// import { encryptionKey } from "../lib/credentials.js";
	
	/* vars to record any medals and scoreboards that get loaded */
	
    constructor()
    {
        super('newgroundsio');
    }

    // configure scene
    init()
    {
        
    }
	
    // queue assets to load
    preload()
    {
		
	}
	
    create()
    {
		ngio = new Newgrounds.io.core(appID, encryptionKey);

        this.initSession();

        /* load our medals and scoreboards from the server */
        ngio.queueComponent("Medal.getList", {}, this.onMedalsLoaded);
        ngio.queueComponent("ScoreBoard.getBoards", {}, this.onScoreboardsLoaded);
        ngio.queueComponent("App.logView", {host: 'localHost'});
        ngio.executeQueue();
    }

    update()
    {

    }
	
	/* handle loaded medals */
	onMedalsLoaded(result) {
		if (result.success) medals = result.medals;
		// console.log(result.medals);
	}
	
	/* handle loaded scores */
	onScoreboardsLoaded(result) {
		if (result.success) scoreboards = result.scoreboards;
		// console.log(result.scoreboards)
	}
	
	onLoggedIn() {
		console.log("Welcome " + ngio.user.name + "!");
	}
	
	onLoginFailed() {
		console.log("There was a problem logging in: " . ngio.login_error.message );
	}
	
	onLoginCancelled() {
		console.log("The user cancelled the login.");
	}
	
	/*
	 * Before we do anything, we need to get a valid Passport session.  If the player
	 * has previously logged in and selected 'remember me', we may have a valid session
	 * already saved locally.
	 */
	initSession() {
		ngio.getValidSession(function() {
			if (ngio.user) {
				/* 
				 * If we have a saved session, and it has not expired, 
				 * we will also have a user object we can access.
				 * We can go ahead and run our onLoggedIn handler here.
				 */
				this.onLoggedIn();
			} else {
				/*
				 * If we didn't have a saved session, or it has expired
				 * we should have been given a new one at this point.
				 * This is where you would draw a 'sign in' button and
				 * have it execute the following requestLogin function.
				 */
			}
	
		});
	}
	
	/* 
	 * Call this when the user clicks a 'sign in' button from your game.  It MUST be called from
	 * a mouse-click event or pop-up blockers will prevent the Newgrounds Passport page from loading.
	 */
	requestLogin() {
		ngio.requestLogin(onLoggedIn, onLoginFailed, onLoginCancelled);
		/* you should also draw a 'cancel login' buton here */
	}
	
	/*
	 * Call this when the user clicks a 'cancel login' button from your game.
	 */
	cancelLogin() {
		/*
		 * This cancels the login request made in the previous function. 
		 * This will also trigger your onLoginCancelled callback.
		 */
		this.ngio.cancelLoginRequest();
	}
	
	/*
	 * If your user is logged in, you should also draw a 'sign out' button for them
	 * and have it call this.
	 */
	logOut() {
		this.ngio.logOut(function() {
			/*
			 * Because we have to log the player out on the server, you will want
			 * to handle any post-logout stuff in this function, wich fires after
			 * the server has responded.
			 */
		});
	}
	
	/* You could use this function to draw the medal notification on-screen */
	onMedalUnlocked(medal) {
		console.log('MEDAL GET:', medal.name);
	}
	
	unlockMedal(medal_name) {
	
		/* If there is no user attached to our ngio object, it means the user isn't logged in and we can't unlock anything */
		if (!ngio.user) return;
	
		var medal;
	
		for (var i = 0; i < medals.length; i++) {
	
			medal = medals[i];
			/* look for a matching medal name */
			if (medal.name == medal_name) {
	
				console.log(medal.unlocked);
	
				/* we can skip unlocking a medal that's already been earned */
				if (!medal.unlocked) {
	
					/* unlock the medal from the server */
					this.ngio.callComponent('Medal.unlock', {id:medal.id}, function(result) {
	
						if (result.success)
						{
							this.onMedalUnlocked(result.medal);
							medal.unlocked = true;
						}
	
					});
				}
	
				return;
			}
		}
	}
	
	postScore(board_name, score_value) {
	
		/* If there is no user attached to our ngio object, it means the user isn't logged in and we can't post anything */
		if (!ngio.user) return;
	
		var score;
		var scoreboard;
	
		for (var i = 0; i < this.scoreboards.length; i++) {
	
			scoreboard = this.scoreboards[i];
	
			ngio.callComponent('ScoreBoard.postScore', {id:scoreboard.id, value:score_value});
		}
	}
}
