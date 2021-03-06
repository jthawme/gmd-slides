import React from "react";

import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import GlassAnimals from "../../images/photos/glassanimals.png";
import CircaWaves from "../../images/photos/circawaves.png";
import Octopus1 from "../../images/photos/octopus1.jpg";
import Octopus3 from "../../images/photos/octopus3.jpg";
import Octopus4 from "../../images/photos/octopus4.jpg";
import Octopus5 from "../../images/photos/octopus5.jpg";

interface SwoSitesSlideProps {}

const SwoSitesSlide: React.FC<SwoSitesSlideProps> = () => {
  return (
    <SlideMediaTemplate title="She Was Only – Digital">
      <ImageSlides
        images={[
          GlassAnimals,
          CircaWaves,
          Octopus1,
          Octopus3,
          Octopus4,
          Octopus5,
        ]}
      />
    </SlideMediaTemplate>
  );
};

export { SwoSitesSlide };
