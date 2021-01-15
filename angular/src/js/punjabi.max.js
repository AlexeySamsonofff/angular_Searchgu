var selectedKey = "";
var animatekeys = true;

function PrintKey(keynum, keywidth, keyclass, name) {
	document.write('<td id="key' + keynum + '"   class="' + keyclass + ' cursor" colspan="' + keywidth + '"  onclick=addCharacter(this) ><input type="hidden" id="hKey' + keynum + 'text" value="' + name + '">   <span class="key_green" id="key' + keynum + 'english"></span><span id="key' + keynum + 'text">' + name + '</span></td>');
}

function PrintKeyboard() {
	document.write('<table cellspacing="1" cellpadding="3" ID="Table2">');
	document.write('<tr>');
	PrintKey(1, 1, "dbl");
	PrintKey(2, 1, "dbl");
	PrintKey(3, 1, "dbl");
	PrintKey(4, 1, "dbl");
	PrintKey(5, 1, "dbl");
	PrintKey(6, 1, "dbl");
	PrintKey(7, 1, "dbl");
	PrintKey(8, 1, "dbl");
	PrintKey(9, 1, "dbl");
	PrintKey(10, 1, "dbl");
	PrintKey(11, 1, "dbl");
	PrintKey(12, 1, "dbl");
	PrintKey(13, 1, "dbl");
	PrintKey(14, 2, "act", "");
	document.write('</tr><tr>');
	PrintKey(15, 1, "act", "");
	PrintKey(16, 1, "dbl");
	PrintKey(17, 1, "dbl");
	PrintKey(18, 1, "dbl");
	PrintKey(19, 1, "dbl");
	PrintKey(20, 1, "dbl");
	PrintKey(21, 1, "dbl");
	PrintKey(22, 1, "dbl");
	PrintKey(23, 1, "dbl");
	PrintKey(24, 1, "dbl");
	PrintKey(25, 1, "dbl");
	PrintKey(26, 1, "dbl");
	PrintKey(27, 1, "dbl");
	PrintKey(41, 1, "dbl");
	PrintKey(59, 1, "dbl", "&nbsp;");
	document.write('</tr><tr>');
	PrintKey(29, 2, "act", "");
	PrintKey(30, 1, "dbl");
	PrintKey(31, 1, "dbl");
	PrintKey(32, 1, "dbl");
	PrintKey(33, 1, "dbl");
	PrintKey(34, 1, "dbl");
	PrintKey(35, 1, "dbl");
	PrintKey(36, 1, "dbl");
	PrintKey(37, 1, "dbl");
	PrintKey(38, 1, "dbl");
	PrintKey(39, 1, "dbl");
	PrintKey(40, 1, "dbl");
	PrintKey(28, 2, "act", "Enter");
	document.write('</tr><tr>');
	PrintKey(42, 1, "act", "");
	PrintKey(43, 1, "dbl");
	PrintKey(44, 1, "dbl");
	PrintKey(45, 1, "dbl");
	PrintKey(46, 1, "dbl");
	PrintKey(47, 1, "dbl");
	PrintKey(48, 1, "dbl");
	PrintKey(49, 1, "dbl");
	PrintKey(50, 1, "dbl");
	PrintKey(51, 1, "dbl");
	PrintKey(52, 1, "dbl");
	PrintKey(53, 4, "act", "");
	document.write('</tr><tr>');
	PrintKey(54, 2, "act", "Ctrl");
	PrintKey(55, 2, "act", "Alt");
	PrintKey(56, 7, "act", "Space<br>");
	PrintKey(57, 2, "act", "Alt");
	PrintKey(58, 2, "act", "Ctrl");
	document.write('</tr></table>');
}

function findLastChar() {
	if (document.forms['myForm'].outText.createTextRange) {
		var range = document.selection.createRange().duplicate();
		range.moveStart("character", -1);
		return (range.text);
	} else if (document.forms['myForm'].outText.selectionStart) {
		var startPos = document.forms['myForm'].outText.selectionStart;
		var endPos = document.forms['myForm'].outText.selectionEnd;
		startPos = startPos - 1;
		endPos = startPos + 1;
		return (document.forms['myForm'].outText.value).substring(startPos, endPos);
	}
	return "";
}

