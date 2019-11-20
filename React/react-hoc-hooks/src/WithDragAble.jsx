import React, { Component } from 'react'

export default function WithDragAble(Com) {
  class WithDragAble extends Component {
    state = {
      left: 0,
      top: 0
    }
    handleMove = (event) => {
      let left = event.clientX /* - this.startX */
      let top = event.clientY /* - this.startY */
      this.setState({
        left,
        top
      })
    }
    handleUp = () => {
      document.removeEventListener('mousemove', this.handleMove)
    }
    handleDown = (event) => {
      /* let objClientRight = event.target.getBoundingClientRect()
      this.startX = event.clientX - objClientRight.x
      this.startY = event.clientY - objClientRight.y */
      document.addEventListener('mousemove', this.handleMove)
      document.addEventListener('mouseup', this.handleUp)
    }
    render() {
      const { left, top } = this.state
      return (
        <div onMouseDown={this.handleDown} style={{ left, top }} className='drag'>
          <Com />
        </div>
      )
    }
  }
  return WithDragAble
}