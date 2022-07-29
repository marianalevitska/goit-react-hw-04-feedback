import stl from './section.module.css'
import PropTypes from 'prop-types'

function Section({ title, children }) {
    return (
        <div className={stl.section}>
            <h2 className={stl.title}>{title}</h2>
            {children}
        </div>)
}

Section.propTypes = {
    title: PropTypes.string.isRequired
};

export default Section;