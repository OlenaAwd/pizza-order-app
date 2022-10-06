import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.call}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.pizzaLogo}>
        <span className={styles.textPizzaS}>HOT PIZZA</span>{" "}
        <Link href="/">
          <Image src="/img/logo.png" alt="" width="64px" height="64px" />
        </Link>
        <span className={styles.textPizzaE}>FOR EVERYBODY!</span>
      </div>
      <Link href="/cart">
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          {quantity > 0 && <div className={styles.counter}>{quantity}</div>}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
