import React from "react";
import PropTypes from "prop-types";

import { Button } from "../Button/ButtonElements";
import { Section, Container, ColumnLeft, ColumnRight } from "./InfoElements";

const Info = ({
  buttonLabel,
  heading,
  image,
  paragraphOne,
  paragraphTwo,
  reverse,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

Info.propTypes = {};

export default Info;
