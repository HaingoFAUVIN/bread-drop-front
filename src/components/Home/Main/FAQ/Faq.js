import './styles.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function Faq() {
  return (
    <div className='faq'>
        <h1>FAQ</h1>
        <div className='faq-element'>
            <div className='faq-box'>
                <div className='faq-text'>
                    <h1>Question - Qui livre les produits ?</h1>
                </div>
                <div className='faq-btn'>
                    <button className='faq-btn-text'><ArrowDownwardIcon /></button>
                </div>
            </div>
            <div className='faq-box'>
                <div className='faq-text'>
                    <h1>Question - Comment ça marche ?</h1>
                </div>
                <div className='faq-btn'>
                    <button className='faq-btn-text'><ArrowDownwardIcon /></button>
                </div>
            </div>
            <div className='faq-box'>
                <div className='faq-text'>
                    <h1>Question - Qui a conçu ça ?</h1>
                </div>
                <div className='faq-btn'>
                    <button className='faq-btn-text'><ArrowDownwardIcon /></button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Faq;