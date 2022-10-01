import React from 'react';
import { PageLink } from '../components/PageLink';
import { HomeContainer } from '../styles/pages/home';

function Home() {
  return (
    <React.Fragment>
      <HomeContainer>
        <PageLink label='Desenhar reta' icon='line-icon.png' />
      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
