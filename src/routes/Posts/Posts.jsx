"use client"
import React from 'react'
import styles from './Posts.module.css'
import { useDispatch } from 'react-redux'
export const Posts = () => {
    const dispatch = useDispatch();
    const getPosts = () => {
        dispatch({ type: "GET_POSTS", payload: { n1: 10, n2: 20 } })
    }
    return (
        <div>
            <button onClick={getPosts}>Get Posts</button>
            <h6>
                Note: Please check console for store updation , while clicking on the button
            </h6>
        </div>
    )
}
