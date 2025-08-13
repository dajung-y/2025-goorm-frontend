// get(주문조회),post,patch(주문상태변경) 요청 처리
// 배송완료, 배송중, 배송 준비

const mockOrders = [
  {
    id: 101,
    user: "홍길동",
    product: "티셔츠",
    quantity: 2,
    status: "배송 준비",
  },
  {
    id: 102,
    user: "김영희",
    product: "청바지",
    quantity: 1,
    status: "배송 중",
  },
];

export default function handler(req, res){

  // 조회
  if(req.method === "GET"){
    return res.status(200).json(mockOrders);
  }
  if(req.method === "PATCH"){
    const {id, status} = req.body;
    console.log(`id: ${id}, status: ${status}`);
    const order = mockOrders.find((or) => or.id === id);
    if(!order){
      return res.status(404).json({
        message: '찾을 수 없음'
      })
    }
    order.status = status;
    return res.status(200).json({
      message: "상태 변경 완료",
      order
    })
  }
  return res.status(405).end();

}