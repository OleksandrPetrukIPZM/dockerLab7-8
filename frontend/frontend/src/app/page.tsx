import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
    console.log("Home page");
    const getUsers = () =>{
        axios.get("/api/users").then((response) => {console.log(response)});
    }
  return (
    <div className={styles.page}>
      <button onClick={() => getUsers()}>Click me</button>
    </div>
  );
}
