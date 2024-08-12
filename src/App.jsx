import styled from "styled-components";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <StyledApp>
      <LandingPage />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  max-width: 2200px;
  width: 100%;
  margin: 0 auto;
  overflow: auto;
`;
