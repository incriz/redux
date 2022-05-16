import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import uniqId from 'uniqid'
import { commentCreate, commentsLoad } from './redux/actions';
import SingleComment from "./SingleCommnet"; 



function Commnets(props) {

    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => {
    //    console.log('redux state', state)
        const { commentsReducer } = state;
        return commentsReducer.comments
    })


    const dispatch = useDispatch();


    const handleInput = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqId();
        dispatch(commentCreate(textComment, id));
    }

    useEffect(() => {
        dispatch(commentsLoad());
    }, [])

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type = 'text' value={textComment} onChange={handleInput}/>
                <input type = 'submit' hidden />
            </form>
            
            
            {!!comments.length && comments.map(res =>{
                return <SingleComment key={res.id} data={res} />
            })}
           
        </div>
    )
}

export default Commnets;