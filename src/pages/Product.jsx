import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'

const Product = () => {

  const { slug } = useParams()

  const product = productData.getProductBySlug(slug)

  const relatedProduct = productData.getProducts(8)

  useEffect(() => {
    window.scrollTo(0,0)
  },[product])
  
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product}/>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          Khám phá thêm
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            smCol={1}
            mdCol={2}
            gap={20}
          >
            {
              relatedProduct.map((item, index) => (
                <ProductCard 
                  key={index}
                  name={item.title}
                  image01={item.image01}
                  image02={item.image02}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Product