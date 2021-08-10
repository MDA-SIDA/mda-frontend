import Alert from '@common/Alert'
import Sidebar from '@components/Sidebar'
import React, { useState } from 'react'
import styles from './index.module.scss'
import Sidedrawer from '../Sidedrawer/index'
import Backdrop from '../Backdrop/index'
import SecondaryButton from '../SecondaryButton'

function Layout({ children }) {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

  const sideDrawerCloseHandler = () => {
    setSideDrawerIsVisible(false)
  }
  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }
  return (
    <div className={styles.layout_container}>
      <Sidebar overrideStyle={styles.layout_container__sidebar} />
      <Sidedrawer open={sideDrawerIsVisible} closed={sideDrawerCloseHandler} />
      <Backdrop />
      <SecondaryButton drawerHandler={sideDrawerToggleHandler} />
      <div className={styles.layout_container__main}>
        {children}
        {/* TODO: will be rendered conditionally */}
        {/* <div className={styles.alert}>
					<Alert
						message="Well done!"
						info="Success Message"
						backgroundColor="#EAF8D2"
						iconColor="#198106"
					/>
				</div> */}
      </div>
    </div>
  )
}

export default Layout
