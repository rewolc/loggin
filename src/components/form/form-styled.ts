import styled from "styled-components";

interface InptProps {
  readonly filled?: string;
}

export const Inpt = styled.input<InptProps>`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background-color: whitesmoke;
  border: none;
  padding-left: 15px;
  transition: all 0.5s;
  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 1px
      ${(props) => (props.filled ? "rgba(226, 111, 111, 1);" : "#d7bd56cc;")};
  }
`;

export const UpperFormText = styled.p`
  margin: 20px 0 10px 0px;
  color: rgba(31, 31, 31, 1);
  font-size: 16px;
`;

export const UnderFormText = styled.p`
  margin-top: 8px;
  color: rgba(226, 111, 111, 1);
  font-size: 14px; ;
`;

