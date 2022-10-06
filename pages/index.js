import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import AddButton from "../components/AddButton";
import Add from "../components/Add";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Hot</title>
        <meta name="description" content="Best pizza app in Poland!" />
        <link
          rel="icon"
          href="https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/64/000000/external-pizza-fast-food-febrian-hidayat-flat-febrian-hidayat.png"
        />
      </Head>
      <Slider />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(
    "http://pizza-order-hot-pizza.vercel.app/api/products"
  );
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
