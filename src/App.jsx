import { useState } from "react";
import { Countdown } from "./components/Countdown/Countdown";
import { useFetch } from "./hooks/useFetch";
import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import style from "./App.module.css";

function App() {
  const { data, error, isLoading } = useFetch(
    "https://api.realworld.io/api/articles?limit=20",
  );
  const [enableTimer, setEnableTimer] = useState(true);

  return (
    <div>
      <section className={style["section-countdown"]}>
        <h2>CountDown</h2>
        <button onClick={() => setEnableTimer(!enableTimer)}>Hide Timer</button>
        {enableTimer ? <Countdown time={10} /> : <p>Timer hidden</p>}
      </section>

      <section className={style["section-articles"]}>
        <h2>Articles</h2>
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message="failed fetching data" />
        ) : (
          <ul className={style["articles"]}>
            {data.articles.map((article) => {
              return (
                <li key={article.slug}>
                  <ArticleCard article={article} />
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
