import React, {
    Component
} from 'react';

import PropTypes from 'prop-types';

class Icon extends Component {

    render() {
        const {
            name
        } = this.props;
        return (<i className="icon">
            <svg className={`icon-${name}`}>
                <use href={`public/assets/allIcons.svg#icon-${name}`}></use>
            </svg>
        </i>);
    }
}
Icon.propTypes = {
    name: PropTypes.string
};

export default Icon;
