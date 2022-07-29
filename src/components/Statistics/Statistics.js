// import { Component } from 'react';
import PropTypes from 'prop-types';
import stl from './statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {

    return (
        <div className={stl.stat}>

            <div className={stl.stat_block}>

                <ul className={stl.stat_list}>
                    <li className={stl.stat_item}>Good: {good}</li>
                    <li className={stl.stat_item}>Neutral: {neutral}</li>
                    <li className={stl.stat_item}>Bad: {bad}</li>
                    <li className={stl.stat_item}>Total: {total}</li>
                    <li className={stl.stat_item}>Positive feedback: {positivePercentage}%</li>
                </ul>
            </div>
        </div>
    );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number,
};




export default Statistics;