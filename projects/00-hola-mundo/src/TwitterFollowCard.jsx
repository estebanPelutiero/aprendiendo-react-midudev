import React, { useState } from 'react'

const TwitterFollowCard = ({children, userName, name}) => {

  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  return (
    <article className="tw-followCard">

      <header className="tw-followCard-header">

        <img className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={name}
        />

        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>{`@${userName}`}</span>
        </div>

      </header>

      <aside>
        <button onClick={handleClick} className={buttonClassName}>{buttonText}</button>
      </aside>
      
    </article>
  )
}

export default TwitterFollowCard