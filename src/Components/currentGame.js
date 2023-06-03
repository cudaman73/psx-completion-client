import React, {useState, useEffect} from "react";
import { getUncompletedGames, completeGame } from "../utils";
import Card from "./Card";
import { Modal, Button } from 'react-bootstrap';


function currentGame() {

        const [currentGame, setCurrentGame] = useState({
            _id: '0',
            name: "None",
            completed: false,
            url: "/default-image.svg"
        });
        const [disabled, setDisable] = useState(false);
        // Add a state to control the visibility of the modal
        const [showModal, setShowModal] = useState(false);  

        const handleClose = () => setShowModal(false);
        const handleShow = () => setShowModal(true);
        
        function grabNewGame() {
            setDisable(true);
            setShowModal(false);

            getUncompletedGames().then((data) => {
                let randIndex = Math.ceil(Math.random() * data.length);
                let newGame = data[randIndex]
                completeGame(currentGame, newGame);
                setCurrentGame(newGame);
                setDisable(false);
            });
        }


        // make api call to node to grab current game from db.
        // this should always be the first result
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch("/get-current-game");
                const data = await response.json();
                setCurrentGame(data[0]);
            }
                
            fetchData();
        }, []);
    
        return (
            <div className="row">
              <div className="col-md-4 mx-auto">
                  <h1>Current game: </h1>
                  <Card key={currentGame._id} name={currentGame.name} url={currentGame.url} />
                  <Button variant="success" disabled={disabled} onClick={handleShow}>Complete!</Button>
        
                  <Modal show={showModal} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Confirm Action</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to complete this game?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Cancel
                        </Button>
                        <Button variant="primary" onClick={grabNewGame}>
                          Confirm
                        </Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
          );
}

export default currentGame;