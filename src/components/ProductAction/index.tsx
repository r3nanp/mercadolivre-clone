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

        <span className="methods">
          em 3x de R$ 26,99 sem juros
        </span>
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
            Devolução grátis. Você tem 7 dias a partir da data de recebimento.
          </p>
        </li>

        <li>
          <ShieldIcon />
          <p>
            Compra garantida, receba o produto que está esperando ou devolvemos
            o dinheiro.
          </p>
        </li>

        <li>
          <TrophyIcon />
          <p>Lorem Pontos. Você acumula 353 pontos.</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
