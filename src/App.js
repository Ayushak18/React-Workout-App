// import logo from './logo.svg';
import "./App.css";
import { SideNav } from "./components/sideNav/sidenav";
import { Main } from "./components/main/main";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Flex>
        <SideNav />
        <Main />
      </Flex>
    </div>
  );
}

export default App;
