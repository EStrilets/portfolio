import * as React from "react";
import { useTheme } from "next-themes";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
} from "react-particle-image";

interface ParticleProps {
  imgSrc: string;
  filterColor?: string;
  logoScale?:number;
  logoWidth?:number;
  logoHeight?:number;
  colorFunction?: (params: { x: number; y: number; image: any }) => string;
}

export default function ExpirienceParticles({
  imgSrc,
  filterColor='white',
  colorFunction,
  logoScale=0.25,
  logoWidth,
  logoHeight=200,
}: ParticleProps) {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  
  // Special handling for AnyDay logo in light mode
  const isAnyDayLogo = imgSrc.includes('anyDay');
  const logoFilterColor = isLightMode && isAnyDayLogo ? '#000000' : filterColor;
  const particleOptions: ParticleOptions = {
    mass: () => 50,
    radius: () => Math.random() * 0.01 + 0.4,
    filter: ({ x, y, image }) => {
      if (colorFunction) {
        const color = colorFunction({ x, y, image });
        return color !== null && color !== undefined;
      } else {
        const pixel = image.get(x, y);
        return pixel.r > 100;
      }
    },
    color: ({ x, y, image }) => {
      if (colorFunction) {
        return colorFunction({ x, y, image });
      } else {
        return logoFilterColor;
      }
    },
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2
      );
    },
  };

  // Dynamic background color based on theme and logo
  const getBackgroundColor = () => {
    if (isLightMode) {
      return isAnyDayLogo ? '#ffffff' : '#f8f9fa';
    }
    return '#060709';
  };

  return (
    <div
      style={{
        filter: `drop-shadow(0 0 5px ${logoFilterColor ? logoFilterColor : "white"})`,
        borderRadius: 100,
        overflow: "hidden",
        backgroundColor: getBackgroundColor()
      }}
    >
      <div
        style={{
          filter: `drop-shadow(0 0 5px ${logoFilterColor ? logoFilterColor : "rgb(255 255 255)"})`,
        }}
      >
        <ParticleImage
          width={logoWidth}
          height={logoHeight}
          scale={logoScale}
          entropy={10}
          maxParticles={6500}
          backgroundColor="trasperant"
          src={imgSrc}
          mouseMoveForce={(x, y) => forces.disturbance(x, y, 20)}
          touchMoveForce={(x, y) => forces.disturbance(x, y, 20)}
          mouseDownForce={(x, y) => forces.disturbance(x, y, 20)}
          particleOptions={particleOptions}
        />
      </div>
    </div>
  );
}
