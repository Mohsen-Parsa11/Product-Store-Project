import React from 'react'
import Container from './Container'
import Product from './Product'
import { ProductData } from '@/data/ProductData'
import Link from 'next/link'

function ProductsCard() {
  return (
    <div className='my-10' id='categories'>
        <Container>
              <h4 className=' capitalize text-2xl text-slate-600 mb-4 font-semibold'>new products</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              {
                ProductData.map(item=>(
                  <Link href="/store" key={item.id}>
                    <Product {...item}/>
                  </Link>
                ))
              }
            </div>
        </Container>
    </div>
  )
}

export default ProductsCard