function eraseLastChar() {
	if (document.forms['myForm'].outText.createTextRange) {
		var range = document.selection.createRange().duplicate();
		range.moveStart("character", -1);
		range.text = "";
	} else {
		var txtarea = document.forms['myForm'].outText;
		var startPos = txtarea.selectionStart - 1;
		var endPos = txtarea.selectionEnd;
		var scrollTop = txtarea.scrollTop;
		txtarea.value = txtarea.value.substring(0, startPos) + txtarea.value.substring(endPos, txtarea.value.length);
		var cPos = startPos;
		txtarea.selectionStart = cPos;
		txtarea.selectionEnd = cPos;
		txtarea.scrollTop = scrollTop;
	}
}

function insertAtCaret(text) {
	// if($('#outText').is(':visible')){

	var prevVal = $('#outText').val();

	if ($('#outText').attr('display') != 'none') {
		var txtarea = document.forms['myForm'].outText;
	} else {
		var txtarea = document.forms['myForm'].outText2;
	}


	// //added Gagandeep Singh 05022011
	// txtarea.focus();

	if (document.selection) {
		var CaretPos;
		if (document.forms['myForm'].outText.createTextRange) {
			CaretPos = document.selection.createRange().duplicate();
			CaretPos.text = text;
		}
	}
	else if (txtarea.selectionStart || txtarea.selectionStart == '0') {
		var startPos = txtarea.selectionStart;
		var endPos = txtarea.selectionEnd;
		var scrollTop = txtarea.scrollTop;
		var myText = (txtarea.value).substring(startPos, endPos);
		if (!myText) { myText = text; }
		// txtarea.value = txtarea.value.substring(0, startPos) + text +  txtarea.value.substring(endPos, txtarea.value.length);
		// txtarea.focus();
		var newValue = prevVal.substring(0, startPos) + text + prevVal.substring(endPos, prevVal.length);
		$('#outText').eq(0).val(newValue).trigger("input");
		$('#outText').focus();

		var cPos = startPos + text.length;
		txtarea.selectionStart = cPos;
		txtarea.selectionEnd = cPos;
		txtarea.scrollTop = scrollTop;

	}
}
function getRef(obj) {
	if (typeof obj == "string") obj = document.getElementById(obj);
	return obj;
}
function setStyle(obj, style, value) {
	obj = getRef(obj);
	obj.style[style] = value;
}
function getStyle(obj, style) {
	if (!document.getElementById) return;
	var obj = getRef(obj);
	var value = obj.style[style];
	if (!value)
		if (document.defaultView)
			value = document.defaultView.
				getComputedStyle(obj, "").getPropertyValue(style);
		else if (obj.currentStyle)
			value = obj.currentStyle[style];
	return value;
}
function setClassName(obj, className) {
	getRef(obj).className = className;
}
function setKeyText(keyNum, upperText, lowerText) {
	var keyTextName = "key" + keyNum + "text";
	obj = getRef(keyTextName);
	var i;
	var str;
	str = new String("");
	for (i = 0; i < 3 - upperText.length; i++)str = str.concat("&nbsp;");
	str = str.concat(upperText, "<br />", lowerText);
	for (i = 0; i < 3 - lowerText.length; i++)str = str.concat("&nbsp;");
	obj.innerHTML = str;

	/* code for hidden field
     * Added Gagandeep Singh   05022011
    */
	var keyName = 'hKey' + keyNum + 'text';
	obj = getRef(keyName);
	var i;
	var str;
	str = new String("");
	for (i = 0; i < 3 - upperText.length; i++)str = str.concat("");
	str = str.concat(upperText, "&nbsp;", lowerText);
	for (i = 0; i < 3 - lowerText.length; i++)str = str.concat("");
	obj.value = str;


	var englishkey;
	if (lang == 0) {
		englishkey = GetEnglishButton(keyNum, false);
	}
	else {
		englishkey = "";
	}
	keyTextName = "key" + keyNum + "english";
	obj = getRef(keyTextName);

	obj.innerHTML = englishkey;
}
function lightonKey(keyName) {
	return;
	if (selectedKey != "") lightoffKey();
	setStyle(keyName, "backgroundColor", "#FF9933");
	selectedKey = keyName;
}
function lightoffKey() {
	return;
	if (selectedKey != "") {
		setStyle(selectedKey, "backgroundColor", "#dcdcdc");
		selectedKey = "";
	}
}
function animateKey(keyNum) {
	var keyName = "key" + keyNum;
	lightonKey(keyName);
	setTimeout('lightoffKey()', 500);
}
function AnimateControlKey(keyCode) {
	switch (keyCode) {
		case 13: animateKey(28);
			break;
		case 46: break;
			break;
		case 8: animateKey(14);
			break;
	}
}
function AnimateButtonPress(keyChar) {
	switch (keyChar) {
		case "~":
		case "`":
			animateKey(1);
			break;
		case "!":
		case "1":
			animateKey(2);
			break;
		case "@":
		case "2":
			animateKey(3);
			break;
		case "#":
		case "3":
			animateKey(4);
			break;
		case "$":
		case "4":
			animateKey(5);
			break;
		case "%":
		case "5":
			animateKey(6);
			break;
		case "^":
		case "6":
			animateKey(7);
			break;
		case "&":
		case "7":
			animateKey(8);
			break;
		case "*":
		case "8":
			animateKey(9);
			break;
		case "(":
		case "9":
			animateKey(10);
			break;
		case "0":
		case ")":
			animateKey(11);
			break;
		case "-":
		case "_":
			animateKey(12);
			break;
		case "+":
		case "=":
			animateKey(13);
			break;
		case "Q":
		case "q":
			animateKey(16);
			break;
		case "W":
		case "w":
			animateKey(17);
			break;
		case "E":
		case "e":
			animateKey(18);
			break;
		case "R":
		case "r":
			animateKey(19);
			break;
		case "T":
		case "t":
			animateKey(20);
			break;
		case "Y":
		case "y":
			animateKey(21);
			break;
		case "U":
		case "u":
			animateKey(22);
			break;
		case "I":
		case "i":
			animateKey(23);
			break;
		case "O":
		case "o":
			animateKey(24);
			break;
		case "P":
		case "p":
			animateKey(25);
			break;
		case "{":
		case "[":
			animateKey(26);
			break;
		case "}":
		case "]":
			animateKey(27);
			break;
		case "A":
		case "a":
			animateKey(30);
			break;
		case "S":
		case "s":
			animateKey(31);
			break;
		case "D":
		case "d":
			animateKey(32);
			break;
		case "F":
		case "f":
			animateKey(33);
			break;
		case "G":
		case "g":
			animateKey(34);
			break;
		case "H":
		case "h":
			animateKey(35);
			break;
		case "J":
		case "j":
			animateKey(36);
			break;
		case "K":
		case "k":
			animateKey(37);
			break;
		case "L":
		case "l":
			animateKey(38);
			break;
		case ";":
		case ":":
			animateKey(39);
			break;
		case '"':
		case "'":
			animateKey(40);
			break;
		case "|":
		case "\\":
			animateKey(41);
			break;
		case "Z":
		case "z":
			animateKey(43);
			break;
		case "X":
		case "x":
			animateKey(44);
			break;
		case "C":
		case "c":
			animateKey(45);
			break;
		case "V":
		case "v":
			animateKey(46);
			break;
		case "B":
		case "b":
			animateKey(47);
			break;
		case "N":
		case "n":
			animateKey(48);
			break;
		case "M":
		case "m":
			animateKey(49);
			break;
		case "<":
		case ",":
			animateKey(50);
			break;
		case ">":
		case ".":
			animateKey(51);
			break;
		case "?":
		case "/":
			animateKey(52);
			break;
		case " ":
			animateKey(56);
			break;
	}
}

