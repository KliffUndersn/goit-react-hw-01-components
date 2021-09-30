import React from 'react'
import PropTypes from 'prop-types';
const Statistics = ({stats}) => {
    return (<section className="statistics">
    <h2 className="title">Upload stats</h2>
  
    <ul className="stat-list">
        {stats.map(stats => <li key={stats.id} className="item">
        <span className="label">{stats.label}</span>
        <br/>
        <span className="percentage">{stats.percentage}%</span>
      </li>)}
      
    </ul>
  </section>)
}
export default Statistics

Statistics.propTypes={
  label:PropTypes.string,
  percentage:PropTypes.number,
}