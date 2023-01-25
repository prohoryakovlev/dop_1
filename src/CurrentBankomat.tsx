import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (

        // props.money.banknotes === 'Dollars'
        //     ? <BanknoteGreen>
        //         <Name>{props.money.banknotes}</Name>
        //         <Nominal>{props.money.value}</Nominal>
        //     </BanknoteGreen>
        //     : <BanknoteBlue>
        //         <Name>{props.money.banknotes}</Name>
        //         <Nominal>{props.money.value}</Nominal>
        //     </BanknoteBlue>

        <BanknoteUniversal color={props.money.banknotes === 'Dollars'? 'greenyellow': 'steelblue'}>
            <Name>{props.money.banknotes}</Name>
            <Nominal>{props.money.value}</Nominal>
        </BanknoteUniversal>
    );
};

const BanknoteUniversal = styled.div`
  background-color: ${props => {
    if (props.color === 'greenyellow') {
      return 'greenyellow'
    } else {
      return 'steelblue'
    }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;

`

const BanknoteGreen = styled.div`
  background-color: greenyellow;
  width: 400px;
  height: 200px;
  margin: 10px;

`
const BanknoteBlue = styled.div`
  background-color: steelblue;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`
const Nominal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 20px;
`