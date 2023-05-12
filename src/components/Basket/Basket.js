import Nav from '../Home/Header/Nav/Nav';
import Footer from '../Home/Footer/Footer';
import pain from '../../assets/pain.jpg';

import './styles.scss';

function Basket() {
    return (
        <>
        <Nav />
        <div className='basket'>
            <h1 className='basket-title'>Votre panier</h1>
            <div className='basket-element'>
                <div className='basket-box'>
                    <div className='basket-box-img'>
                        <img className='basket-box-img-element' src={pain} alt='pain' height='100' width='100' />
                    </div>
                    <div className='basket-box-text'>
                        <h2 className='basket-box-text-title'>Pain de campagne</h2>
                        <p className='basket-box-text-description'>Pain de campagne au levain naturel</p>
                    </div>
                    <div className='basket-box-price'>
                        <h2 className='basket-box-price-text'>Prix</h2>
                        <p className='basket-box-price-number'>2,50€</p>
                    </div>
                    <div className='basket-box-quantity'>
                        <h2 className='basket-box-quantity-text'>Quantité</h2>
                        <p className='basket-box-quantity-number'>1</p>
                    </div>
                </div>
                <div className='basket-box'>
                    <div className='basket-box-img'>
                        <img className='basket-box-img-element' src={pain} alt='pain' height='100' width='100' />
                    </div>
                    <div className='basket-box-text'>
                        <h2 className='basket-box-text-title'>Pain de campagne</h2>
                        <p className='basket-box-text-description'>Pain de campagne au levain naturel</p>
                    </div>
                    <div className='basket-box-price'>
                        <h2 className='basket-box-price-text'>Prix</h2>
                        <p className='basket-box-price-number'>2,50€</p>
                    </div>
                    <div className='basket-box-quantity'>
                        <h2 className='basket-box-quantity-text'>Quantité</h2>
                        <p className='basket-box-quantity-number'>1</p>
                    </div>
                </div>
                <div className='basket-box'>
                    <div className='basket-box-img'>
                        <img className='basket-box-img-element' src={pain} alt='pain' height='100' width='100' />
                    </div>
                    <div className='basket-box-text'>
                        <h2 className='basket-box-text-title'>Pain de campagne</h2>
                        <p className='basket-box-text-description'>Pain de campagne au levain naturel</p>
                    </div>
                    <div className='basket-box-price'>
                        <h2 className='basket-box-price-text'>Prix</h2>
                        <p className='basket-box-price-number'>2,50€</p>
                    </div>
                    <div className='basket-box-quantity'>
                        <h2 className='basket-box-quantity-text'>Quantité</h2>
                        <p className='basket-box-quantity-number'>1</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='checkout'>
            <div className='checkout-element'>
                <div className='checkout-text'>
                    <h1>Finaliser la Commande</h1>
                    <div className='checkout-text-price'>
                        <h2>Total:</h2>
                        <p>7,50€</p>
                    </div>
                </div>
                <div className='checkout-payement-btn'>
                    <button className='checkout-payement-btn-element'>Payer</button>
                </div>
            </div>
        </div>
        </>
    );
  }
  
  export default Basket;