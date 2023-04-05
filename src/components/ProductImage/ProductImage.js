import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './ProductImage.module.scss';

const ProductImage = (props) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />
    </div>
  )
}

ProductImage.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default ProductImage;

