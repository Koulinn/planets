import style from './style.module.scss';

const Card = ({ item }) => {
  return (
    <article className={`${style.card}`}>
      <h5 className="text-center">Planet name: {item.pl_name}</h5>
      <p className="text-center">Planet radius: {item.pl_rade}</p>
      <p className="text-center">Release date: {item.releasedate}</p>
    </article>
  );
};

export default Card;
