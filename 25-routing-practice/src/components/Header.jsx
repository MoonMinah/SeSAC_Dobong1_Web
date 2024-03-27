import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const MyLink = styled(Link)`
  text-decoration: none;
  color: green;
`;
export default function Header() {
  return (
    <header className="header">
      <div>
        <MyLink to="/" className="menu-item">
          홈으로
        </MyLink>
        <MyLink to="/student/allie" className="menu-item">
          학생
        </MyLink>
        <MyLink to="/student/codingon" className="menu-item">
          코딩온
        </MyLink>
        <MyLink to="/student/new?name=jisoo" className="menu-item">
          query
        </MyLink>
      </div>
    </header>
  );
}
