require.config({
	paths: {
		'jquery': 'jquery-2.1.3.min'
	},
});


define(["jquery",
		"../CodeMirror/lib/codemirror",
		"../require-css/css!../CodeMirror/lib/codemirror"],
function($, CodeMirror) {

	var Editor = {
		init: function() {
			this.$el = $("#entry");
			if(this.$el == null) { return; }

			this.$el.css("width", "100%")
					.css("height", "100%");
			this.$editor = CodeMirror(this.$el[0],
				{lineWrapping: true,
				 lineNumbers: true,
				 autofocus: true});
		},
	};

	Editor.init();
});
