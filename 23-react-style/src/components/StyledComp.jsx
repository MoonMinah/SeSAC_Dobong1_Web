import styled, { keyframes } from "styled-components";

// const rotate = keyframes`
//   0%{
//     transform: rotate(0);
//   }
//   50%{
//     transform: rotate(180deg);
//     background-color: white;
//   }
//   100%{
//     transform: rotate(360deg);
//   }
// `;
// const Container = styled.div`
//   border: 1px solid gray;
//   padding: 0.5rem;
//   margin: 1rem 0 5rem;
// `;

// const H4Title = styled.h4`
//   background-color: yellowgreen;
//   /* 780px 이하이면서 기기 방향이 세로 */
//   @media screen and (max-width: 780px) and(orientation: portrait) {
//   }
//   /* 780px 이하이면서 기기 방향이 가로 */
//   @media screen and (max-width: 780px) and (orientation: landscape) {
//     font-size: 40px;
//     color: red;
//   }
// `;
// const ParentDiv = styled.div`
//   background-color: #444;
//   display: flex;
// `;

// const Child = styled.span`
//   color: ${(props) => (props.color ? props.color : "red")};
//   &:hover {
//     color: white;
//     cursor: pointer;
//     animation: ${rotate} 1s infinite linear;
//   }

//   @media screen and (min-width: 768px) {
//     font-size: 20px;
//     color: yellow;
//   }
// `;

// export default function StyledComp() {
//   return (
//     <Container>
//       <H4Title>styled-components 이용</H4Title>
//       <ParentDiv>
//         <Child color="blue">el1</Child>
//         <Child>el2</Child>
//         <Child>el3</Child>
//       </ParentDiv>
//     </Container>
//   );
// }

import logo from "../logo.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
 `;
const Container = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0 5rem;
`;

const RootDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} 10s infinite linear;
`;

const MyA = styled.a`
  color: #61dafb;
`;

export default function StyledComp() {
  return (
    <RootDiv>
      <AppHeader>
        {/* 수정: AppLogo 태그가 닫히도록 수정 */}
        <AppLogo src={logo} alt="app" />
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
