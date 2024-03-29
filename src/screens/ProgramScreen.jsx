import React from "react";
import { ContainerWrap } from "../components/Containers";
import Heading from "../components/Heading";
import Program from "../components/Program";
import bjj from "../assets/bjj.jpg";
import mma from "../assets/mma.jpg";
import bkids from "../assets/kidsbjj.jpg";
import jkids from "../assets/kidsjudo.jpg";

const ProgramScreen = () => {
  return (
    <ContainerWrap style="programs section" id="programs">
      <div className="d-flex flex-column justify-content-center">
        <div className="clear-top">
          <Heading title="Program koji nudimo" style="my-5" />
        </div>
        <Program
          title="Brazilian Jiu Jitsu - BJJ"
          order={false}
          image={bjj}
          style=""
          imgStyle="programs__bjj"
        >
          Brazilski jiu-jitsu (BJJ) je borilačka vještina koja je fokusirana na
          borbi na tlu, gdje borci koriste tehnikou i kontrolu kako bi
          prevladali protivnika. Ova disciplina naglašava taktičko razmišljanje,
          tehnike submissiona i razvoj fleksibilnosti, što omogućuje manjim ili
          slabijim borcima da se nose s jačim protivnicima. Kroz sparing i
          trening, polaznici BJJ-a razvijaju ne samo svoje fizičke vještine, već
          i samopouzdanje i sposobnost rješavanja problema u stresnim
          situacijama.
        </Program>
        <Program
          title="Mixed Martial Arts - MMA"
          order={true}
          image={mma}
          style="mt-5"
          imgStyle="programs__mma"
        >
          Mješovite borilačke vještine (MMA) su sport koji kombinuje različite
          borilačke discipline poput brazilskog jiu-jitsua, kickboxinga, boksa,
          i grapplinga, omogućujući borcima da koriste različite tehnike tokom
          borbe. MMA borci se suočavaju u oktogonu gdje se takmiče u borbi
          rukama, nogama, i na tlu, tražeći pobjedu preko knockouta,
          submissiona, ili odlukom sudije. Ovaj dinamični sport privlači pažnju
          široke publike zbog svoje eksplozivnosti, tehnike koje borci koriste u
          ringu.
        </Program>
        <Program
          title="Bjj Za Djecu"
          order={false}
          image={bkids}
          style="mt-5"
          imgStyle="programs__bkids"
        >
          BJJ - Kid je program Brazilskog jiu-jitsua za decu na kome djeca kroz
          igru savladavaju tehniku, samoodbrane, samodiscipline i poštovanja.
          Kroz sigurno i strukturisano okruženje, djeca uče osnovne tehnike
          grapplinga, poput oslobađanja i kontrolisanja protivnika na podu, što
          podstiče razvoj motoričkih veština i samopouzdanja. BJJ takođe
          promoviše vrednosti timskog rada i poštovanja protivnika, pružajući
          detetu ne samo veštine borbe, već i važne životne lekcije.
        </Program>
        <Program
          title="Judo Za Djecu"
          order={true}
          image={jkids}
          style="mt-5"
          imgStyle="programs__jkids"
        >
          Judo je drevna japanska borilačka vještina koja podstiče fizički i
          mentalni razvoj kod djece kroz tehnike bacanja, držanja i kontrole
          protivnika. Kroz bezbjedan i strukturiran trening, djeca razvijaju
          motoričke sposobnosti, samopouzdanje i poštovanje prema sebi i
          drugima. Judo takođe podstiče disciplinu, timski duh i samodisciplinu,
          pružajući djeci temelje borilačke vještine uz istovremeno učenje
          važnih životnih principa.
        </Program>
      </div>
    </ContainerWrap>
  );
};

export default ProgramScreen;
