import { useState } from 'react';
import st from './Comment.module.scss';

function Comment({ placeholder }) {
  const maxLength = 120;
  const [commentLength, setCommentLength] = useState(0);
  return (
    <div className={ st['comment'] }>
        <textarea className={ st['textarea'] }
          placeholder={ placeholder }
          maxLength={ maxLength }
          onChange={ (e) => setCommentLength(e.target.value.length) }
        />
        <span className={ st['right-text'] }>{ commentLength }/{ maxLength }</span>
    </div>
  );
}

export default Comment;