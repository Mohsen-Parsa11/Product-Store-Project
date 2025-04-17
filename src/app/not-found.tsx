import Image from 'next/image'
import React from 'react'
import notFoundPage from "../assets/notFoundPage.jpg"
import Container from '@/components/Container'

function notFound() {
  return (
    <Container>
        <div>
            <Image src={notFoundPage} alt="not found" width={100} height={100} className="mx-auto w-[150px] md:w-[250px] lg:w-[400px] mt-2 object-contain" />
        </div>
    </Container>
  )
}

export default notFound