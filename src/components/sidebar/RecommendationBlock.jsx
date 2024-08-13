import React from 'react';
import MyBtn from '../ui/MyBtn/MyBtn';
import habr from '../../assets/img/recomend/habr.jpeg';
import match from '../../assets/img/recomend/match.jpeg'
import pm from '../../assets/img/recomend/PM.jpeg'

const RecommendationBlock = () => {
  return (
    <div className='recommend-block'>
      <h5 className="recommend-block-title">Интересные блогеры</h5>
      <div className="recommend-item">
        <div className="recommend-item-img">
          <img src={habr} alt="" />
        </div>
        <div className="recommend-item-inner">
          <p className="recommend-item-title">Хабр Научпоп</p>
          <p className="recommend-item-nikname">@habr_popsci</p>
        </div>
        <MyBtn classBtn="btn btn-outline-primary recommend-btn" >Читать</MyBtn>
      </div>

      <div className="recommend-item">
        <div className="recommend-item-img">
          <img src={match} alt="" />
        </div>
        <div className="recommend-item-inner">
          <p className="recommend-item-title">Матч ТВ</p>
          <p className="recommend-item-nikname">@MatchTV</p>
        </div>
        <MyBtn classBtn="btn btn-outline-primary recommend-btn" >Читать</MyBtn>
      </div>

      <div className="recommend-item">
        <div className="recommend-item-img">
          <img src={pm} alt="" />
        </div>
        <div className="recommend-item-inner">
          <p className="recommend-item-title">Популярная м..</p>
          <p className="recommend-item-nikname">@PopMechanica</p>
        </div>
        <MyBtn classBtn="btn btn-outline-primary recommend-btn" >Читать</MyBtn>
      </div>
    </div>
  );
};

export default RecommendationBlock;