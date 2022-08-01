/** @class InputWrapper wraps input from Keys and SimpleButtons for simplified input handling */
class InputWrapper {

	/**
	 * Creates an instance of InputWrapper
	 */
	constructor() {
		this.down = {};
		this.__onPress = {};
		this.__onRelease = {};
	}

	/**
	 * Internal function to stop events from going out to the browser.
	 */
	stopEvent(event) {
		event.originalEvent.stopPropagation();
		event.originalEvent.preventDefault();
	}

	/**
	 * Binds a Phaser Key's input to an input label.
	 *
	 * @param {string} input - The input label this key will be associated with.
	 * @param {Phser.Input.Keyboard.Key} key - The keybaord key we are binding.
	 * @return {InputWrapper} Reference to this InputWrapper
	 */
	bindKey(input, key)
	{
		let _this = this;
		this.down[input] = false;

		key.on('down', function(event) {
			_this.stopEvent(event);
			if (typeof(_this.__onPress[input]) !== 'undefined') {
				_this.__onPress[input]();
			}
			_this.down[input] = true;
		});
		key.on('up', function(event) {
			_this.stopEvent(event);
			if (typeof(_this.__onRelease[input]) !== 'undefined') {
				_this.__onRelease[input]();
			}
			_this.down[input] = false;
		});

		return this;
	}

	/**
	 * Binds a Simplebutton's input to an input label.
	 *
	 * @param {string} input - The input label this key will be associated with.
	 * @param {SimpleButton} button - The button sprite we are binding.
	 * @return {InputWrapper} Reference to this InputWrapper
	 */
	bindButton(input, button)
	{
		let _this = this;
		this.down[input] = false;

		button.onPress(()=>{
			if (typeof(_this.__onPress[input]) !== 'undefined') {
				_this.__onPress[input]();
			}
			_this.down[input] = true;
		});

		button.onRelease(()=>{
			if (typeof(_this.__onRelease[input]) !== 'undefined') {
				_this.__onRelease[input]();
			}
			_this.down[input] = false;
		});

		return this;
	}

	/**
	 * Fires a callback when a key or button bound to the specified input label is pressed.
	 * @param {string} input - The input label we're listening to.
	 * @param {function} callback - The callback function.
	 * @return {InputWrapper} Reference to this InputWrapper
	 */
	onPress(input, callback) {
		this.__onPress[input] = callback;
		return this;
	}

	/**
	 * Fires a callback when a key or button bound to the specified input label is released.
	 * @param {string} input - The input label we're listening to.
	 * @param {function} callback - The callback function.
	 * @return {InputWrapper} Reference to this InputWrapper
	 */
	onRelease(input, callback) {
		this.__onRelease[input] = callback;
		return this;
	}

	/**
	 * Check down state of a key or button bound to the specified input label.
	 * @param {string} input - The input label we're checking.
	 * @return {bool} True if an inputs bound to the input label are down.
	 */
	isDown(input) {
		return typeof(this.down[input]) === 'undefined' ? 0 : this.down[input];
	}
}