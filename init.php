<?php
class MarkAsRead extends Plugin {

	private $host;

	function about() {
		return array(
			1,
			"'Toggle read/unread' button",
			"Olivier Simard-Casanova",
			false,
			"https://github.com/simardcasanova/ttrss_plugin-toggle_read_unread"
		);
	}

	function init($host) {
		$this->host = $host;

		$host->add_hook($host::HOOK_ARTICLE_BUTTON, $this);
	}
	
	function api_version() {
		return 2;
	}
	
	function get_js() {
		return file_get_contents(dirname(__FILE__) . "/toggle_read_unread.js");
	}

	function get_css() {
		return "i.icon-toggle-read-unread { color : black; }";
	}

	function hook_article_button($line) {
		$myId = $line["id"];

		return "<i class='material-icons icon-toggle-read-unread' style='cursor : pointer' onclick='toggleReadUnread(event,$myId);' title='".__('Toggle read/unread')."'>radio_button_checked</i>";
	}

}
?>
