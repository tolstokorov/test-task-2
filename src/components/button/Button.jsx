import st from './Button.module.scss';

const Button = ({ children = ' ', accent = false }) => {
    const style = st['button'] + ' ' + (accent ? st['accent'] : st['not-accent']);
    return (
        <button className={ style }>{ children }</button>
    );
};

export default Button;