
(function(){
  var user1 = 'Cheng Zan';
  var password1 = '1111';
  var user2 = 'Weiwen Hong';
  var password2 = '2222';
  var user11 = 'Kuo Liang';
  var password22 = '4444';
  function init() {
    // Register event listeners
$('login-btn').addEventListener('click', login);
		hideElement($('secret-msg'));

    }
    function login() {
		var username = $('username').value;
		var password = $('password').value;
		//password = md5(username + md5(password));
    if((username == user1  && password == password1) || ((username == user2 && password == password2)) || (username == user11 && password == password22)){
      console.log("hello firstChild");
hideElement($('login-form'));
showElement($('secret-msg'));

    }

	}


  function $(tag, options) {
        if (!options) {
            return document.getElementById(tag);
        }

        var element = document.createElement(tag);

        for (var option in options) {
            if (options.hasOwnProperty(option)) {
                element[option] = options[option];
            }
        }

        return element;
    }

    function hideElement(element) {
        element.style.display = 'none';
    }

    function showElement(element, style) {
        var displayStyle = style ? style : 'block';
        element.style.display = displayStyle;
    }
    init();
})();
