import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import Section from './components/Section';
import usePlanets from './customHooks/usePlanets';

const App = () => {
  const { planets, reqStatus } = usePlanets();

  return (
    <div className={style.main}>
      <Hero />
      <main>
        <Home />
        <Section items={planets} reqStatus={reqStatus} />
      </main>
    </div>
  );
};

export default App;
