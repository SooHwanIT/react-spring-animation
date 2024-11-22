// pages/index.tsx

import { useState } from 'react';
import styled from 'styled-components';
import { animationItems, AnimationItem, neonColors } from '../animations/animationLibrary';
import AnimationDisplay from '../components/AnimationDisplay';
import AnimationContainer from '../components/AnimationContainer';

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #121212;
  overflow: hidden;
`;

const LeftPanel = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 20px;
  overflow-y: auto;
  height: 100vh;
  margin-right: 400px;
`;

const RightPanel = styled.div`
  width: 400px;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: #1a1a1a;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  color: #fff;
`;

export default function MainPage() {
    const [selectedAnimation, setSelectedAnimation] = useState<AnimationItem | null>(null);
    const [styleCode, setStyleCode] = useState<string>('');
    const [selectedBorderColor, setSelectedBorderColor] = useState<string>('#ffffff'); // 추가됨

    const handleBoxClick = (item: AnimationItem, borderColor: string) => {
        const combinedStyles = `
border: 2px solid ${borderColor};
box-shadow: 0 0 10px ${borderColor}, 0 0 20px ${borderColor};
${item.cssStyled || ''}
`;
        setSelectedAnimation(item);
        setStyleCode(combinedStyles);
        setSelectedBorderColor(borderColor); // 선택된 보더 컬러 저장
    };

    return (
        <PageWrapper>
            <LeftPanel>
                {animationItems.map((item, index) => {
                    const borderColor = neonColors[index % neonColors.length];
                    return (
                        <AnimationContainer
                            key={item.id}
                            animationItem={item}
                            borderColor={borderColor} // 전달
                            onClick={() => handleBoxClick(item, borderColor)}
                        />
                    );
                })}
            </LeftPanel>
            <RightPanel>
                {selectedAnimation ? (
                    <AnimationDisplay
                        animationItem={selectedAnimation}
                        styleCode={styleCode}
                        resetCode={setStyleCode}
                        borderColor={selectedBorderColor} // 전달
                    />
                ) : (
                    <p>애니메이션 박스를 클릭하여 자세한 내용을 확인하세요.</p>
                )}
            </RightPanel>
        </PageWrapper>
    );
}
