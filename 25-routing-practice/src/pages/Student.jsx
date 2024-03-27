import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";

// 스타일드 컴포넌트 생성
const StudentWrapper = styled.div`
  background-color: yellowgreen;
  height: 80px;
`;
export default function Student() {
  const navigate = useNavigate();
  // useParams 훅을 사용하여 URL 파라미터 값을 가져옴
  const { studentId } = useParams();
  console.log("std", studentId);

  // useSearchParams 훅을 사용하여 쿼리 파라미터 값 가져옴
  const [queryParams, setQueryParams] = useSearchParams();
  const query = queryParams.get("name");

  return (
    <StudentWrapper>
      <p>학생 이름은 {studentId}입니다.</p>
      {query && <p>진짜 이름은 {query}입니다.</p>}
      <button onClick={() => navigate(-1)}>이전페이지</button>
    </StudentWrapper>
  );
}
