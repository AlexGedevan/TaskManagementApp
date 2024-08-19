import styled from "styled-components";

function ReusableButton({
  children,
  backgroundColor,
  textColor,
  onClickFunction,
}) {
  return (
    <StyledReusableButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClickFunction}
    >
      {children}
    </StyledReusableButton>
  );
}

export default ReusableButton;

const StyledReusableButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  width: 29.5rem;
  padding: 0.8rem 0 0.9rem 0;
  border-radius: 10000px;
  border: none;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.3rem;
  color: ${(props) => props.textColor};
`;
