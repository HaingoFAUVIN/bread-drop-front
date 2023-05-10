import './styles.scss';
import BackeryImg from '../../../../assets/boulangerie.png'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function BakeriesList() {
  return (
    <div className='bakerie'>
         <div className='search-container'>
            <input className='bakerie-search' type='text' placeholder='Recherche' />
        </div>
        <h1 className='bakerie-section-title'>Boulangeries</h1>
        <div className='bakerie-element'>
            <div className='bakerie-box'>
                <div className='bakerie-img-container'>
                    <img className='bakerie-img' src={BackeryImg} alt="Boulangerie" />
                </div>
                <div className='bakerie-content'>
                    <h1 className='bakerie-title'>Boulangerie 1</h1>
                    <p className='bakerie-date'>7h - 15h</p>
                    <p className='bakerie-description'>Une boulangerie moyenne, mais peu chère</p>
                </div>
            </div>
            <div className='bakerie-box'>
                <div className='bakerie-img-container'>
                    <img className='bakerie-img' src={BackeryImg} alt="Boulangerie" />
                </div>
                <div className='bakerie-content'>
                    <h1 className='bakerie-title'>Boulangerie 1</h1>
                    <p className='bakerie-date'>7h - 15h</p>
                    <p className='bakerie-description'>Une boulangerie moyenne, mais peu chère</p>
                </div>
            </div>
            <div className='bakerie-box'>
                <div className='bakerie-img-container'>
                    <img className='bakerie-img' src={BackeryImg} alt="Boulangerie" />
                </div>
                <div className='bakerie-content'>
                    <h1 className='bakerie-title'>Boulangerie 1</h1>
                    <p className='bakerie-date'>7h - 15h</p>
                    <p className='bakerie-description'>Une boulangerie moyenne, mais peu chère</p>
                </div>
            </div>
        </div>
        <div className='bakerie-all-btn'>
            <button className='bakerie-btn'><ArrowDownwardIcon /></button>
        </div>
    </div>
    );
}

export default BakeriesList;