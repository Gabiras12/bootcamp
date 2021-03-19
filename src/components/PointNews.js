import css from './PointNews.module.css';

function PointNews(props) {

  return (
    <div className={css['root']}>
        <div className={css['point']}></div>
        {props.title}
    </div>
  );
}

export default PointNews;
