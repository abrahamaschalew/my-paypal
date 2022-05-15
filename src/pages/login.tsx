

export default function Login() {
    return (<>
    
   
    <div className="login-section">
      <div className="img-container">
        <img src="images/paypal.svg" alt="" />
      </div>
      <form>
        <div>
          <label>E-mail</label>
          <input type="email" name="email" />
         <p className="error-text">Please Enter Your E-mail Address</p>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="email" />
         <p className="error-text">Please Enter Your Password</p>
        </div>
        <p className="success-response"></p>

        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="btn-text"><b>Login With Google</b></p>
        </div>

        <button type="submit" className="login-btn">
          Login
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </button>
      </form>
      </div>
    </>)
}