import { Checkbox } from 'antd';

export function Join(){
  
    return(
      <>
      <form>
      <div>
      <label for="uname"><b>이메일</b></label><br/>
      <input type="text" placeholder="Email입력" name="userid" required/>@
      <select name='emailAddress'>
      <option value="">이메일주소 선택</option>
      <option value="@gmail.com">gmail.com</option>
      <option value="@naver.com">naver.com</option>
      <option value="@daum.com">daum.com</option>
      </select><br/>
      <label for="uname"><b>비밀번호</b></label><br/>
      <input type="password" placeholder="비밀번호 입력" name="password" required/>
      <label for="uname"><h5>영문포함, 숫자포함 8-20자 이내</h5></label>
      <label for="uname"><b>비밀번호 확인</b></label><br/>
      <input type="passwordCheck" placeholder="비밀번호 확인" name="passwordCheck" required/><br/>
      <label for="uname"><b>닉네임</b></label><br/>
      <input type="nickname" placeholder="닉네임" name="nickname" required/><br/>
      <Checkbox>JustWatch 계정을 만들려면 이용 약관에 동의하고 개인정보 보호정책을 읽었음을 확인해야 합니다.<br/>
      JustWatch의 개인정보 보호정책을 읽고 이해했습니다 그리고 본인은 JustWatch의 이용 약관에 동의합니다.<br/>
      관심사에 따라 이메일 알림(예: 내 시청 목록에 있는 영화/프로그램의 스트리밍이 가능해짐)을 받고 싶습니다.<br/>
      이메일에 있는 링크를 클릭하면 언제든지 수신 거부할 수 있습니다.</Checkbox><br/>
      <button>취소</button><button>확인</button>
      </div>
      </form><br/><br/>

      </>
    )
}