import styled from "styled-components";

export const Container = styled.div`
  width: 920px;
  margin: auto;
`;
export const Left = styled.div`
  float: left;
  /* border: 1px solid #e6ecf0; */
  width: 600px;
  height: 1000px;
  overflow: hidden;
`;
export const Right = styled.div`
  float: right;
  border: none;
  width: 300px;
  padding: 5px;
  margin-top: 20px;
  background-color: #eff3f5;
`;

export const SearchBox = styled.div`
  position: absolute;
  width: 510px;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  padding: 7px 10px;
  margin: 20px 50px;
  background-color: #e6e6e6;
  color: #767676;
  &:hover {
    background-color: #fff;
    border: 1px solid #1da1f2;
    color: #1da1f2;
  }
`;

export const SearchInput = styled.input`
  width: 460px;
  border: none;
  font-family: sans-serif;
  font-size: 1rem;
  background: none;
  outline: none;
  padding: 0px 15px;
  color: #767676;
`;

export const List = styled.ul`
  list-style-type: none;
  width: 560px;
`;

export const ListItem = styled.li`
  padding: 10px;
  overflow: auto;
  border-bottom: 1px solid #e6e6e6;
`;

export const Thumbnail = styled.img`
  float: left;
  border-radius: 50%;
  width: 49px;
  height: 49px;
  margin: 0 15px 0 0;
`;

export const RightItem = styled.div`
  float: left;
`;

export const SearchLabel = styled.div`
  float: left;
  font-weight: ${(props) => props.fontWeight || 200};
  overflow: auto;
  word-wrap: break-word;
`;

export const Clear = styled.div`
  clear: both;
`;
