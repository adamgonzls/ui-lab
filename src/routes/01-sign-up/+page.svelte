<script>
  import name from "../+page.svelte"
  import "$lib/assets/fonts/stylesheet.css"
</script>

<main>
  <div class="page">
		<div class="signup-container">
			<div class="social-login-container">
				<div class="social-options">
					<div><button id="googleSignUp">
						<span class="left-span"><i class="fa fa-google-plus" aria-hidden="true"></i></span>
						<span class="center-span">Sign up using Google+</span></button></div>
					<div><button id="twitterSignUp">
						<span class="left-span"><i class="fa fa-twitter" aria-hidden="true"></i></span>
						<span class="center-span">Sign up using Twitter</span></button></div>
					<div><button id="facebookSignUp">
						<span class="left-span"><i class="fa fa-facebook" aria-hidden="true"></i></span>
						<span class="center-span">Sign up using Facebook</span></button></div>
				</div>
			</div>
			<div class="signup-form-container">
				<span>Or</span>
				<h1>Superdry.</h1>
				<form id="signup-form" action="">
					<label for="userEmail">E-mail<span>*</span><input type="email" id="userEmail"></label>
					<label for="userFirstName">First Name<span>*</span><input type="text" id="userFirstName"></label>
					<label for="userLastName">Last Name<span>*</span><input type="text" id="userLastName"></label>
					<label for="userCity">City<span>*</span><input type="text" id="userCity"></label>
					<div class="newsletter-checkbox">
						<span class="checkbox-color"><input type="checkbox" id="userNewsletterOptIn"></span>
						<label for="userNewsletterOptIn">I would like to receive the newsletter</label>
					</div>
					<button id="signup-form-submit-button" type="submit">Register</button>
				</form>
			</div>
		</div>
	</div>
</main>

<style>
  /****************************************
  Inherited Syles
*****************************************/
*, *::before, *::after {
  box-sizing: inherit;
  color: inherit;
  font: inherit; }

/****************************************
  Defaults
*****************************************/
/****************************************
  Helpers
*****************************************/
/****************************************
  Layout
*****************************************/
:root {
  --body-font: 'Open Sans', sans-serif;
  --header-font: 'Playfair Display'; 
}

h1 {
  font-family: var(--body-font);
  font-weight: 500;
  font-size: 2rem;
}

.page {
  position: relative;
  background-color: #F6F2E1;
  height: 100vh; 
  font-family: var(--body-font);
}

.signup-container {
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
  max-width: 700px;
  width: 70%;
}

@media screen and (max-width: 825px) {
  .signup-container {
    padding: 5px;
    width: 100%; 
  } 
}
  
.signup-container > div {
  -ms-flex: 1;
  flex: 1;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  max-height: 100%;
}

.social-login-container {
  position: relative;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #fff;
  background-image: url($lib/assets/images/woman-500w.jpg);
  background-size: cover;
  background-position: center center;
}

.social-login-container .social-options {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 90%;
}

.social-login-container .social-options div {
  text-align: center; 
}

.social-login-container .social-options div .fa {
  font-size: 1.7em; 
}

.social-login-container .social-options button {
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 10px 50px 10px 15px;
  font-size: .55em;
  text-transform: uppercase;
  width: 90%;
  color: white;
  border-radius: 10px;
  border: none; 
}

@media screen and (max-width: 589px) {
  .social-login-container .social-options button {
    padding-right: 10px; 
  } 
}

.social-login-container .social-options button .left-span {
  display: inline-block;
  width: 20%;
  text-align: left; 
}

@media screen and (max-width: 312px) {
  .social-login-container .social-options button .left-span {
    display: none; 
  }
}

.social-login-container .social-options button .center-span {
  display: inline-block;
  width: 70%; 
}

.social-login-container .social-options button#googleSignUp {
  background-color: #db4437; 
}

.social-login-container .social-options button#twitterSignUp {
  background-color: #1da1f2; 
}

.social-login-container .social-options button#facebookSignUp {
  background-color: #3b5998; 
}

.signup-form-container {
  position: relative;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #253039;
  padding: 40px;
  color: #fff;
}

@media screen and (max-width: 589px) {
  .signup-form-container {
    padding-left: 20px;
    padding-right: 20px
  } 
}

@media screen and (max-width: 301px) {
  .signup-form-container {
    padding-left: 15px;
    padding-right: 15px; 
  } 
}

.signup-form-container > span {
  position: absolute;
  top: 50%;
  left: 0;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  padding: 10px;
  font-size: .55em;
  text-transform: uppercase;
  background-color: #253039; 
}

@media screen and (max-width: 301px) {
  .signup-form-container > span {
    padding: 5px; 
  } 
}

.signup-form-container h1 {
  margin: 0 auto;
  margin-bottom: 50px;
  text-align: center;
}

.signup-form-container #signup-form {
  margin: 0 auto;
  margin-bottom: 30px;
}

.signup-form-container #signup-form label {
  text-transform: uppercase;
  font-size: .55em;
}

.signup-form-container #signup-form label span {
  color: #F55300; 
}

.signup-form-container #signup-form label input:not(#userNewsletterOptIn) {
  display: block;
  width: 100%;
  max-width: 250px;
  border: 0;
  background-color: transparent;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #35404B;
  font-size: 1.5em;
}

.signup-form-container #signup-form .newsletter-checkbox input[type=checkbox] {
  margin-right: 10px;
}

.signup-form-container #signup-form #signup-form-submit-button {
  display: block;
  margin-top: 15px;
  border: none;
  border-radius: 7px;
  padding: 10px 0;
  background-color: #F55300;
  font-size: .55em;
  text-transform: uppercase;
  width: 100%;
  color: #fff; 
}

/****************************************
  Components
*****************************************/
</style>