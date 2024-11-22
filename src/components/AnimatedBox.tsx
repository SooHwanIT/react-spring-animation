// components/AnimatedBox.tsx

import { useState } from 'react';
import styled, { css } from 'styled-components';
import { AnimationItem } from '@/src/animations/animationLibrary';

interface AnimatedBoxProps {
    animationItem: AnimationItem;
    onClick: (borderColor: string) => void;
    isContainerHovered: boolean;
    borderColor: string; // 추가됨
}

const Box = styled.div<{ cssStyled: string; borderColor: string; isHovered: boolean }>`
  width: 150px;
  height: 150px;
  background-color: rgba(26, 26, 26, 0.95);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid ${(props) => props.borderColor};
  box-shadow: 0 0 10px ${(props) => props.borderColor}, 0 0 20px ${(props) => props.borderColor};
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  font-family: 'Noto Sans KR', sans-serif;

  ${({ cssStyled, isHovered }) =>
          isHovered &&
          css`
            ${cssStyled}
          `};
`;

export default function AnimatedBox({
                                        animationItem,
                                        onClick,
                                        isContainerHovered,
                                        borderColor,
                                    }: AnimatedBoxProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            onClick={() => onClick(borderColor)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            borderColor={borderColor}
            cssStyled={animationItem.cssStyled}
            isHovered={isHovered || isContainerHovered}
        >
            {animationItem.content}
        </Box>
    );
}
