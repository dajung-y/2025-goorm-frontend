import itemData from '@/data/item.json'
import { NextResponse } from 'next/server'

// page router와 다르게 메서드별로 함수 분리해서 작성
// NextResponse : Next.js에서 제공하는 응답 객체

export async function GET(){
  try{
    return NextResponse.json({
      success: true,
      data: itemData
    })
  }catch(error){
    console.error("API Error : ",error);
    return NextResponse.json({
      success: false,
      error: 'failed to fetch itemData'
    },
    {status:500}
  )
  }
}