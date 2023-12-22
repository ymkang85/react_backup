import React from 'react'
import {Link} from 'react-router-dom'

const NoPage = () => {
    return (
        <div>
            페이지를 찾을 수 없습니다.
            <h1>NoPage</h1>
            <Link to="/">메인 페이지로</Link>
        </div>
    )
}

export default NoPage