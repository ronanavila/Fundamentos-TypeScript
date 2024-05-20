import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (commnet: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCommnet() {
    // nao tras o valor atualizado dentro do escopo, somente apos execucao
    //setLikeCount(likeCount + 1);

    // tras o valor atualizado logo apos alteracao
    // const newLikeCount = likeCount + 1;
    // setLikeCount(newLikeCount);

    // tras o valor atualizado logo apos alteracao
    setLikeCount((state) => {
      return state + 1;
    });
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/46966269?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Batman Silva</strong>
              <time title="11 de maio ás 08:13" dateTime="2022-05-11 08:13:30">
                Cerca há 1hr atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCommnet} title="Deletar comentário">
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
