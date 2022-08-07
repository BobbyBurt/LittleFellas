class StateController {

	states;

	currentState;

	constructor(fella, scene) {

        /** all state classes */
		this.states = {
			testState: new StateTest(fella, scene),
			testState2: new StateTest2(fella, scene),
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