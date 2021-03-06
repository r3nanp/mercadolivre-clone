/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {
  Container,
  Condition,
  Row,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  Actions,
  Button,
  Benefits,
  HeartIcon,
  CreditIcon,
  CheckIcon,
  ReturnIcon,
  ShieldIcon,
  TrophyIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo | 100 vendidos</Condition>

      <Row>
        <h1>Camiseta branca importada</h1>
        <HeartIcon />
      </Row>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">80</span>
          <span className="cents">99</span>
        </PriceRow>
      </PriceCard>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <InstallmentsInfo>
        <CreditIcon />

        <div>
          <span>em 3x de R$ 26,99 sem juros</span>
          <div id="figure">
            <div className="visa"></div>
            <div className="mastercard"></div>
            <div className="billet"></div>
          </div>
        </div>
      </InstallmentsInfo>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">
            Saiba mais sobre os prazos de entrega e formas de envio.
          </span>

          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <StockStatus>Estoque disponível</StockStatus>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ReturnIcon />
          <p>
            <a href="#">Devolução grátis.</a> Você tem 7 dias a partir da data
            de recebimento.
          </p>
        </li>

        <li>
          <ShieldIcon />
          <p>
            <a href="#"> Compra garantida.</a> receba o produto que está
            esperando ou devolvemos o dinheiro.
          </p>
        </li>

        <li>
          <TrophyIcon />
          <p>
            <a href="#">Lorem Pontos.</a> Você acumula 353 pontos.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
