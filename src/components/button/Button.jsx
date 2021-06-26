import st from './Button.module.scss';

const Button = ({ children = ' ', accent = false, anchor = false, file = false, href }) => {
    const style = st['button']
        + ' ' + (accent ? st['accent'] : (anchor ? st['anchor'] : st['not-accent']))

    if(file) return (
        <a href={ href } download
            className={ style }>{ children }</a>
    );

    return (
        <a href={ href } className={ style }>{ children }</a>
    );
};

export default Button;