// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () {};
	var methods = [
		'assert',
		'clear',
		'count',
		'debug',
		'dir',
		'dirxml',
		'error',
		'exception',
		'group',
		'groupCollapsed',
		'groupEnd',
		'info',
		'log',
		'markTimeline',
		'profile',
		'profileEnd',
		'table',
		'time',
		'timeEnd',
		'timeline',
		'timelineEnd',
		'timeStamp',
		'trace',
		'warn',
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
})();

var TextWriter = function (el, items, time) {
	this.el = el;
	this.items = items;
	this.time = parseInt(time) || 2000;
	this.loop = 0;
	this.newText = '';
	this.tick();
	this.isDelete = false;
};

TextWriter.prototype.tick = function () {
	var i = this.loop % this.items.length;
	var originalText = this.items[i];
	var direction = 1;

	if (this.isDelete) {
		direction = -1;
	}

	this.newText = originalText.substring(0, this.newText.length + direction);
	this.el.innerHTML = '<span class="cursor">' + this.newText + '</span>';

	var _this = this;
	var timeout = 300 - Math.random() * 100;

	if (this.isDelete) {
		timeout = timeout / 2;
	}

	if (!this.isDelete && this.newText === originalText) {
		timeout = this.time;
		this.isDelete = true;
	} else if (this.isDelete && this.newText === '') {
		this.isDelete = false;
		this.loop++;
		timeout = 500;
	}

	setTimeout(function () {
		_this.tick();
	}, timeout);
};

document.addEventListener('DOMContentLoaded', function (event) {
	greeting();
});

function greeting() {
	var elements = document.getElementsByClassName('text-writer');

	for (var i = 0; i < elements.length; i++) {
		var items = elements[i].getAttribute('data-items');

		if (items) {
			new TextWriter(elements[i], JSON.parse(items));
		}
	}
}
