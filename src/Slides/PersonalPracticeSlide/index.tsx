import React from "react";

import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import Wheel from "../../images/photos/wheel.jpg";
import Wall from "../../images/photos/wall.jpg";
import TrigDevil from "../../images/photos/trigdevil.jpeg";
import ScreenBottles from "../../images/photos/screenbottles.jpg";
import Prints from "../../images/photos/prints.jpg";
import Nice from "../../images/photos/nice.jpg";
import Pitchfork from "../../images/photos/pitchfork.png";

interface PersonalPracticeSlideProps {}

const PersonalPracticeSlide: React.FC<PersonalPracticeSlideProps> = () => {
  return (
    <SlideMediaTemplate title="Personal Practice">
      <ImageSlides
        images={[
          Wheel,
          Wall,
          TrigDevil,
          ScreenBottles,
          Prints,
          Nice,
          Pitchfork,
        ]}
      />
    </SlideMediaTemplate>
  );
};

export { PersonalPracticeSlide };
