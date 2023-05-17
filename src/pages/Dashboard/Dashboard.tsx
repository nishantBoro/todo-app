import React from 'react'

import TodoList from '../../components/TodoList/TodoList';

import styles from './styles.module.css'

function Dashboard () {
  return (
    <div className={styles.dashboard}>
      <TodoList />
    </div>
  )
}

export default Dashboard;
