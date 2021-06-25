import st from './Scene.module.scss';

function Scene({ children }) {
  return (
    <div className={ st['wrapper'] }>
        <main className={ st['main'] }>
          { children }
        </main>

        <section className={ st['small-box'] }>
          <small className={ st['small'] }>Powered by Broxus</small>
          <small className={ st['small'] }>Payments processed by Finstream OU, license FVT000153</small>
        </section>
    </div>
  );
}

export default Scene;
