import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styled";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";

const Navigation = () => (
  <div >
    <Router>
      <LinkingWrapper>
        <ul>
          <li>
            <NavLink to="/" end>
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Каталог</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Кошик</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </LinkingWrapper>
    </Router>
  </div>
);

export default Navigation;
