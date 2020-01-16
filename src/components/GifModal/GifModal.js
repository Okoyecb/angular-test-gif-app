// @flow
import React from "react"
import Modal from "react-modal"

import "./GifModal.css"

const GifModal = props => {
  if (!props.selectedGif) {
    return <div />
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.onRequestClose()}
    >
      <div className="gif-modal">
        <img src={props.selectedGif.images.original.url} alt="" />
        <p>
          <strong>Added to Giphy:</strong> {props.selectedGif.import_datetime}
        </p>
        <p>
          <strong>Rating:</strong> {props.selectedGif.rating}
        </p>

        <button type="button" class="btn btn-secondary" onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  )
}

export default GifModal
