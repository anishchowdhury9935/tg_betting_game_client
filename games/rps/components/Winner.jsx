import React, { useEffect } from 'react'

export default function Winner(props) {
    const { isMeWinnerId, userId } = props.props;
    useEffect
    return (
        <div className='connecting_player_main winner_main'>
            {isMeWinnerId === null ? (<div style={{ fontSize: '6em' }}>
                draw
            </div>) : (<div>
                <h4 style={{ fontSize: '6em' }}>
                    you
                </h4>
                <h4>
                    {isMeWinnerId ? 'win' : 'lose'}
                </h4>
            </div>)}
        </div>
    )
}
