import {
  Wrapper,
  IconBase,
  IconWrapper,
  TextWrapper,
  LogoWrapper,
} from "./Footer.styled";
import Icon, {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import Logo from "../../../Icons/aaafe41896fc93e0342daaee35df3049.png";
const Footer = () => {
  return (
    <div className="bg-light">
      <Wrapper>
        <div>
          <h6>Branding Stuff</h6>
          <p>das</p>
        </div>
        <LogoWrapper>
          <img
            src={Logo}
            style={{ width: "80px", height: "80px" }}
            alt="Logo"
          />
        </LogoWrapper>
        <IconWrapper>
          <IconBase component={FacebookOutlined} color="#1877F2" />
          <IconBase component={TwitterOutlined} color="#03A9F4" />
          <IconBase component={LinkedinOutlined} color="#007AB9" />
          <IconBase component={GooglePlusOutlined} color="#DB4437" />
        </IconWrapper>
      </Wrapper>
      <hr
        className="footer__hr"
        style={{ height: "1px", border: "0", background: "#cdd1d4" }}
      />
      <TextWrapper>
        <p>2023 IoT© Copyright all rights reserved</p>
      </TextWrapper>
    </div>
  );
};
export default Footer;
