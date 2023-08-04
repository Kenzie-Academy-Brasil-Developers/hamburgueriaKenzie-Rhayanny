import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "../Header/style.module.scss";

export const Header = ({ setOpenBtn, setProductList, setValue, cartList }) => {
  const submit = (event) => {
    event.preventDefault();
    setProductList(value);
    setValue("");
  };

  return (
    <header>
      <div className="container">
        <div className={styles.containerHeader}>
          <img src={Logo} alt="Logo Kenzie Burguer" />

          <button onClick={() => setOpenBtn(true)} className="body">
            <MdShoppingCart size={28} />
            <span>{cartList.length}</span>
          </button>
        </div>
        <form onSubmit={submit}>
          <input
            className="Headline"
            placeholder="Digitar Pesquisa"
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btnSm" type="submit">
            <MdSearch className="loop" size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};
