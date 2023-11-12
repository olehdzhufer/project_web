import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../../Icons/aaafe41896fc93e0342daaee35df3049.png";
export const Layout = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <img src={Logo} alt="Лого" style={{ width: '100px', height: 'auto', marginLeft: "70px" }} />
  </div>
</nav>
  );
};

export default Layout;
