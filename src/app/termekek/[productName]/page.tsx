export const dynamic = 'force-dynamic'

import React from 'react'
import Image from 'next/image'
import ColorfulLabel from '@/components/ColorfulLabel'
import { db } from '@/db'
import { productsTable } from '@/db/schema'
import { noImage } from '@/constants'
import { sql } from 'drizzle-orm'
import PageContainer from '@/components/PageContainer'

const ProductPage = async ({ params }: { params: { productName: string } }) => {

  const [product] = await db.select().from(productsTable).where(sql`${productsTable.title} = ${decodeURIComponent(params.productName)}`).limit(1);

  if (!product) {
    return <PageContainer>
      <div className='w-max h-max absolute flex items-center justify-center text-2xl font-bold'>Product not found
        <br></br>
        {decodeURIComponent(params.productName)}
      </div>
    </PageContainer>;
  }

  return (
    <PageContainer>
      <div className="flex flex-col lg:flex-row items-center justify-center shadow-xl rounded-xl p-5">

        <Image src={product.image || noImage} alt="Product Image" width={400} height={400} className="lg:w-1/3 lg:h-auto" />
        <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">
          <h1 className="text-xl font-bold">{product.title.toUpperCase().slice(0, 50)}</h1>
          <ColorfulLabel>
            <span>{product.date}</span>
            <span className="ml-3 text-gray-custom">Mark De Leon</span>
          </ColorfulLabel>
          <p className="text-gray-custom lg:max-w-[20vw] text-justify break-all">
            {product.description.slice(0, 250)}
          </p>
        </div>
      </div>
    </PageContainer>
  )
}
export default ProductPage