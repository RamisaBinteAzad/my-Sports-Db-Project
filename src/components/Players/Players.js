import React from 'react';
import './Players.css'
import SinglePlayer from '../SinglePlayer/SinglePlayer';
// dateBorn: "1994-07-03";
// dateSigned: null;
// idAPIfootball: null;
// idPlayer: "34177125";
// idPlayerManager: null;
// idSoccerXML: null;
// idTeam: "135207";
// idTeam2: "0";
// idTeamNational: null;
// idWikidata: null;
// intLoved: "0";
// intSoccerXMLTeamID: null;
// strAgent: "";
// strBanner: null;
// strBirthLocation: "Manchester, England";
// strCollege: null;
// strCreativeCommons: "No";
// strCutout: null;
// strDescriptionCN: null;
// strDescriptionDE: null;
// strDescriptionEN: "Sam James (born 3 July 1994) is an English rugby union player, currently playing with the Sale Sharks. He usually plays as a centre but can also play as a fly-half or fullback. Sam is known for his magnificent handling and ball skills, as well as his kicking game.\r\n\r\nClub career\r\nSam made his professional debut against Northampton Saints on 21 April 2013, at just 19 years of age. James played every minute of the 2018-19 Gallagher Premiership season, the only player in the entire league to do so. He was selected in the BT Sport Dream Team for the 2019-20 Gallagher Premiership season, in which BT Sport pundits choose their team of the season. He has amassed 150 caps for Sale, with over 100 of these coming in the Premiership, making him one of the more experienced players in the squad, despite his relatively young age. This seniority within the squad has lead to James captaining the side on numerous occasions.\r\n\r\nInternational career\r\nJames toured South Africa with England Saxons in the summer of 2016.\r\n\r\nSam made his England debut in 2017 against the Barbarians, providing an impressive offload to assist Nathan Earle’s try.\r\n\r\nHe was called up to the senior England squad by Eddie Jones for their 2017 summer tour of Argentina.";
// strDescriptionES: null;
// strDescriptionFR: null;
// strDescriptionHU: null;
// strDescriptionIL: null;
// strDescriptionIT: null;
// strDescriptionJP: null;
// strDescriptionNL: null;
// strDescriptionNO: null;
// strDescriptionPL: null;
// strDescriptionPT: null;
// strDescriptionRU: null;
// strDescriptionSE: null;
// strEthnicity: null;
// strFacebook: "";
// strFanart1: null;
// strFanart2: null;
// strFanart3: null;
// strFanart4: null;
// strGender: "Male";
// strHeight: "1.93 m (6 ft 4 in)";
// strInstagram: "";
// strKit: "";
// strLocked: "unlocked";
// strNationality: "England";
// strNumber: "";
// strOutfitter: "";
// strPlayer: "Sam James";
// strPlayerAlternate: null;
// strPosition: "Center";
// strRender: "https://www.thesportsdb.com/images/media/player/render/enljjw1612453460.png";
// strSide: "";
// strSigning: "";
// strSport: "Rugby";
// strStatus: "Active";
// strTeam: "Sale Sharks";
// strTeam2: "";
// strThumb: "https://www.thesportsdb.com/images/media/player/thumb/xtcb6d1612453272.jpg";
// strTwitter: "";
// strWage: "";
// strWebsite: "";
// strWeight: "98.18 kg (15 st 6 lb; 216 lb)";
// strYoutube: "";
const Players = ({ players }) => {
//   const { players } = props;
  console.log(players);
  return (
    <div>
      <div className="card-container">
        {players.map((pd) => (
          <SinglePlayer key={pd?.idPlayer} player={pd}></SinglePlayer>
        ))}
      </div>
    </div>
  );
};

export default Players;