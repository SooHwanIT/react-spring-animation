// components/AnimationDisplay.tsx

import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import 'ace-builds/src-noconflict/ace';
import AceEditor from 'react-ace';

// Ace Editor 설정
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';

interface AnimationDisplayProps {
    animationItem: AnimationItem;
    styleCode: string;
    resetCode: (code: string) => void;
    borderColor: string; // 추가됨
}

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DynamicDisplayBox = styled.div<{ customStyles: string }>`
  width: 150px;
  height: 150px;
  margin: 50px;
  margin-bottom: 70px;
  background-color: #2a2a2a;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ customStyles }) => css`
    ${customStyles || ''}
  `};
`;

export default function AnimationDisplay({
                                             animationItem,
                                             styleCode,
                                             resetCode,
                                             borderColor,
                                         }: AnimationDisplayProps) {
    const [code, setCode] = useState<string>(styleCode || '');

    useEffect(() => {
        setCode(styleCode);
    }, [styleCode]);

    // 보더 컬러를 포함한 스타일 생성
    const combinedStyles = `
border: 2px solid ${borderColor};
box-shadow: 0 0 10px ${borderColor}, 0 0 20px ${borderColor};
${code || ''}
`;

    return (
        <DisplayContainer>
            <DynamicDisplayBox customStyles={combinedStyles}>
                <div>{animationItem.name}</div>
            </DynamicDisplayBox>

            <AceEditor
                mode="css"
                theme="monokai"
                name="editor"
                value={code}
                onChange={(newCode) => {
                    setCode(newCode);
                    resetCode(newCode);
                }}
                fontSize={14}
                width="100%"
                height="200px"
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                }}
            />
        </DisplayContainer>
    );
}
