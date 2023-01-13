import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import classes from './Repos.module.css';
import { ReposType } from "../types/repos";

const Repos = () => {
  const [repos, setRepos] = useState<ReposType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();

  const loadRepos = async (): Promise<void> => {
    const res = await fetch (`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
    console.log(data);
    setRepos(data);
  }

  return (
    <div className={classes.geral}>
      <div>
        {repos.length > 0 && repos.map((item) => (
          <div className={classes.repos} key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.language}</p>
            <a href={`https://github.com/${username}/${item.name}`} target="_blank">Ir para o repositório</a>
        </div>
      ))}
      </div>
      {repos.length > 0 && <Link to="/">Voltar</Link>}
      {isLoading && <Loading />}
    </div>
  )
}

export default Repos;
