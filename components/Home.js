import * as React from 'react';
import { Link, Router } from 'react-router-dom';

export function Home(){
  
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
      </form><br/><br/><br/><br/>

      <form>
      <div>
      <button type="submit">Google 계정으로 가입</button><br/>
      또는<br/>
      <button type="submit">ID/PW 회원가입</button><br/>
      <button type="submit">로그인</button><br/>
      </div>
      </form><br/><br/><br/><br/>

      <form>
      <div>
      <label for="uname"><b>이메일</b></label><br/>
      <input type="text" placeholder="아이디(email)입력" name="userid" required/>@
      <select name='emailaddress'>
      <option value="">이메일주소 선택</option>
      <option value="@gmail.com">gmail.com</option>
      <option value="@naver.com">naver.com</option>
      <option value="@daum.com">daum.com</option>
      </select>
      <br/>
      <label for="uname"><b>비밀번호</b></label><br/>
      <input type="password" placeholder="비밀번호 입력" name="password" required/>
      <label for="uname"><h5>영문포함, 숫자포함 8-20자 이내</h5></label>
      <label for="uname"><b>비밀번호</b></label><br/>
      <input type="password" placeholder="비밀번호 입력" name="password" required/>
      <h1>5</h1>
      <h2>4</h2>
      <h3>3</h3>
      <h4>2</h4>
      <h5>1</h5>
      </div>
      </form>
      </>
    )
}