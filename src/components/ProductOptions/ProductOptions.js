import PropTypes from 'prop-types';
import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductOptions = props => {

    const sizeHandle = e => {
        e.preventDefault();
        props.setCurrentSize(e.target.innerHTML);
      }
      
      const colorHandle = e => {
        e.preventDefault();
        props.setCurrentColor(e.target.value);
      }
    
      const addToCart = e => {
        e.preventDefault();
        console.log('Summary');
        console.log('-------');
        console.log(`Name: ${props.title}`);
        console.log(`Price: ${props.getPrice}`);
        console.log(`Size: ${props.currentSize}`);
        console.log(`Color: ${props.currentColor}`);
      }

    return (
        <form>
          <OptionSize sizes={props.sizes} currentSize={props.currentSize} action={sizeHandle}/>
          <OptionColor colors={props.colors} currentColor={props.currentColor} action={colorHandle} />
          <Button className={styles.button} action={addToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

ProductOptions.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    getPrice: PropTypes.number.isRequired
}

export default ProductOptions;