
export const Login = () => {
  return (
    <div className="Login">
      <header className="Login-header">
      <div class="box">
        <span class="borderLine"></span>
        <form>
            <h2>Sign in</h2>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Username</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
                <i></i>
            </div>
            <div class="links">
                <a href="#">Forgot Password</a>
                <a href="#">Signup</a>
            </div>
            <input type="submit" value="Login"/>
        </form>
    </div>
      </header>
    </div>
  );
}