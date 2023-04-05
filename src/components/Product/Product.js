import { useState } from 'react';
import styles from './Product.module.scss';
// import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const Product = ({id, name, title, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const sizeHandle = e => {
    e.preventDefault();
    setCurrentSize(e.target.innerHTML);
  }
  
  const colorHandle = e => {
    e.preventDefault();
    setCurrentColor(e.target.value);
  }

  const getPrice = () => {
    let item = sizes.find( elem => elem.name === currentSize);
    return basePrice + item.additionalPrice;
  }

  const addToCart = e => {
    e.preventDefault();
    const product = {
      name: {title},
      price: getPrice(),
      size: currentSize,
      color: currentColor
    }
    console.log(product);
    return product;
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} color={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <OptionSize sizes={sizes} currentSize={currentSize} action={sizeHandle}/>
          <OptionColor colors={colors} currentColor={currentColor} action={colorHandle} />
          <Button className={styles.button} action={addToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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