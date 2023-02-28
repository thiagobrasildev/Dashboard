import { useState } from "react";
import { Title } from "../Title";
import { countries } from "../../Data/countries";
import * as S from "./styles";
import { FaArrowRight } from "react-icons/fa";

export const Countries = () => {
  const [itemCountries, setItemCountries] = useState(countries);
  return (
    <>
      <S.Container>
        <Title>Coutries</Title>
        <div>
          {itemCountries.map((item, index) => (
            <S.CountriesItem key={index} bgColor={item.bgColor}>
              <p>{item.name}</p>
              <p>{item.value}</p>
            </S.CountriesItem>
          ))}
        </div>
      </S.Container>
      <S.Button>
        More Countries <FaArrowRight />
      </S.Button>
    </>
  );
};
