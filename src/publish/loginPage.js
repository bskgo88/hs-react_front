const call = '전화번호 또는 이메일';

function LoginPage() {
  return (
    <div className="mainBox">
      <div className="LoginBox">
        <input type="text"
          className="App-link"
          value={call}
        />
      </div>
    </div>
  );
}

export default LoginPage;
