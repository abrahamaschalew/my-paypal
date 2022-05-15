
const HomePage = () => {
    return (<>
      
      <div className="hero">
      <div>
        <h1>Share the joy of shopping with PayPal, and earn up to $100</h1>
        <p>You could earn $10 each time you refer a friend who joins PayPal.</p>
        <button className="invite">Invite Your Friends</button>
        <p className="offer">
          Terms apply. See paypal.com/us/invitepal. Offer may be canceled or
          modified at any time.
        </p>
      </div>
      <img src="images/HP_Banner_Evergreen.png" alt="" />
    </div>

    
    <div className="advantages-section">
      <img src="images/BNPL-img.jpg" alt="" />
      <div className="right-angel-text">
        <h1>Buy now, pay later with Pay in 4</h1>
        <p>
          YWant something now but the sale ends before payday? Choose Pay in 4
          at checkout with millions of online stores and split the cost into 4
          interest-free payments.
        </p>
        <a href="#">Learn how to pay with 4 </a>
      </div>
    </div>

    
    <div className="advantages-section">
      <img src="images/crypto-img.jpg" alt="" className="show-on-mobile-view" />
      <div className="left-angel-text">
        <h1>Check out with crypto</h1>
        <p>
          Checking out with crypto is a taxable transaction. Fees and exchange
          rates will apply. Buying and selling cryptocurrency is subject to a
          number of risks and PayPal does not make any recommendations. Consult
          your tax advisor. Merchants are paid in fiat currency.
        </p>
        <a href="#">Sign up </a>
      </div>
      <img src="images/crypto-img.jpg" alt="" className="hide-on-mobile-view" />
    </div>

    
    <div className="advantages-section">
      <img src="images/touchfree-img.jpg" alt="" />
      <div className="right-angel-text">
        <h1>Touch-free payments</h1>
        <p>
          Leave the cash and cards at home. When it comes to paying with the
          app, the only thing you’ll need to reach for is your phone.
        </p>
        <a href="#">Learn more about PayPal QR Codes </a>
      </div>
    </div>

    
    <div className="advantages-section">
      <img src="images/sendmoney-img.jpg" alt="" className="show-on-mobile-view" />
      <div className="left-angel-text">
        <h1>Express yourself when you send money</h1>
        <p>
          Explore creative ways to split the bill or send money with a friendly
          message, colorful theme, GIFs, and more.
        </p>
        <a href="#">Send money now </a>
      </div>
      <img src="images/sendmoney-img.jpg" alt="" className="hide-on-mobile-view" />
    </div>

    
    <div className="advantages-section">
      <img src="images/give-img.jpg" alt="" />
      <div className="right-angel-text">
        <h1>Give with PayPal</h1>
        <p>
          Make a difference by supporting causes and crowdfunding campaigns
          close to home and heart.
        </p>
        <a href="#">Give through the app </a>
      </div>
    </div>
    </>)
}


export default HomePage;