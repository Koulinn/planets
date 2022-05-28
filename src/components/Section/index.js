import style from './style.module.scss';
import Card from '../Card';

const Section = ({ items }) => {
  return (
    <section className={`container-sm ${style.section}`}>
      {items.map((planet, i) => (
        <Card key={planet.pl_name + i.toFixed()} item={planet} />
      ))}
    </section>
  );
};

export default Section;
