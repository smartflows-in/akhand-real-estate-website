import React from 'react';
import './Amenities.css';
import ganesh from '../../assets/ganesh.svg';
import ReflexologyPath from '../../assets/ReflexologyPath.svg';
import GuestRoom from '../../assets/GuestRoom.svg';
import Library from '../../assets/library-svgrepo-com.svg';
// import WellnessLawnfrom '../../assets/ WellnessLawnfrom .svg';
import Coveseating from '../../assets/Coveseating.svg';
import PoolWithJacuzzi from '../../assets/PoolWithJacuzzi.svg';
import OpenCafe from '../../assets/OpenCafe.svg';
import KidsPlayArea from '../../assets/KidsPlayArea.svg';
import CricketNet from '../../assets/CricketNet.svg'
import ExperientialWalk from '../../assets/ExperientialWalk.svg'
import JoggingTrack from '../../assets/JoggingTrack.svg'
import BBQPlaza from '../../assets/BBQPlaza.svg'




const Amenities = () => {
  const amenities = [
    { name: 'Ganesha Temple', icon: ganesh },
    { name: 'Reflexology Path', icon: ReflexologyPath },
    { name: 'Guest Room', icon: GuestRoom },
    { name: 'Library', icon: Library },
    { name: 'Wellness Lawn', icon: '' },
    { name: 'Cove seating', icon: Coveseating },
    { name: 'Pool With Jacuzzi', icon: PoolWithJacuzzi },
    { name: 'Net Cricket (4 x 25 mt)', icon: CricketNet },
    { name: 'Open Cafe', icon: OpenCafe },
    { name: 'Kids Play Area', icon: KidsPlayArea },
    { name: 'Experiential Walk', icon: ExperientialWalk },
    { name: 'Amphi seating on mound', icon: '' },
    { name: 'Elevated Jogging Track', icon: JoggingTrack },
    { name: 'Event lawn', icon: '' },
    { name: 'BBQ Plaza', icon: BBQPlaza }
  ];

  return (
    <section id="amenities" className="amenities-section">
      <div className="amenities-container">
        <div className="amenities-header">
          <h2 className="amenities-title">
            The Akhand - <span className="text-gold">Lifestyle Amenities</span>
          </h2>
        </div>
        <div className="amenities-premium-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card-premium">
              <div className="amenity-gold-bar"></div>
              <div className="amenity-content">
                <span className="amenity-icon">◆</span>
                <span className="amenity-name">{amenity.name}</span>
                <span className='icons-amenity'>
                  {typeof amenity.icon === 'string' && amenity.icon.length < 4 // Simple check for emoji
                    ? amenity.icon
                    : <img src={amenity.icon} alt="" className="amenity-svg-icon" />
                  }
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more-premium">
          <button className="view-more-btn-premium">
            View All 30+ Amenities
            <span className="btn-glow"></span>
          </button>
        </div>
      </div>
    </section>
  );
};


export default Amenities;