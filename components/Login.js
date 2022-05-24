

export function Login(){
  
    return(
      <>
      <form>
        <div>
          <input type="text" placeholder="UserID" name="userid" required/><br/>
          <input type="password" placeholder="Password" name="password" required/><br/>
          <button type="submit">Login</button>
        </div>
        <div>
        <a href='/'>회원가입</a> |  <a href="/">비밀번호 찾기</a>
        </div>
      </form><br/><br/>

      </>
    )
}