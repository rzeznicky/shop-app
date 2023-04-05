import { useState } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = ({id, name, title, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    let item = sizes.find( elem => elem.name === currentSize);
    return basePrice + item.additionalPrice;
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} color={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions id={id} name={name} title={title} basePrice={basePrice} colors={colors} sizes={sizes} 
          currentColor={currentColor} setCurrentColor={setCurrentColor}
          currentSize={currentSize} setCurrentSize={setCurrentSize} getPrice={getPrice()} />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;