
export function InquiryList(){
  
    return(
      <>
      <form>
      <div>
          <button>1:1 문의하기</button>
          <button>문의 내역</button><br/>
          <h4>1:1 문의 내역</h4>
          <h5>상담시간평일(월 ~ 금) 10:00 ~ 17:00
          (Off-time 12:00 ~ 14:00, 토/일/공휴일 휴무)
          한번 등록한 상담내용은 수정이 불가능합니다.
          향후 멤버쉽 단계별 혜택 및 선정기준은 사전공지 후 변경될 수 있습니다.</h5>
            <table border = "1">
                <tr>
                <th><h4>상담구분</h4></th>
                <th><h4>상담제목</h4></th>
                <th><h4>작성일</h4></th>
                <th><h4>답변유무</h4></th>
                <th></th>
                </tr>
                <tr>
                <th>도서관련 문의</th>
                <th>도서제목</th>
                <th>2022-05-23</th>
                <th>YES</th>
                <th><button>삭제</button></th>
                </tr>
            </table>
      </div>
  </form>
      </>
    )
}