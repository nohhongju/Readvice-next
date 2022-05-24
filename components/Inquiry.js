
export function Inquiry(){
  
    return(
      <>
      <form>
      <div>
      <button>1:1 문의하기</button><button>문의내역</button><br/>
      <select name='ToInquiry' id="ToInquiry" >
      <option value="문의유형 선택">문의유형 선택</option>
      <option value="없는 책 문의">없는 책 문의</option>
      <option value="구매 문의">구매 문의</option>
      <option value="개인정보 문의">개인정보 문의</option>
      </select><br/>
      <input type="text" placeholder="제목" name="title" id="title" required/><br/>
      <input type="text" placeholder="내용" name="content" id="content" required/><br/>
      <input type="text" placeholder="이메일" name="email" id="email" required/><br/>
      <button>등록하기</button>
      </div>
      </form><br/><br/>
      </>
    )
}