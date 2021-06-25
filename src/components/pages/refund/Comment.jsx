import st from './Comment.module.scss';

function Comment({ placeholder, rightText }) {
  return (
    <div className={ st['comment'] }>
        <textarea className={ st['textarea'] }
        placeholder={ placeholder } />
        <span className={ st['right-text'] }>{rightText}</span>
    </div>
  );
}

export default Comment;