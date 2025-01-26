import React from "react";
import styled from "styled-components";

const Container = styled.div`
  //background-color: blue;
  width: 95.9%;
  height: 80.2%;
  padding: 20px;
  color: white;
  margin-top: 70px;
`;

const BreadCrumb = styled.div`
  width: 100%;
  height: 30px;
 // background-color: purple;
  margin-top: -15px;
 margin-bottom: 9px;
  padding-top: 10px;
`;

const Wrapper = styled.div`
 // background-color: #d0b9b9;
  height: 95%;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
`;

const Dashboard = () => {
  return (
    <Container>
      <BreadCrumb>
      </BreadCrumb>
      <Wrapper>
      
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
