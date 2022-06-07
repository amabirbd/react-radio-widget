import styles from "./Card.module.css"
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeChannel } from '../../redux/features/currentChannelSlice'

function Card() {

    const channel = useSelector((state) => state.currentChannel.currentChannel);
    const radioChannels = useSelector((state) => state.currentChannel.radioChannels);
    const dispatch = useDispatch();

    console.log(channel);

  return (
    <div className={styles.card}>
        <nav className={styles.cardNav}>
            STATIONS
        </nav>
        <ul className={styles.radioList}>
            {
                radioChannels.map((item) => (
                    <li className={styles.listItem} key={item.id} value={item.id} onClick={()=> dispatch(changeChannel(item.id))}>
                        <div className="name">{item.name}</div>
                        <div className="channel">{item.channel}</div>
                    </li>
                ))
            }
        </ul>
        <div className={styles.currentchannel}>
            <div className={styles.currentlyPlaying}>Currenlty playing</div>
            <div className={styles.currentChannelPlaying}>{channel.name}</div>
        </div>
    </div>
  )
}

export default Card