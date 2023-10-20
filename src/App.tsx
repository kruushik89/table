import React from 'react';
import './App.css';
import Table from "./components/Table/Table";
import styled from "styled-components";
import {theme} from "./constants/theme";

function App() {
  return (
    <AppContent>
      <Table/>
    </AppContent>
  );
}

export default App;

const AppContent = styled.div`
  @media (max-width: ${() => theme.breakpoint.sm}) {
    overflow-y: scroll;
  }
`
