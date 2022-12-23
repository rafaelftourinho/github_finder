import loading from '../../images/Rolling-1s-200px.svg';
import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div className={classes.loader_container}>
        <img className={classes.loader} src={loading} alt="Loading" />
    </div>
  )
}

export default Loading;
