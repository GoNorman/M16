import React from 'react';

const Data = () =>{
    let date = new Date();
    let month = ["января","февраля", "марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
    return (
      <div className="show-time">
        <p>
          {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}
        </p>
      </div>
    );
}

export default Data;