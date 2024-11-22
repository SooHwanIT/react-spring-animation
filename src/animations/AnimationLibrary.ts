export interface AnimationItem {
    id: number;
    name: string;
    cssStyled: string; // CSS 스타일
    content: string;
}


export const neonColors = [
    '#FF6F61', '#6B6EFF', '#59D9A6', '#FFDD57',
    '#FF8FA4', '#7BDEFF', '#FF00FF', '#00FFFF',
    '#FF0000', '#00FF00', '#FFFF00', '#FF9900',
    '#FF66CC', '#33CCFF', '#FF6600', '#99FF33'
];


export const animationItems: AnimationItem[] = [
    {
        id: 1,
        name: 'Bounce',
        cssStyled: `
            &:hover {
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
            }
        `,
        content: 'Bounce Animation',
    },
    {
        id: 2,
        name: 'Fade In',
        cssStyled: `
            opacity: 0.7; /* 초기값 설정 */
            &:hover {
                opacity: 1;
                transition: opacity 0.2s ease-in-out;
            }
        `,
        content: 'Fade In Animation',
    },
    {
        id: 3,
        name: 'Rotate',
        cssStyled: `
            &:hover {
                transform: rotate(15deg);
                transition: transform 0.3s ease-in-out;
            }
        `,
        content: 'Rotate Animation',
    },
    {
        id: 4,
        name: 'Slide Right',
        cssStyled: `
            transform: translateX(0); /* 초기값 */
            &:hover {
                transform: translateX(20px);
                transition: transform 0.3s ease-in-out;
            }
        `,
        content: 'Slide Right Animation',
    },
    {
        id: 5,
        name: 'Pulse',
        cssStyled: `
            &:hover {
                animation: pulse 1s infinite;
            }
            @keyframes pulse {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
            }
        `,
        content: 'Pulse Animation',
    },
    {
        id: 6,
        name: 'Wobble',
        cssStyled: `
            &:hover {
                animation: wobble 1s infinite;
            }
            @keyframes wobble {
                0% {
                    transform: rotate(0deg);
                }
                25% {
                    transform: rotate(-5deg);
                }
                50% {
                    transform: rotate(5deg);
                }
                100% {
                    transform: rotate(0deg);
                }
            }
        `,
        content: 'Wobble Animation',
    },
    {
        id: 7,
        name: 'Scale Down',
        cssStyled: `
            &:hover {
                transform: scale(0.9);
                transition: transform 0.2s ease-in-out;
            }
        `,
        content: 'Scale Down Animation',
    },
    {
        id: 8,
        name: 'Slide Up',
        cssStyled: `
            transform: translateY(0); /* 초기값 */
            &:hover {
                transform: translateY(-10px);
                transition: transform 0.3s ease-in-out;
            }
        `,
        content: 'Slide Up Animation',
    },
    {
        id: 9,
        name: 'Glow',
        cssStyled: `
            &:hover {
                box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
                transition: box-shadow 0.2s ease-in-out;
            }
        `,
        content: 'Glow Animation',
    },
    {
        id: 10,
        name: 'Flip',
        cssStyled: `
            &:hover {
                transform: rotateY(180deg);
                transition: transform 0.4s ease-in-out;
            }
        `,
        content: 'Flip Animation',
    },
    {
        id: 11,
        name: 'Expand',
        cssStyled: `
            &:hover {
                width: 120%;
                height: 120%;
                transition: all 0.3s ease-in-out;
            }
        `,
        content: 'Expand Animation',
    },
    {
        id: 12,
        name: 'Shrink',
        cssStyled: `
            &:hover {
                width: 80%;
                height: 80%;
                transition: all 0.3s ease-in-out;
            }
        `,
        content: 'Shrink Animation',
    },
    {
        id: 13,
        name: 'Swing',
        cssStyled: `
            &:hover {
                animation: swing 1s infinite;
            }
            @keyframes swing {
                0% {
                    transform: rotate(0deg);
                }
                50% {
                    transform: rotate(15deg);
                }
                100% {
                    transform: rotate(0deg);
                }
            }
        `,
        content: 'Swing Animation',
    },
    {
        id: 14,
        name: 'Shadow Pop',
        cssStyled: `
            &:hover {
                transform: scale(1.1);
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                transition: all 0.3s ease-in-out;
            }
        `,
        content: 'Shadow Pop Animation',
    },
];

