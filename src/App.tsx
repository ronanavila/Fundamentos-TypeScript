import { Post, PostType } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar.jsx";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/46966269?v=4",
      name: "Batman 3G",
      role: "Web Morcego",
    },
    publishedAt: new Date("2024-03-03 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio",
      },
      {
        type: "paragraph",
        content: "criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      { type: "paragraph", content: "Acesse e deixe seu feedback" },
      { type: "link", content: "devonlane.design" },
      { type: "link", content: "#BOT" },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/46966269?v=4",
      name: "Robin",
      role: "Web Prodigio",
    },
    publishedAt: new Date("2023-06-03 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio",
      },
      {
        type: "paragraph",
        content: "criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      { type: "paragraph", content: "Acesse e deixe seu feedback" },
      { type: "link", content: "devonlane.design" },
      { type: "link", content: "#BATALHA" },
    ],
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/46966269?v=4",
      name: "Mulher Batman",
      role: "Web Morcega",
    },
    publishedAt: new Date("2023-05-03 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio",
      },
      {
        type: "paragraph",
        content: "criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      { type: "paragraph", content: "Acesse e deixe seu feedback" },
      { type: "link", content: "devonlane.design" },
      { type: "link", content: "#LUTA" },
    ],
  },
];
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
