// import React, { useState } from "react";
import Modal from "react-modal";
import './FavoriteModal.css'

  export default function FavoriteModal ({modalIsOpen, setIsOpen, favorites, setFavorites}) {
  
    function closeModal() {
      setIsOpen(false);
    }
    const removeFavorite = (e) => {
        setFavorites(Object.values(favorites).filter((fav, i) => i != e.target.parentNode.value))
    }

    const clearAll = () => {
        setFavorites([])
        sessionStorage.clear()
        setIsOpen(false)
    }
  
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
        >
          <h2>Favorites</h2>
          <h3 className='close' onClick={closeModal}>&times;</h3>
          <ol>
          { Object.values(favorites).map((fav, i) => <li value={i} ><a href={fav}>{fav}</a><h4 className='remove' onClick={(e) => removeFavorite(e) }>🗑</h4></li>)}
          </ol>
          <h4 className='clear' onClick={() => clearAll()}>Clear All</h4>
        </Modal>
      </div>
    );
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '50',
      bottom: '20',
      height: '80%',
      with: '60%',
      marginLeft: '15%',
      transform: 'translate(-50%, -50%)',
      zindex: '2',
    },
  };
  