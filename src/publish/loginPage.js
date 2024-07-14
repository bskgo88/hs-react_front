const call = '전화번호 또는 이메일';
const pass = '암호를 입력해 주세요';

function LoginPage() {
  return (
    <div className="mainBox">
      <div className="LoginBox">
        <div className="LoginInputBox">
          <label className="LgTitle">ID</label>
          <input type="text"
            className="inputItem"
            placeholder={call}
          />
        </div>
        <div className="LoginInputBox">
          <label className="LgTitle">Password</label>
          <input type="text"
            className="inputItem"
            placeholder={pass}
          />
        </div>
        <div className="LoginInputBox">
          <label className="LgTitle">역할</label>
          <div className="radioType">
            <div className="radioCont">
              <input type="radio"
                className="radioItem"
                name="set1"
                id="radio1"
                radioGroup="set1"
                checked
              />
              <label className="RdTitle" for="radio1">운영</label>
            </div>
            <div className="radioCont">
              <input type="radio"
                className="radioItem"
                name="set1"
                id="radio2"
                radioGroup="set1"
              />
              <label className="RdTitle" for="radio2">상담</label>
            </div>
          </div>
        </div>
        <div className="btnBox">
          <button className="btnType1">Login</button>
        </div>
        <div className="ankerBox">
          <a className="ankerItem" href="#none">Reset Password</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;