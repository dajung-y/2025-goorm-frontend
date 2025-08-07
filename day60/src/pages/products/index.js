import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

export default function ProductsPage(){
  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
  },[]);
  
  const fetchProducts = async () => {
    try{
      setLoading(true);
      setError(null);
      // 에러 테스트
      // throw new Error('네트워크 연결 실패');
      
      const response = await fetch('/api/products');
      const result = await response.json();

      if(result.success){
        setProducts(result.data);
      } else{
        setError(result.message);
      }
    } catch(error){
      setError('상품 정보를 불러오는데 실패했습니다');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if(loading){
    return(
      <div>
        <h2>상품 정보 불러오는 중...</h2>
      </div>
    )
  }

  if(error){
    return(
      <div>
        <h2>에러 발생</h2>
      </div>
    )
  }

  return(
    <div>
      {/* 상품 목록 보여주기 */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard 
            key={product._id}
            id={product._id}
            imgUrl={product.imgUrl}
            title={product.title}
            price={product.price}/>
        ))}
      </div>
    </div>
  )
}