function GetEnglishButton(num, shift) {
	switch (num) {
		case 1:
			if (shift) return "~";
			return "`";
		case 2: if (shift) return "!";
			return "1";
		case 3: if (shift) return '@';
			return "2";
		case 4: if (shift) return "#";
			return "3";
		case 5: if (shift) return "$";
			return "4";
		case 6: if (shift) return "%";
			return "5";
		case 7: if (shift) return "^";
			return "6";
		case 8: if (shift) return "&";
			return "7";
		case 9: if (shift) return "*";
			return "8";
		case 10: if (shift) return "(";
			return "9";
		case 11: if (shift) return ")";
			return "0";
		case 12: if (shift) return "_";
			return "-";
		case 13: if (shift) return "+";
			return "=";
		case 13: if (shift) return "BackSp";
			return "";
		case 16: if (shift) return "Q";
			return "q";
		case 17: if (shift) return "W";
			return "w";
		case 18: if (shift) return "E";
			return "e";
		case 19: if (shift) return "R";
			return "r";
		case 20: if (shift) return "T";
			return "t";
		case 21: if (shift) return "Y";
			return "y";
		case 22: if (shift) return "U";
			return "u";
		case 23: if (shift) return "I";
			return "i";
		case 24: if (shift) return "O";
			return "o";
		case 25: if (shift) return "P";
			return "p";
		case 26: if (shift) return "{";
			return "[";;
		case 27: if (shift) return "}";
			return "]";
		case 29: if (shift) { return "Caps Lock"; } else { return ""; };
		case 30: if (shift) return "A";
			return "a";
		case 31: if (shift) return "S";
			return "s";
		case 32: if (shift) return "D";
			return "d";
		case 33: if (shift) return "F";
			return "f";
		case 34: if (shift) return "G";
			return "g";
		case 35: if (shift) return "H";
			return "h";
		case 36: if (shift) return "J";
			return "j";
		case 37: if (shift) return "K";
			return "k";
		case 38: if (shift) return "L";
			return "l";
		case 39: if (shift) return ":";
			return ";";
		case 40: if (shift) return '"';
			return "'";
		case 41: if (shift) return "|";
			return '\\';
		case 43: if (shift) return "Z";
			return "z";
		case 44: if (shift) return "X";
			return "x";
		case 45: if (shift) return "C";
			return "c";
		case 46: if (shift) return "V";
			return "v";
		case 47: if (shift) return "B";
			return "b";
		case 48: if (shift) return "N";
			return "n";
		case 49: if (shift) return "M";
			return "m";
		case 50: if (shift) return "<";
			return ',';
		case 51: if (shift) return ">";
			return '.';
		case 52: if (shift) return '?';
			return '/';
	}
	return "";
}
function setEnglishKeyboardButtons() {
	var i;
	for (i = 1; i <= 52; i++) {
		setKeyText(i, GetEnglishButton(i, true), GetEnglishButton(i, false));
	}
}
function setKeyboardButtons() {
	if (lang == 1) setEnglishKeyboardButtons();
	else {
		var i;
		var down;
		var downsecond;
		var up;
		for (i = 1; i <= 52; i++) {
			down = getNextState("", GetEnglishButton(i, false), false);
			downsecond = getNextState(down, GetEnglishButton(i, false), false);
			if (down.charCodeAt(0) != downsecond.charCodeAt(0)) {
				down = down + downsecond;
			}
			up = getNextState("", GetEnglishButton(i, true), false);
			setKeyText(i, up, down);
		}
	}
}

