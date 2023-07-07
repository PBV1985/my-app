import '../css/login.css'
export const Login = () => {
  return (
    <div className="Login">
      <header className="Login-header">
      <div class="box">
        <span className="borderLine"></span>
        <form>
            <h2>Login</h2>
            <div className="inputBox">
                <input type="text" required="required"/>
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
                <i></i>
            </div>
            <div className="links">
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