import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  gap: 25px;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

export const TriagilLogo = styled.div<{ img: string }>`
  width: 100px;
  height: 105px;
  position: fixed;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 5%;
  bottom: 5px;
  right: 5px;
  overflow: hidden;
`;
