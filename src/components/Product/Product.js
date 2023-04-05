import { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Product = ({id, name, title, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const sizeHandle = e => {
    e.preventDefault();
    setCurrentSize(e.target.innerHTML);
  }
  
  const colorHandle = e => {
    e.preventDefault();
    setCurrentColor(e.target.value);
  }

  const getPrice = () => {
    let item = sizes.find( elem => elem.name == currentSize);
    return basePrice + item.additionalPrice;
  }

  const addToCart = e => {
    e.preventDefault();
    const product = {
      Name: {title},
      Price: getPrice(),
      Size: currentSize,
      Color: currentColor
    }
    console.log(product);
    return product;
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => <li key={size.name}><button type="button" price={size.additionalPrice} onClick={sizeHandle} className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li> )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => <li key={color}><button type="button" value={color} onClick={colorHandle} className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>)}
            </ul>
          </div>
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