import stl from './notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
    return (
        <div className={stl.message}>
            <h3 className={stl.title}>{message}</h3>
        </div>
    )
};

Notification.propTypes = {
    title: PropTypes.string.isRequired
};

export default Notification;