import style from './StatisticsItem.module.css';

const StatisticsItem = ({ stat, icon: Icon }) => {
  //const Icon = icon;
  return (
    <>
      <Icon size={48} />

      <span className={style.counter}>{stat.total}</span>
      <p className={style.text}>{stat.title}</p>
    </>
  );
};

export default StatisticsItem;
