import Icon from "@ant-design/icons";
import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 36px;
  width: 100% p {
    color: 8e8E93;
    text-align: center;
    font-weight: 200;
  }
  h1 {
    margin-top: 10px;
  }
  span {
    margin: 0 10px;
  }
`;
export const LogoWrapper = styled.div`
  margin-left: 130px;
`;
export const IconBase = styled(Icon)`
  font-size: 24px;
  color: ${({ color }) => color};
  margin-right: 45px;
`;
export const IconWrapper = styled.div`
  margin: 10px 0;
`;
export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
