import styled from 'styled-components';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeDisplayProps {
    code: string;
}

const CodeContainer = styled.pre`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.95);
  color: #0f0;
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 12px;
`;

export default function CodeDisplay({ code }: CodeDisplayProps) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <CodeContainer className="language-ts">
            <code className="language-ts">{code}</code>
        </CodeContainer>
    );
}
