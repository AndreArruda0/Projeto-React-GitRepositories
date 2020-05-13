import { createGlobalStyle } from 'styled-components';
import {
  FaPlus,
  FaUserAlt,
  FaUsers,
  FaChartPie,
  FaNotesMedical,
  FaClipboardCheck,
  FaPills,
  FaUserMd,
} from 'react-icons/fa';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:#F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input button{
    font: 16px Roboto, sans-ferif;
  }

  #root{
    max-width:968px;
    margin:0 auto;
    padding: 40px 20px;
  }

  button{
    cursor:pointer;
  }
`;
