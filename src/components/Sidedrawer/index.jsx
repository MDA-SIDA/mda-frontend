import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Backdrop from '@components/Backdrop'
import classes from './index.module.scss'
import RightArrow from '@assets/img/svg/rightArrow.svg'

const Sidedrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={classes.SideDrawer__header}>
          <img src={RightArrow} onClick={props.closed} />
        </div>
        {props.children}
      </div>
    </>
  )
}

export default connect(null, null)(withRouter(Sidedrawer))
