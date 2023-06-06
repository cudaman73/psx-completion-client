import React, {useState, useEffect} from "react";
import { getUncompletedGames, toggleGameCompletion, setNewGameAsCurrent } from "../utils";
import Card from "./Card";
import { Modal, Button } from 'react-bootstrap';

function currentGame() {
        const noneGame = {
          _id: '0',
          name: "None",
          completed: false,
          url: "/default-image.svg"
        }
        const [currentGame, setCurrentGame] = useState({
          _id: '0',
          name: "None",
          completed: false,
          url: "/default-image.svg"
        });
        const [disabled, setDisable] = useState(false);
        const [showModal, setShowModal] = useState(false);  

        const handleClose = () => setShowModal(false);
        const handleShow = () => setShowModal(true);
        
        function grabNewGame() {
            setDisable(true);
            setShowModal(false);
            getUncompletedGames().then((data) => {
                let randIndex = Math.ceil(Math.random() * data.length);
                let newGame = data[randIndex]
                toggleGameCompletion(currentGame.name, true);
                setNewGameAsCurrent(newGame);
                setCurrentGame(newGame);
                setDisable(false);
            });
        }

        function resetCurrentGame() {
          setCurrentGame(noneGame);
          setNewGameAsCurrent(noneGame);
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
                  <Button className="mx-2" variant="warning" onClick={resetCurrentGame}>Clear Game</Button>
                  <Button className="mx-2" variant="success" disabled={disabled} onClick={currentGame.name === "None" ? grabNewGame : handleShow}>Complete!</Button>
        
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