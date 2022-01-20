
const getState = (articleId) => {
	return document.getElementById(`RROW-${articleId}`).classList.contains("Unread");
};

const setState = (elem, state) => {
	elem.innerHTML = state ? "radio_button_checked" : "radio_button_unchecked";
};

require(['dojo/_base/kernel', 'dojo/ready'], function (dojo, ready) {
	ready(function () {
		PluginHost.register(PluginHost.HOOK_COUNTERS_PROCESSED, () => {
			elem = dojo.byId("toggle_read_unread_plugin");
			if (elem) {
				setState(elem, getState(Article.getActive()));
			}
		});
	});
});

function toggleReadUnread(evt, elem, articleId) {
	try {
		// turn off "event bubbling" for this click.
		// this is to avoid toggling the Unread state twice
		// first by this method and 
		// second by the onclick event of the article row.
		// (onclick of the row only marks the article as read, 
		//  not unread again)
		// code from: http://www.quirksmode.org/js/events_order.html
		var e = evt || window.event;
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();

		// toggle the articles unread state
		//  Unread will become Read
		//  Read will become Unread
		Headlines.toggleUnread(articleId);
		
		setState(elem, getState(articleId));


	} catch (e) {
		console.warn("toggleReadUnread", e);
	}
}

