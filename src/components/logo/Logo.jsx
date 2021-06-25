import logo from "./logo.png";

const Logo = ({ width, height }) => {
    return (
      <img src={ logo } alt="logo" width={ width } height={ height }/>
    );
};

export default Logo;

