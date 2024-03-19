import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import styles from './Input.module.css'

const Input = ({ placeholder, onChange }) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }

    const handleClear = (e) => {
        setValue('')
        onChange('')
    }


    return (
        <div className={styles.input}>
            <span><CiSearch size={18} /></span>
            <input
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={e => handleChange(e)}
            />
            {value && value !== '' && (
                <span className={styles.clear} onClick={e => handleClear(e)}><MdClear size={20} /></span>
            )}
        </div>
    )
}

export default Input