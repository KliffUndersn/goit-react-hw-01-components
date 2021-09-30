import React from 'react'
import css from './FriendList.module.css'
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({avatar,name,isOnline,id}) => <li key={id} className={css.item}>
  <span className={isOnline?css.online:css.offline}>{isOnline}</span>
  <img className="avatar" src={avatar} alt="" width="48" />
  <p className="name">{name}</p>
</li>)}
</ul>
    )
    
}
export default FriendList

FriendList.propTypes={
    friends:PropTypes.array,
}