function replaceEndOfWord(character) {
	var newChar = String.fromCharCode(changeEndOfWord(character.charCodeAt(0)));
	if (newChar != character) {
		eraseLastChar();
		insertAtCaret(newChar);
	}
}
function isVisibleChar(character) {
	switch (character) {
		case "\\":
		case "a":
		case "b":
		case "c":
		case "d":
		case "e":
		case "f":
		case "g":
		case "h":
		case "i":
		case "j":
		case "k":
		case "l":
		case "m":
		case "n":
		case "o":
		case "p":
		case "q":
		case "r":
		case "s":
		case "t":
		case "u":
		case "v":
		case "w":
		case "x":
		case "y":
		case "z":
		case "A":
		case "B":
		case "C":
		case "D":
		case "E":
		case "F":
		case "G":
		case "H":
		case "I":
		case "J":
		case "K":
		case "L":
		case "M":
		case "N":
		case "O":
		case "P":
		case "Q":
		case "R":
		case "S":
		case "T":
		case "U":
		case "V":
		case "W":
		case "X":
		case "Y":
		case "Z":
		case " ":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "0":
		case "!":
		case "�":
		case "$":
		case "%":
		case "&":
		case "/":
		case "(":
		case ")":
		case "=":
		case "?":
		case "{":
		case "}":
		case "[":
		case "]":
		case "*":
		case "-":
		case "+":
		case "<":
		case ">":
		case "|":
		case ",":
		case ";":
		case ".":
		case ":":
		case "-":
		case "_":
		case "#":
		case "'":
		case "~":
		case "@":
		case " ":
			return true;
			break;
	}
	return false;
}
function isValidAlphabet(character) {
	if (getNextState("", character) == "", false) return false;
	return true;
}
function moveCursor() {
	var range = document.forms['myForm'].outText.createTextRange();
	range.moveStart("character", caret);
	range.collapse(), range.select();
}
function KeyPress(evt) {
	var keyCode;
	var keyChar;
	if (evt.keyCode === 13) {
		$('#outText').trigger('click');
		evt.preventDefault();
		return false;
	}
	//alert("KeyPress");
	evt = (evt) ? evt : (window.event) ? event : null;
	if (evt) {
		if (window.event) {
			keyCode = evt.keyCode;
		}
		else {
			keyCode = evt.charCode;

		}
		if (evt.ctrlKey == true) {
			return true;
		}
		if (evt.altKey == true) {
			return true;
		}
		if ((keyCode == 0) || (keyCode == 13)) {

			return true;
		}
		//alert(evt.type + ': evt.keyCode: ' + evt.keyCode + '; evt.charCode: ' + evt.charCode);
	}
	else {
		alert("Wrong version");
		return true;
	}
	evt.returnValue = false;
	//alert(keyCode);
	keyChar = String.fromCharCode(keyCode);
	//alert(keyChar);
	if (lang == 0) {
		if (isValidAlphabet(keyChar)) {
			if (animatekeys == true) {
				AnimateButtonPress(keyChar);
			}
			var hebChar = getNextState(findLastChar(), keyChar, true);
			if (hebChar == keyChar) {
				if (layout == 0) replaceEndOfWord(findLastChar());
			}

			insertAtCaret(hebChar);
			if (evt.preventDefault) {
				evt.preventDefault();
				evt.cancelBubble = true;
			}
		}
		else {
			evt.returnValue = true;
		}
	}
	else if (isVisibleChar(keyChar)) {
		if (animatekeys == true) {
			AnimateButtonPress(keyChar);
		}
		if (layout == 0) replaceEndOfWord(findLastChar());
		insertAtCaret(keyChar);
		if (evt.preventDefault) {
			evt.preventDefault();
			evt.cancelBubble = true;
		}
	}
	else {
		evt.returnValue = true;
	}
	document.forms['myForm'].outText.focus();
}
function SetLang(num) {
	lang = num;
	setKeyboardButtons();
}
function SetLayout(num) {
	if (num == 0) SaveLayoutSelection("PHONETIC");
	else SaveLayoutSelection("HEBREW");
	layout = num;
	setKeyboardButtons();
}
function copyTextArea() {
	document.forms['myForm'].outText.focus();
	document.forms['myForm'].outText.select();
}
function resetTextArea() {
	document.forms['myForm'].intext.value = new String();
	document.forms['myForm'].outtext.value = new String();
}
function is_framed() {
	var quirksMode = (top == self);
	if (!quirksMode) location.replace('#');
}

