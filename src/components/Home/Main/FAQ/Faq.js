// Importer les modules nécessaires
import { useState } from 'react';  // Importe la fonction useState pour gérer l'état des composants
import './styles.scss';  // Importe les styles du composant FAQ
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';  // Importe l'icône ArrowDownward de la librairie MUI
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';  // Importe l'icône ArrowUpward de la librairie MUI

// Composant FAQ pour afficher une liste de questions fréquemment posées
function Faq() {
  // Initialise l'index de la question ouverte à null (aucune question n'est initialement ouverte)
  const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

  // Définit un tableau de questions et de réponses à afficher
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

  // Gère l'ouverture et la fermeture des réponses en cliquant sur une question
  const handleOpenAnswer = (index) => {
    // Si la question cliquée est déjà ouverte, la ferme en réglant l'index de la question ouverte sur null
    if (openedQuestionIndex === index) {
      setOpenedQuestionIndex(null);
    } else {
      // Sinon, ouvre la question cliquée en réglant l'index de la question ouverte sur l'index de la question cliquée
      setOpenedQuestionIndex(index);
    }
  };

  // Rendu du composant
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

// Exporter le composant FAQ pour permettre son utilisation dans d'autres fichiers
export default Faq;
