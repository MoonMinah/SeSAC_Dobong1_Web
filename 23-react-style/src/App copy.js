import logo from './logo.svg';

function App() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alter="app">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}

export default App;