/*************************************
 *	Clickable keyboard functionality *
 * Author= Gagandeep Singh 05/02/2011 *
 *                                    *
 **************************************/
function addCharacter(elm) {
	var id = elm.id;
	var keyCode = id.substring(3);
	var children = document.getElementById(id).getElementsByTagName('input');
	var capsOn = null;
	for (var i = 0; i < children.length; i++) {
		if (children[i].getAttribute('type') == 'hidden') {
			var arr = Array();
			var string = children[i].value;
			if (id != 'key29') {
				animateKey(keyCode);
			} else {
				toggle(id);
			}
			if (trim(string) == 'Space<br>') {
				string = " ";
				insertAtCaret(string);
			} else {
				capsOn = isCapslock('key29');
				if (capsOn != null && capsOn == true) {

					arr = string.split("&nbsp;");

					if (arr[0] != "Caps Lock" && arr[0] != '') {
						value = checkKeyValue(arr[0]);
						insertAtCaret(value);
					}
				} else {
					arr = string.split("&nbsp;");
					if (arr != "") {
						value = checkKeyValue(arr[1]);
						insertAtCaret(value);
					}
					/*arr = string.split("&nbsp;");
					if(arr[1] != 'undefined'){
						insertAtCaret(arr[1]);
					}*/
				}
			}
		}
	}

}

/*Added Gagandeep Singh 05022011*/
function trim(value) {
	value = value.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
	//value = value.replace(/\s+$/,'');
	return value;
}


function toggle(id) {
	el = document.getElementById(id);
	if (el.style.backgroundColor === 'rgb(255, 207, 158)') {
		el.style.backgroundColor = '#DCDCDC';
	} else {
		el.style.backgroundColor = 'rgb(255, 207, 158)';
	}
};
function isCapslock(id) {
	el = document.getElementById(id);
	if (el.style.backgroundColor === 'rgb(255, 207, 158)') {
		return true;
	} else {
		return false;
	}
};
function checkKeyValue(value) {
	switch (value) {
		case undefined:
		case 'Ctrl':
		case 'Alt':
			value = "";
			break;

	}
	return value;
};

