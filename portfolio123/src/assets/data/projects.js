import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/e.png';
import UTrackerImg from '../images/cointracker.jpg';
import GreenCtgImg from '../images/movie.png';
import CoinTrackerImg from '../images/food2.png';
import CavinImg from '../images/zoom1.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Crypto Tracker',
    desc:
      'It contains two sections, one for searching the name of thecryptocurrency and the other for displaying all the availablecryptocurrencies in the market. ',
    img: UTrackerImg,
    link: 'https://github.com/monikasharma2204/Crypto-Tracker',
  },
  {
    id: uuidv4(),
    name: 'Movie application',
    desc:
      'we can find a short brief summary , major plot points of the movie by searching the movie name',
    img: GreenCtgImg,
    link: 'https://github.com/monikasharma2204/Movie-App',
  },
  {
    id: uuidv4(),
    name: 'Food Application',
    desc:
      'It is a responsive website.In this website i used  programming languages such as HTML, CSS, and JavaScript.',
    img: CoinTrackerImg,
    link: 'https://github.com/monikasharma2204/FOOD_APPLICATION',
  },
  {
    id: uuidv4(),
    name: 'Zoom Clone',
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
    link: 'https://github.com/monikasharma2204/Zoom-clone',
  },
  {
    id: uuidv4(),
    name: 'E-Commerce Website',
    desc:
      'This  e-commerce project typically involves several components, including a user-friendly interface for customers to browse products, a secure payment gateway for transactions.',
    img: ProjectImg,
    link: 'https://github.com/monikasharma2204/E-commerce-website',
  },
];

export default projects;
