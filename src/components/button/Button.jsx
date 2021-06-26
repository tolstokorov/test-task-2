import st from './Button.module.scss';

const Button = ({ children = ' ', accent = false, file = false, href }) => {
    const style = st['button'] + ' ' + (accent ? st['accent'] : st['not-accent']);

    if(file) return (
        <a href={ href } download
            className={ style + ' ' + st['anchor'] }>{ children }</a>
    );

    return (
        <button className={ style }>{ children }</button>
    );
};

export default Button;