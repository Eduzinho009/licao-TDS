import style from './App.module.css';
import { cards } from './assets/mock/card';
import { Menu } from './components/menu';
import instagram from './assets/images/instagram.png';
import youtube from './assets/images/youtube.png';


function App() {
  return (
    <>
      <Menu option01="Site" option02="Mapa e Contatos" />
      <main>
        <section id="s1" className={style.s1}>
          {cards.map((item, index) => (
            <div key={index} className={style.crdzao}>
              <img src={item.img} alt={item.text} width={250} height={260} className={style.imagemS1} />
              <h1 className={style.tituloS1}>{item.text}</h1>
              <h5 className={style.textoS1}>{item.maiscoisa}</h5>
            </div>
          ))}
          <div>
            <button className={style.butao}>Perfil do GitHub</button>
          </div>
        </section>
        <div className={style.Rede}>
          <div className={style.imagemRede}>
          <a href=""><img src={instagram} alt="rede1" width={40} height={40}className={style.instagram}/></a>
          <a href=""><img src={youtube} alt="rede2" width={40} height={40} className={style.youtube}/></a>
          </div>
        </div>
      </main>
    
    </>
  );
}

export default App;
