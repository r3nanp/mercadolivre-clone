/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img
              alt="T-Shirt"
              src={tshirtImage}
              width="73%"
            />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction />
          <SellerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos seu dinheiro.
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Garantia de 3 meses.</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Uma T-shirt importada sem estampa pronta para você comprar!!! São feitas
      de políester e algodão de qualidade, além disso, é muito confortável
      usa-lá. Super customizável e tecido bom e de qualidade.
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a
      pharetra odio. Quisque dapibus dui turpis, eget aliquam sem vestibulum at.
      Proin tempus tempor lectus, sed placerat mauris rutrum vitae. Maecenas
      dapibus gravida laoreet. Etiam blandit tellus ut ex efficitur, quis
      feugiat massa pretium. Duis sem lacus, efficitur nec sagittis in,
      consequat sed turpis. Mauris vitae malesuada risus, at lobortis nulla. Sed
      vehicula dolor in urna gravida tincidunt. Vestibulum purus lacus,
      scelerisque pulvinar semper vel, porta quis neque. Sed sed metus metus. Ut
      eu risus a tellus sagittis tempor. Praesent eu lacinia nulla. */}
    </p>
    <br />
    <br />
    Itens inclusos: <br />
    - 1x Tinta preta <br />
    - 1x Tinta vermelha <br />
    - 1x LED Azul Neon <br />
    - 1x Tinta verde <br />
    - 1x Tinta roxa <br />
  </Description>
);

export default Product;
