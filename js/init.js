require.config({
	paths: {
		'jquery': 'jquery-2.1.3.min'
	},
});


define(["jquery",
		"../CodeMirror/lib/codemirror",
		"../require-css/css!../css/style",
		"../require-css/css!../CodeMirror/theme/3024-night",
		"../require-css/css!../CodeMirror/lib/codemirror",
		"../require-css/css!../Font-Awesome/css/font-awesome.min"],
function($, CodeMirror) {

	var Editor = {
		init: function() {
			this.$el = $("#entry");
			if(this.$el == null) { return; }

			this.$el.css("width", "100%")
					.css("height", "100%");
			this.$menu_div = $("<div />").attr("class", "toolbar")
										 .appendTo(this.$el);
			var that = this;
			this.$file_opener = $("<input />").attr("type", "file");
			$(this.$file_opener).on("change", function(event) { that.read_file(event); });
			var $open_button = $("<div />").appendTo(this.$menu_div)
										   .attr("class", "button")
										   .click(function() {
				that.$file_opener.click();
			}).append($("<i />").attr("class", "fa fa-file"));
			this.$editor_div = $("<div />").attr("class", "editor")
										   .appendTo(this.$el);
			this.editor = CodeMirror(this.$editor_div[0],
				{lineWrapping: true,
				 lineNumbers: true,
				 autofocus: true,
				 theme: "3024-night"});
			this.editor.setSize("100%", "100%");
		},
		read_file: function(event) {
			var fd = event.target.files[0];
			if(fd) {
				document.title = fd.name;
				var that = this;
				var reader = new FileReader();
				reader.onload = function(evnt) {
					that.editor.setValue(evnt.target.result);
				}
				reader.readAsText(fd);
			} else {
				alert("Failed to load file");
			}
		},
	};

	Editor.init();
});
