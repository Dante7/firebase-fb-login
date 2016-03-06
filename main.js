$(document).ready(function() {
  // Obtener la referencia de Firebase
  var ref = new Firebase("https://face-login.firebaseio.com");

  // Login con Facebook cuando el botón login es presionado
  $("#loginButton").click(function() {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.error("Error autenticando con FB:", error);
      }else {
    // the access token will allow us to make Open Graph API calls
        console.log(authData.facebook.accessToken);
      }
    }, {
      scope: "email,user_likes" // the permissions requested
    });
  });

  // // Logout cuando se presiona el botón logout
  // $("#logoutButton").click(function() {
  //   ref.unauth();
  // });
});