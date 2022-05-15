import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="container" style={{ width: " 90%", margin: "6rem auto" }}>
        <div className="flex">
          <form className="send-money-form">
            <p className="total-balance">Welcome someone!</p>

            <p style={{ marginTop: "2rem" }} className="total-balance">
              Send Money
            </p>
            <div>
              <label>To</label>
              <input type="text" name="email" />
              <p className="error-text">Please Enter Your E-mail Address</p>
            </div>
            <div>
              <label>Amount</label>
              <input type="password" name="email" />
              <p className="error-text">Please Enter Your Password</p>
            </div>
            <p className="success-response"></p>

            <button type="submit" className="login-btn">
              Send
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          </form>

          <table>
            <caption>Payment History</caption>
            <thead>
              <tr>
                <th scope="col">To / From</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Account">Visa - 3412</td>
                <td data-label="Due Date">04/01/2016</td>
                <td data-label="Amount">$1,190</td>
                <td data-label="Amount" className="send">
                  Send
                </td>
              </tr>
              <tr>
                <td scope="row" data-label="Account">
                  Visa - 6076
                </td>
                <td data-label="Due Date">03/01/2016</td>
                <td data-label="Amount">$2,443</td>
                <td data-label="Amount" className="recived">
                  Recived
                </td>
              </tr>
              <tr>
                <td scope="row" data-label="Account">
                  Corporate AMEX
                </td>
                <td data-label="Due Date">03/01/2016</td>
                <td data-label="Amount">$1,181</td>
                <td data-label="Amount" className="send">
                  Send
                </td>
              </tr>
              <tr>
                <td scope="row" data-label="Acount">
                  Visa - 3412
                </td>
                <td data-label="Due Date">02/01/2016</td>
                <td data-label="Amount">$842</td>
                <td data-label="Amount" className="recived">
                  Recived
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
