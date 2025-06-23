import React, { createContext, useContext } from 'react'

// 객체 생성
const ProductContext = createContext();

function ProductProvider({children}) {
  const product = {
    image: 'https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/c4d41015-d188-4c68-b3e9-36968bf2110a.jpeg',
    brand: '사미헌',
    productName: '갈비탕',
    description: '진짜 갈비로만 우려낸 전통 갈비탕',
    discountRate: 15,
    price: 13000,
    ship: '샛별배송',
    seller: '컬리',
    packageType: '냉동(종이포장)',
    unit: '1팩',
    weight: '1KG',
    allergy: '소고기,대두,밀,우유 함유',
    announce: '뼈조각이 있을 수 있으니 섭취 시 주의 부탁드립니다.',
  }

  const value={
    product
  }
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

function useProductContext() {
  return useContext(ProductContext);
}

export { ProductProvider, useProductContext }