import { useState } from 'react';
import st from './Comment.module.scss';

function Comment({ placeholder }) {
  const maxLength = 120;
  const [commentLength, setCommentLength] = useState(0);
  const [value, setValue] = useState('');
  return (
    <div className={ st['comment'] }>
        <textarea className={ st['textarea'] }
          placeholder={ placeholder }
          maxLength={ maxLength }
          onChange={ (e) => {
            setValue(e.target.value);
            setCommentLength(e.target.value.length);
          } }
          value={ value }
        />
        <span className={ st['right-text'] }>{ commentLength }/{ maxLength }</span>
    </div>
  );
}

export default Comment;