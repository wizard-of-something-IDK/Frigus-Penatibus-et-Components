Vue.component("codenames", {
	data: function () {
		return {
			flipped: false
		};
	},
	props: ["name", "codename"],
	template:
		'<div v-on:click="flip"><h3 v-bind:class="{whoami:flipped}">{{name}}</h3> <h3 v-bind:class="{whoami:!flipped}">{{codename}}</h3></div>',
	methods: {
		flip: function () {
			this.flipped = !this.flipped;
		}
	}
});

var submission = new Vue({
	el: "#submission",
	data: {
		nameErrorMsg: "",
		emailErrorMsg: "",
		name: "",
		email: "",
		submit: ""
	},

	watch: {
		name: function (name) {
			if (this.name.length < 2) {
				this.nameErrorMsg =
					"⚠ When entering a name, please make sure it is more than 2 characters long! ⚠";
			} else {
				this.nameErrorMsg = null;
			}
		},

		email: function (email) {
			var address = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (address.test(email)) {
				this.emailErrorMsg = null;
			} else {
				this.emailErrorMsg = "⚠ Please be sure to enter a valid email address! ⚠";
			}
		}
	},

	methods: {
		validate: function () {
			if (this.nameErrorMsg == null && this.emailErrorMsg == null) {
				this.submit =
					"Submitted";
			} else {
				this.submit = "Not submitted";
			}
		}
	}
});

var persona = new Vue({
	el: "#persona",
	data: {
		codenames: [
			{ name: "Protagonist", codename: "Joker" },
			{ name: "Anne", codename: "Panther" },
			{ name: "Ryuji", codename: "Skull" }
		]
	}
});