import React from 'react';
import { motion } from "framer-motion";

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)"
    }
};

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <h1 className='navbar-logo'>To-Do-List</h1>
                <button className='button-container' whilehover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} title='Add Task'>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="item"
                    >
                        <motion.path
                            d="M11 11V3h2v8h8v2h-8v8h-2v-8H3v-2h8z"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut" },
                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                        />
                    </motion.svg>
                </button>
            </div>
        </nav>

    )
}

export default NavBar;