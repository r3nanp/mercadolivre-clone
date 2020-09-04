import styled from 'styled-components';

import { HiOutlineHeart, HiOutlineCheck } from 'react-icons/hi';
import { BiCheckShield } from 'react-icons/bi';
import { AiOutlineCreditCard, AiOutlineTrophy } from 'react-icons/ai';
import { IoIosReturnLeft } from 'react-icons/io';

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const Condition = styled.div`
  font-size: 14px;
  color: var(--color-gray);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const DispatchTag = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  background: var(--color-blue);
  color: var(--color-white);

  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 44px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    font-size: 20px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.div`
  color: var(--color-green);
  margin-top: 18px;
  font-size: 16px;

  margin-left: 8px;
  display: flex;

  .methods {
    margin-left: 8px;
  }
`;

export const StockStatus = styled.div`
  margin-top: 24px;
  font-size: 18px;
`;

export const MethodCard = styled.div`
  margin-top: 18px;
  display: flex;

  > div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    .title {
      color: var(--color-green);
      font-size: 14px;
    }
    .details {
      margin-top: 5px;
      color: var(--color-gray);
      font-size: 16px;
    }
    .more {
      margin-top: 5px;
      color: var(--color-blue);

      font-size: 14px;
      text-decoration: none;
      font-weight: 600;
    }
  }
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

type ButtonProps = {
  solid?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;
  margin-top: 10px;
  cursor: pointer;

  color: ${props => (props.solid ? 'var(--color-white)' : 'var(--color-blue)')};
  background: ${props => (props.solid ? 'var(--color-blue)' : 'transparent')};
  border: ${props => (props.solid ? 'none' : '1px solid var(--color-border)')};

  &:hover {
    background: ${props =>
      props.solid ? 'var(--color-blue-hover)' : 'var(--color-border)'};
  }
`;

export const Benefits = styled.ul`
  margin-top: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    display: flex;

    p {
      margin-left: 10px;
      color: var(--color-gray);
      font-size: 14px;

      > a {
        text-decoration: none;
        color: var(--color-blue);
      }
    }
  }

  > li + li {
    margin-top: 10px;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: var(--color-blue);

  margin-left: 16px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const CreditIcon = styled(AiOutlineCreditCard)`
  width: 24px;
  height: 24px;
  color: var(--color-green);
`;

export const CheckIcon = styled(HiOutlineCheck)`
  width: 24px;
  height: 24px;
  color: var(--color-green);
`;

export const ReturnIcon = styled(IoIosReturnLeft)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;

export const ShieldIcon = styled(BiCheckShield)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;

export const TrophyIcon = styled(AiOutlineTrophy)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;
