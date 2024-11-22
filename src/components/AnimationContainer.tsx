// components/AnimationContainer.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedBox from './AnimatedBox';
import { AnimationItem } from '@/src/animations/animationLibrary';

const AnimationContainerWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #2a2a2a;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  z-index: 1;
`;

interface AnimationContainerProps {
    animationItem: AnimationItem;
    onClick: () => void;
    borderColor: string; // 추가됨
}

const AnimationContainer: React.FC<AnimationContainerProps> = ({
                                                                   animationItem,
                                                                   onClick,
                                                                   borderColor,
                                                               }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <AnimationContainerWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <ContainerHeader>{animationItem.name}</ContainerHeader>
            <AnimatedBox
                animationItem={{
                    ...animationItem,
                    cssStyled: animationItem.cssStyled,
                }}
                onClick={() => {}}
                isContainerHovered={isHovered}
                borderColor={borderColor} // 전달
            />
        </AnimationContainerWrapper>
    );
};

export default AnimationContainer;
