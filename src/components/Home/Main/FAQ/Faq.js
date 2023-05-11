import { useState } from 'react';
import './styles.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function Faq() {
  const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

  const questions = [
    {
      question: 'Question - Qui livre les produits ?',
      answer:
        'Ce sont les professionnels, mais bientôt on met en place une plateforme avec des livreurs, promis ! Il va falloir attendre qu’on le développe...',
    },
    {
      question: 'Question - Comment ça marche ?',
      answer:
        'Ce sont les professionnels, mais bientôt on met en place une plateforme avec des livreurs, promis ! Il va falloir attendre qu’on le développe...',
    },
    {
      question: 'Question - Qui a conçu ça ?',
      answer:
        'Ce sont les professionnels, mais bientôt on met en place une plateforme avec des livreurs, promis ! Il va falloir attendre qu’on le développe...',
    },
  ];

  const handleOpenAnswer = (index) => {
    if (openedQuestionIndex === index) {
      setOpenedQuestionIndex(null);
    } else {
      setOpenedQuestionIndex(index);
    }
  };

  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div className="faq-element">
        {questions.map((item, index) => (
          <div key={index}>
            <div className="faq-box" onClick={() => handleOpenAnswer(index)}>
              <div className="faq-text">
                <h1>{item.question}</h1>
              </div>
              <div className="faq-btn">
              <button className="faq-btn-text">
                  {openedQuestionIndex === index ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  )}
                </button>
              </div>
            </div>
            {openedQuestionIndex === index && (
              <div className="faq-response">
                <h1>Réponse</h1>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
