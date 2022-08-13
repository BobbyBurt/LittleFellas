class StateController {

	states;

	currentState;

	constructor(fella, scene) {

        /** all state classes */
		this.states = {
			testState: new StateTest(fella, scene),
			idle: new Idle(fella, scene),
            walk: new RandomWalk(fella, scene),
            dragged: new Dragged(fella, scene),
            breeding: new Breeding(fella, scene),
            feeding: new Feeding(fella, scene),
			dead: new Dead(fella, scene),
			sliding: new Sliding(fella, scene),
			scatter: new Scatter(fella, scene)
		}

        // set reference to this so states can call transition()
        for (const state of Object.values(this.states)) {

            state.stateControl = this;
        }
	}

	setState(name) {

		if (this.currentState === this.states[name]) {
			
			return;
		}
		
		this.currentState = this.states[name];
		this.currentState.enter();
	}

	update() {

        this.currentState.update();
	}
}