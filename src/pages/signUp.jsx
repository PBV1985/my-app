export const SignUp = () => {
    return ( 
        <div className="box">
        <span class="borderLine"></span>
        <form>
            <h2>Sign up</h2>
            <div className="inputBox">
                <input type="text" required="required"/>
                <span>Name</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="text" required="required"/>
                <span>Email</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="text" required="required"/>
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" required="required"/>
                <span>Pasword</span>
                <i></i>
            </div>
            <div className="links">
                <a href="#">Login</a>
            </div>
            <input type="submit" value="Sign up"/>
        </form>
    </div>   
    );
}