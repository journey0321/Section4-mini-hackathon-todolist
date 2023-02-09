import React from "react";
import logo from "../img/logo.svg"

const Header = () => {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long'});

    return (
        <div className="header">
            <h1><img src={logo} alt="로고 아이콘" /></h1>
            <div className="date">{dateString} ({dayName})</div>
        </div>
    )
}

export default Header;