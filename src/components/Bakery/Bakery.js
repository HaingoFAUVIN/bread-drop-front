/* eslint-disable no-nested-ternary */
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../Home/Footer/Footer';

// --- COMPOSANTS
import Nav from '../Home/Header/Nav/Nav';
import BakeryBanner from './BakeryBanner/BakeryBanner';
import BakerySearchProducts from './BakerySearchProducts/BakerySearchProducts';
import Bread from './Bread/Bread';
import Pastry from './Pastry/Pastry';
import Viennoiserie from './Viennoiserie/Viennoiserie';
import Sandwich from './Sandwich/Sandwich';
import NotFound from '../NotFound/NotFound';
import CircularIndeterminate from '../CircularIndeterminate';

// DATA, SCSS, ASSETS

function Bakery({
  isVisible,
  setIsVisible,
  isVisible2,
  setIsVisible2,
  isVisible3,
  setIsVisible3,
  isVisible4,
  setIsVisible4,
}) {
  const { id } = useParams();
  const [bakery, setBakery] = useState(null);

  const [pastries, setPastries] = useState([]);
  const [viennoiseries, setViennoiseries] = useState([]);
  const [breads, setBreads] = useState([]);
  const [sandwiches, setSandwiches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const api = axios.create({
    baseURL: 'http://davyvistel-server.eddi.cloud/',
    headers: {
      Authorization: 'Bearer',
    },
  });

  useEffect(() => {
    const fetchBakery = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`api/boulangeries/${id}`);
        console.log(response.data);
        setBakery(response.data);
        console.log(response.data.products);

        const pastriesData = response.data.products.filter(
          (products) => products.category.name === 'Pâtisserie',
        );
        setPastries(pastriesData);

        const viennoiseriesData = response.data.products.filter(
          (products) => products.category.name === 'Viennoiserie',
        );
        setViennoiseries(viennoiseriesData);

        const breadsData = response.data.products.filter(
          (products) => products.category.name === 'Pain',
        );
        setBreads(breadsData);

        const sandwichesData = response.data.products.filter(
          (products) => products.category.name === 'Sandwitch',
        );
        setSandwiches(sandwichesData);
      }
      catch (erreur) {
        console.log(erreur);
      }
      setIsLoading(false);
    };
    fetchBakery();
  }, [id]);

  return (
    isLoading ? <CircularIndeterminate />
      : bakery === null
        ? <NotFound />
        : (
          <>
            <Nav />
            <BakeryBanner bakery={bakery} />
            <BakerySearchProducts />
            <Bread isVisible={isVisible} setIsVisible={setIsVisible} breads={breads} />
            <Pastry isVisible2={isVisible2} setIsVisible2={setIsVisible2} pastries={pastries} />
            <Viennoiserie isVisible3={isVisible3} setIsVisible3={setIsVisible3} viennoiseries={viennoiseries} />
            <Sandwich isVisible4={isVisible4} setIsVisible4={setIsVisible4} sandwiches={sandwiches} />
            <Footer />
          </>
        )
  );
}

Bakery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  setIsVisible2: PropTypes.func.isRequired,
  isVisible3: PropTypes.bool.isRequired,
  setIsVisible3: PropTypes.func.isRequired,
  isVisible4: PropTypes.bool.isRequired,
  setIsVisible4: PropTypes.func.isRequired,
};

export default Bakery;
