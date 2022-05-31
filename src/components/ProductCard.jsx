import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { set } from '../redux/product-modal/productModalSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = props => {

    const dispatch = useDispatch()

  return (
    <div className='product-card'>
        <Link to={`/catalog/${props.slug}`}>
            <div className="product-card__image">
                <img src={props.image01} alt="Hình 1" />
                <img src={props.image02} alt="Hình 2" />
            </div>
            <h3 className="product-card__name">{props.name}</h3>
            <div className="product-card__price">
                {numberWithCommas(props.price)}
                <span className="product-card__price__old">
                    <del>{numberWithCommas(399000)}</del>
                </span>
            </div>
        </Link>
        <div className="product-card__btn">
            <Button
                size='sm'
                icon='bx bx-cart'
                animate={true}
                onClick={() => dispatch(set(props.slug))}
            >
                chọn mua
            </Button>
        </div>
    </div>
  )
}

ProductCard.propTypes = {
    image01: PropTypes.string.isRequired,
    image02: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    slug: PropTypes.string,
}

export default ProductCard