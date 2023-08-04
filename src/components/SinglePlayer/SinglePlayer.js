import React from 'react';
import './SinglePlayer.css'
import emptyProfile from "../../assets/images/EmptyProfile.jpg";

const SinglePlayer = ({ player }) => {
    const {
      strCutout,
      strDescriptionEN,
      strPlayer,
      strNationality,
      idPlayer,
      strDescriptionCN,
      strDescriptionDE
    } = player;
    console.log(player);
  return (
    <div className="card">
      <img
        className="player-image"
        src={strCutout ? strCutout : emptyProfile}
        alt=""
      />
      <h2>{strPlayer}</h2>
      <p>
        <span className="nationality">Nationality:</span>
        {strNationality}
      </p>
      {/* <p>{strDescriptionEN?strDescriptionEN.slice(0,60)}</p> */}
      <p className="player-description">
        {strDescriptionEN
          ? strDescriptionEN?.slice(0, 145)
          : "NO DETAILS"}
      </p>
    </div>
  );
};

export default SinglePlayer;