import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import style from './ForbesListItem.module.css';
const ForbesListItem = ({ item }) => {
  return (
    <>
      <img className={style.avatar} src={item.avatar} alt="Mark Zuckerberg" />
      <h3 className={style.title}>{item.name}</h3>
      <span className={style.capital}>
        {item.capital} <BiDollarCircle color="#2196f3" size={22} />
        {item.isIncrease ? <FcBullish size={22} /> : <FcBearish size={22} />}
      </span>
    </>
  );
};

export default ForbesListItem;
