import React from 'react';
import { GeneralContainer } from '../components/GeneralContainer';
import { PageLink } from '../components/PageLink';
import { HomeContainer } from '../styles/pages/home';

function Home() {
  return (
    <React.Fragment>
      <GeneralContainer pageTitle='Ínicio'>
        <HomeContainer>
          <PageLink label='Desenhar reta' icon='line-icon.png' linkTo='LineDrawPage' />
          <PageLink label='Desenhar circulo' icon='circle-icon.png' linkTo='CircleDrawPage' />
        </HomeContainer>
      </GeneralContainer>
    </React.Fragment>
  );
};

export default Home;
