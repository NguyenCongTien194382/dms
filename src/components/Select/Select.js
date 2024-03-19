import React, { useState } from 'react';
import styles from './Select.module.css'
import { MdArrowDropDown } from "react-icons/md";

const Select = ({ options, label, onChange }) => {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxClick = (index) => {
        const newCheckedItems = { ...checkedItems };
        if (newCheckedItems[index]) {
            delete newCheckedItems[index];
        } else {
            newCheckedItems[index] = options[index].value;
        }
        setCheckedItems(newCheckedItems);
        if (onChange) {
            onChange(Object.values(newCheckedItems));
        }
    };

    return (
        <div className={styles.select}>
            <div className={styles.label}>
                <span>{label}</span>
                <MdArrowDropDown size={24} />
            </div>
            <div className={styles.box_select}>
                {options.map((option, index) => (
                    <div className={styles.option} key={index} onClick={() => handleCheckboxClick(index)}>
                        <input type='checkbox' checked={checkedItems[index] !== undefined} readOnly />
                        <span className={styles.option_name}>{option.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Select;
