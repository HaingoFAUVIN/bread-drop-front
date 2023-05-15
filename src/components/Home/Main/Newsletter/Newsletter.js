import './styles.scss';
import NewsletterImg from '../../../../assets/newsletterImg.jpg'

function Newsletter() {
  return (
    <div className='newsletter'>
        <div className='newsletter-element'>
            <div className='newsletter-img-container'>
                <img className='newsletter-img' src={NewsletterImg} alt="Boulangerie" />
            </div>
            <div className='newsletter-content'>
                <h1 className='newsletter-title'>Explication du concept du site web, à quoi il sert... Tout ça tout ça</h1>
                <p className='newsletter-description'>Inscrivez-vous à notre newsletter pour recevoir les dernières informations sur les boulangeries</p>
                <div className='newsletter-input-container'>
                    <input className='newsletter-input' type='text' placeholder='Email' />
                    <button className='newsletter-btn'>S'inscrire</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Newsletter;