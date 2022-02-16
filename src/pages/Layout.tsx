import {Header} from "../components/header/Header";
import React from "react";
import {Information} from "../components/information/Information";
import {Attribute} from "../components/attribute/Attribute";
import {GameLayout} from "../components/gameLayout/GameLayout";
import {Team} from "../components/team/Team";
import { Record } from "../components/record/Record";
import {Footer} from "../components/footer/Footer";

const Layout = () => {
  return (
    <React.Fragment>
      {/*<Header />*/}
      <Information />
      <Attribute />
      <GameLayout />
      <Team />
      <Record />
      <Footer />
    </React.Fragment>
  )
};

export {Layout}
