import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css'

import "./global.css"
export function App() {
  return (
    <div>
      <Header/>
     
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="arlen agra"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore totam perferendis assumenda."
           />
          <Post
            author="Chacal"
            content="Um novo post legal"
           />
        </main>
      </div>
    </div>
  );
}
