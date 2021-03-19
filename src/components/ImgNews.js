import css from './ImgNews.module.css';

function ImgNews(props) {

  return (
    <div className={css['card']}>
      <img className={css['image']} src={props.image} />
      <h3 className={css['title']}>{props.title}</h3>
    </div>
  );
}

export default ImgNews;
