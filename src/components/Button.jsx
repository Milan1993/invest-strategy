import styled from 'styled-components';

const Btn = styled.button`
    text-rendering: optimizeLegibility;
    font-weight: 600;
    text-align: center;
    padding: .5em 1em;
    height: 54px;
    min-width: 150px;
    color: #566A85;
    border: 3px solid #566A85;
    background: transparent;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-top-right-radius: ${props => props.isPrev ? '0px' : '50px'};
    border-bottom-right-radius: ${props => props.isPrev ? '0px' : '50px'};
    border-top-left-radius: ${props => props.isNext ? '0px' : '50px'};
    border-bottom-left-radius: ${props => props.isNext ? '0px' : '50px'};

    &[disabled] {
        opacity: .75;
        cursor: not-allowed;
    }

    &.primary,
    &:hover {
        background-color: #566A85;
        color: white;
    }

    &.secondary { border-right: none !important; }
`;

const Button = ({ label, onClick, isPrev, isNext, disabled }) => {
    return (
        <Btn className={ isNext ? 'primary' : 'secondary' } isPrev={isPrev} disabled={disabled} isNext={isNext} onClick={onClick}>
            {label}
        </Btn>
    )
}

export default Button;