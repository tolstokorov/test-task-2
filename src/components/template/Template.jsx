import st from './Template.module.scss';

function Template({ Header, Content, ButtonsBox, width, aloneBtn = false }) {
  let templateStyle = st['template'] + ' ';
  switch(width) {
    case 400:
      templateStyle += st['w400'];
      break;
    case 464:
    default:
      templateStyle += st['w464'];
      break;
  }
  return (
    <div className={ templateStyle }>
        <section className={ st['header'] }>
            <Header />
        </section>
        <section className={ st['content'] }>
            <Content />
        </section>
        <section className={ st['button-box'] + ' ' + (aloneBtn ? st['alone-button'] : '') }>
            <ButtonsBox />
        </section>
    </div>
  );
}

export default Template;
