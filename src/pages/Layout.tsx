import {Header} from "../components/header/Header";
import React from "react";
import {Information} from "../components/information/Information";
import {Attribute} from "../components/attribute/Attribute";
import {GameLayout} from "../components/gameLayout/GameLayout";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Information />
      <Attribute />
      <GameLayout />
    </React.Fragment>
  )
};

export {Layout}