/*				10-20-2012 code for copy paste string convert to punjabi.				*/
google.load("language", "1");
function eventFired() {
	//do this on visible
	if ($('#outText').is(':visible')) {
		container = $("#outText");
		data = $('#outText').val();
	} else {
		container = $("#outText2");
		data = $('#outText2').val();
	}

	if (data != '') {
		explodeArr = data.split(" ");

		var fullString = '';
		j = 0;
		count = 0;
		var valArray = [];

		for (i = 0; i < explodeArr.length; i++) {
			count++;
			j++;

			if (j <= 5) {
				valArray.push(explodeArr[i]);
			}

			if (j == 5 || count == explodeArr.length) {
				google.language.transliterate(valArray, "en", "pa", function (result) {
					if (!result.error) {
						if (result.transliterations && result.transliterations.length > 0) {
							for (j = 0; j < result.transliterations.length; j++) {
								if (result.transliterations[j].transliteratedWords.length > 0) {
									fullString += " " + result.transliterations[j].transliteratedWords[0];
								} else {
									fullString += " " + result.transliterations[j].sourceWord;
								}
							}
							container.val(fullString.substr(1));
						}
					}
				});
				valArray = [];
				j = 1;
			}
		}
	}
};
//google.setOnLoadCallback(eventFired);


