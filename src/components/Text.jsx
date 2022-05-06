import axios from 'axios';
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeTextNum} from '../redux/textSlice'

function Text() {
    const paragraph = useSelector(state => state.text.paragraph);
    const format = useSelector(state => state.text.format);
    const dispatch = useDispatch()

    const [texts, setTexts] = useState([])

    const getText = async() => {
        const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paragraph}&type=${format}`)
        return setTexts(res.data);
    }

    useEffect(() => {
        getText();
    }, [paragraph, format])

    console.log(texts)
    console.log(paragraph)


    return (
    <>
        <form onSubmit={(e) => e.preventDefault()}>
        <input type='number' value={paragraph} onChange={(e) => dispatch(changeTextNum(e.target.value))} />
        </form>
        {texts.map((item,i) => (
         <p key={i}>{item}</p>
        ))}
    </>
  )
}

export default Text