import Invoice from '../invoice/Invoice';
import Logo from '../logo/Logo';
import Title from '../title/Title';

import st from './HeaderSmall.module.scss';

function HeaderSmall({ invoice = '0', children = 'no title'}) {
  return (
    <div className={ st['header'] }>
        <section>
            <Invoice>Invoice #{ invoice }</Invoice>
            <Title>{ children }</Title>
        </section>
        <section>
            <Logo width={ 48 } height={ 48 }/>
        </section>
    </div>
  );
}

export default HeaderSmall;