var lang = 0;
var layout = 1;
var hebrewStart = 2565;
function getNextStateHebrewLayout(_3e, _3f, _40) {
	switch (_3f) {
		case "t": return String.fromCharCode(hebrewStart + 26);
		case "T": return String.fromCharCode(hebrewStart + 27);
		case "c": return String.fromCharCode(hebrewStart + 21);
		case "C": return String.fromCharCode(hebrewStart + 22);
		case "d": return String.fromCharCode(hebrewStart + 33);
		case "D": return String.fromCharCode(hebrewStart + 34);
		case "s": return String.fromCharCode(hebrewStart + 51);
		case "S": return String.fromCharCode(hebrewStart + 49);
		case "v": return String.fromCharCode(hebrewStart + 48);
		case "V": return String.fromCharCode(hebrewStart + 87);
		case "u": return String.fromCharCode(hebrewStart + 60);
		case "U": return String.fromCharCode(hebrewStart + 61);
		case "z": return String.fromCharCode(hebrewStart + 85);
		case "Z": return String.fromCharCode(hebrewStart + 86);
		case "j": return String.fromCharCode(hebrewStart + 23);
		case "J": return String.fromCharCode(hebrewStart + 24);
		case "y": return String.fromCharCode(hebrewStart + 66);
		case "Y": return String.fromCharCode(hebrewStart + 67);
		case "h": return String.fromCharCode(hebrewStart + 52);
		case "H": return String.fromCharCode(hebrewStart + 72) + String.fromCharCode(hebrewStart + 52);
		case "l": return String.fromCharCode(hebrewStart + 45);
		case "L": return String.fromCharCode(hebrewStart + 46);
		case "f": return String.fromCharCode(hebrewStart + 28);
		case "F": return String.fromCharCode(hebrewStart + 29);
		case "k": return String.fromCharCode(hebrewStart + 16);
		case "K": return String.fromCharCode(hebrewStart + 17);
		case "o": return String.fromCharCode(hebrewStart + 70);
		case "O": return String.fromCharCode(hebrewStart + 71);
		case "n": return String.fromCharCode(hebrewStart + 35);
		case "N": return String.fromCharCode(hebrewStart - 3);
		case "i": return String.fromCharCode(hebrewStart + 58);
		case "I": return String.fromCharCode(hebrewStart + 59);
		case "b": return String.fromCharCode(hebrewStart + 39);
		case "B": return String.fromCharCode(hebrewStart + 40);
		case "x": return String.fromCharCode(hebrewStart + 30);
		case "X": return String.fromCharCode(hebrewStart + 42);
		case "g": return String.fromCharCode(hebrewStart + 18);
		case "G": return String.fromCharCode(hebrewStart + 19);
		case ";": return String.fromCharCode(2563);
		case ":": return new String(":");
		case "p": return String.fromCharCode(hebrewStart + 37);
		case "P": return String.fromCharCode(hebrewStart + 38);
		case ".": return new String(".");
		case ">": return String.fromCharCode(2404);
		case "m": return String.fromCharCode(hebrewStart + 41);
		case "M": return String.fromCharCode(hebrewStart + 107);
		case "e": return String.fromCharCode(hebrewStart + 109);
		case "E": return String.fromCharCode(hebrewStart + 14);
		case "r": return String.fromCharCode(hebrewStart + 43);
		case "R": return String.fromCharCode(hebrewStart + 72) + String.fromCharCode(hebrewStart + 43);
		case "a": return String.fromCharCode(hebrewStart + 0);
		case "A": return String.fromCharCode(hebrewStart + 110);
		case ",": return new String(",");
		case "<": return String.fromCharCode(hebrewStart + 111);
		case "q": return String.fromCharCode(hebrewStart + 31);
		case "Q": return String.fromCharCode(hebrewStart + 32);
		case "w": return String.fromCharCode(hebrewStart + 57);
		case "W": return String.fromCharCode(hebrewStart + 57) + String.fromCharCode(hebrewStart - 3);
		case "/": return String.fromCharCode(2405);
		case "`": return String.fromCharCode(hebrewStart + 108);
		case "1": return String.fromCharCode(hebrewStart + 98);
		case "2": return String.fromCharCode(hebrewStart + 99);
		case "3": return String.fromCharCode(hebrewStart + 100);
		case "4": return String.fromCharCode(hebrewStart + 101);
		case "5": return String.fromCharCode(hebrewStart + 102);
		case "6": return String.fromCharCode(hebrewStart + 103); case "7": return String.fromCharCode(hebrewStart + 104); case "8": return String.fromCharCode(hebrewStart + 105); case "9": return String.fromCharCode(hebrewStart + 106); case "0": return String.fromCharCode(hebrewStart + 97); case "!": return String.fromCharCode(hebrewStart + 1); case "@": return String.fromCharCode(hebrewStart + 2); case "#": return String.fromCharCode(hebrewStart + 3); case "$": return String.fromCharCode(hebrewStart + 4); case "%": return String.fromCharCode(hebrewStart + 5); case "^": return String.fromCharCode(hebrewStart + 10); case "&": return String.fromCharCode(hebrewStart + 11); case "*": return String.fromCharCode(hebrewStart + 15); case "(": return String.fromCharCode(hebrewStart + 84); case ")": return String.fromCharCode(hebrewStart + 89); case "\\": return String.fromCharCode(hebrewStart + 25); case "|": return String.fromCharCode(hebrewStart + 20); case "_": return String.fromCharCode(9772);
	}return _3f;
};
function getNextStatePhoneticLayout(_41, _42, _43) {
	switch (_41.charCodeAt(0)) {
		case hebrewStart + 18: if (_42 == "s") { if (_43) { eraseLastChar(); } return String.fromCharCode(hebrewStart + 26); } break;
		case hebrewStart + 27: if (_42 == "t") { if (_43) { eraseLastChar(); } return String.fromCharCode(hebrewStart + 9); } break;
		case hebrewStart + 7: if (_42 == "z") { if (_43) { eraseLastChar(); } return String.fromCharCode(hebrewStart + 23); } break;
	}
	switch (_42) {
		case "a": return String.fromCharCode(hebrewStart + 1);
		case "b": return String.fromCharCode(hebrewStart + 2);
		case "c": return String.fromCharCode(hebrewStart + 12);
		case "d": return String.fromCharCode(hebrewStart + 4);
		case "e": return String.fromCharCode(hebrewStart + 19);
		case "p": return String.fromCharCode(hebrewStart + 21);
		case "g": return String.fromCharCode(hebrewStart + 3);
		case "h": return String.fromCharCode(hebrewStart + 5);
		case "i": return String.fromCharCode(hebrewStart + 10);
		case "k": return String.fromCharCode(hebrewStart + 24);
		case "l": return String.fromCharCode(hebrewStart + 13);
		case "m": return String.fromCharCode(hebrewStart + 15);
		case "n": return String.fromCharCode(hebrewStart + 17);
		case "r": return String.fromCharCode(hebrewStart + 25);
		case "s": return String.fromCharCode(hebrewStart + 18);
		case "t": return String.fromCharCode(hebrewStart + 27);
		case "v": return String.fromCharCode(hebrewStart + 6);
		case "z": return String.fromCharCode(hebrewStart + 7);
		case "x": return String.fromCharCode(hebrewStart + 8);
	}
	return _42;
};
function initKeyboard() {
	setKeyboardButtons();
};
function changeEndOfWord(_44) {
	switch (_44) {
		case (hebrewStart + 12): return hebrewStart + 11; break;
		case (hebrewStart + 15): return hebrewStart + 14; break;
		case (hebrewStart + 17): return hebrewStart + 16; break;
		case (hebrewStart + 21): return hebrewStart + 20; break;
		case (hebrewStart + 23): return hebrewStart + 22; break;
	}
	return _44;
};
function getNextState(_45, _46, _47) {
	switch (layout) {
		case 0: return getNextStatePhoneticLayout(_45, _46, _47);
		case 1: return getNextStateHebrewLayout(_45, _46, _47);
	}
};
jQuery["cookie"] = function (name, value, options) {
	if (typeof value != "undefined") {
		options = options || {};
		if (value === null) {
			value = "";
			options["expires"] = -1;
		};
		var expires = "";
		if (options["expires"] && (typeof options["expires"] == "number" || options["expires"]["toUTCString"])) {
			var date;
			if (typeof options["expires"] == "number") {
				date = new Date();
				date["setTime"](date["getTime"]() + (options["expires"] * 24 * 60 * 60 * 1000));
			} else {
				date = options["expires"];
			};
			expires = "; expires=" + date["toUTCString"]();
		};
		var path = options["path"] ? "; path=" + (options["path"]) : "";
		var domain = options["domain"] ? "; domain=" + (options["domain"]) : "";
		var secure = options["secure"] ? "; secure" : ""; document["cookie"] = [name, "=", encodeURIComponent(value), expires, path, domain, secure]["join"](""); } else { var cookieValue = null; if (document["cookie"] && document["cookie"] != "") { var cookies = document["cookie"]["split"](";"); for (var i = 0; i < cookies["length"]; i++) { var cookie = jQuery["trim"](cookies[i]); if (cookie["substring"](0, name["length"] + 1) == (name + "=")) { cookieValue = decodeURIComponent(cookie["substring"](name["length"] + 1)); break; }; }; }; return cookieValue; }; }; is_framed(); function setVPK() { var date = new Date(); date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); jQuery.cookie('vpkPref', $("[name=vpkType]").attr("value"), { path: '/', expires: date }); switch ($("[name=\x22vpkType\x22]")["attr"]("value")) { case "a": $("#outText2")["val"]($("#outText")["val"]()); $("#outText2")["show"](); $("#outText")["hide"](); $("[name=\x22vpkType\x22]")["attr"]("value", "n")["removeClass"]("transOff")["addClass"]("transOn"); $("#outText2")["focus"](); break;; case "n": $("#outText")["val"]($("#outText2")["val"]()); $("#outText")["show"](); $("#outText2")["hide"](); $("[name=\x22vpkType\x22]")["attr"]("value", "a")["removeClass"]("transOn")["addClass"]("transOff");
		// $("#outText")["focus"]();
		break;;
	}; }; $(document)["ready"](function () {
		// document["getElementById"]("outText")["focus"]();
		// document["getElementById"]("googleAds")["innerHTML"] = document["getElementById"]("adFooter")["innerHTML"];
		if (jQuery.cookie('vpkPref')) { $("[name=vpkType]").attr("value", jQuery.cookie('vpkPref')); }; setVPK(); $(".feedback input")["focus"](function () { if ($(this)["val"]() == $(this)["attr"]("title")) { $(this)["val"]("")["removeClass"]("inactive")["addClass"]("active"); }; })["blur"](function () { if ($(this)["val"]() == "") { $(this)["val"]($(this)["attr"]("title"))["removeClass"]("active")["addClass"]("inactive"); }; }); $("#niImg")["click"](function () { $("#divComments")["show"](); $(".feedback #txt")["hide"](); }); $(".feedback .ud")["click"](function () { var ud = $(this)["attr"]("name"); if (ud == "ni" && ($(".feedback input")["val"]() == $(".feedback input")["attr"]("title") || $(".feedback input")["val"]() == "")) { $(".feedback input")["focus"](); return false; }; $["ajax"]({ type: "POST", url: "ud.php", data: { "ud": ud, "comments": $(".feedback input")["val"]() }, success: function () { $(".feedback")["html"]("Thank you very much.")["fadeTo"](1000, 1, function () { $(this)["fadeOut"](1000); }); }, dataType: "json" }); }); function onLoad() { var options = { sourceLanguage: "en", destinationLanguage: ["pa"], shortcutKey: "ctrl+g", transliterationEnabled: true };
		// var control = new google["elements"]["transliteration"].TransliterationControl(options);
		// var ids = ["outText2"]; control["makeTransliteratable"](ids);
		// control["showControl"]("translControl");
	};
	onLoad();
});
