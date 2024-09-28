import React from 'react'
import { Fragment } from 'react'

export const CoverPhoto = (props: { src: string; credit: string }) => {
    console.log(props)
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <img src={props.src}></img>
            <div
                style={{
                    fontSize: '0.75em',
                }}
            >
                {props.credit}
            </div>
        </div>
    )
}
