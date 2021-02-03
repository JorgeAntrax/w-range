export class WRange extends HTMLElement {
	constructor() {
		super();

		this._id = null;
		this._value = 0;
		this._step = 1;
		this._min = 0;
		this._max = 1;

		this._values = {
			min: 0,
			max: 1
		};
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['value','step', 'min', 'max'];
