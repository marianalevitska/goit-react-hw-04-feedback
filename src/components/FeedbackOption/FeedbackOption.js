import PropTypes from 'prop-types'

import stl from './feedbackOption.module.css'

function FeedbackOption({ options, onLeaveFeedback }) {

    const elements = options.map(option => (
        <button
            key={option}
            type='button'
            className={stl.feedback_btn}
            onClick={() => onLeaveFeedback(option)}>
            {option}</button>
    ))
    return (
        <div className={stl.feedback_btn_block}>
            {elements}
        </div>

    )
};

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
};

FeedbackOption.defaultProps = {
    options: []
};

export default FeedbackOption;