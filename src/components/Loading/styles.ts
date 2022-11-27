import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex: 1;
  flex-direction: column;

  background-color: ${(props)=>props.theme.color.background};

  justify-content: space-around;

  height: 100vh;

`;
