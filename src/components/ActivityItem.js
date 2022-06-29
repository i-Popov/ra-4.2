import React from "react";
import PropTypes from 'prop-types';

const ActivityItem = ({ activeItem, deleteItem }) => {
    if (activeItem.trainingDate === undefined) return null;
    return (
      <tr id={activeItem.id}>
        <td>{activeItem.trainingDate}</td>
        <td>{activeItem.trainingDist}</td>
        <td>
          <span
            onClick={(e) => {
              deleteItem(e.target.closest('tr').id);
            }}
          >
            ✘
          </span>
        </td>
      </tr>
    );
  }

export default ActivityItem;

ActivityItem.propTypes = {
    activeItem: PropTypes.object.isRequired,
    deleteItem: PropTypes.func,
}

ActivityItem.defaultProps = {
    deleteItem: () => console.log('Тут, вероятно, должна быть какая функция'),
}