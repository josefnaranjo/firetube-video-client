import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  return (
      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>Welcome to the React Boilerplate!</h1>
          </Wrapper>
        </Main>
      </Container>
  );
}

export default App;