import React from 'react';
import { GeneralContainer } from '../components/GeneralContainer';
import { BackButtonContainer } from '../components/Navbar/styles';
import { PageLink } from '../components/PageLink';
import { HomeContainer } from '../styles/pages/Home';

function Home() {
  return (
    <React.Fragment>
      <GeneralContainer pageTitle='Ínicio'>
        <HomeContainer>
          <PageLink label='Desenhar reta' icon='line-icon.png' linkTo='LineDrawPage' />
        </HomeContainer>
      </GeneralContainer>
    </React.Fragment>
  );
};

export default Home;
