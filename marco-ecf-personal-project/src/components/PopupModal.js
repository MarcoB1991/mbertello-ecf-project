
import { Modal, Button } from 'react-bootstrap';

const PopupModal = ({ project, onHide }) => {
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{project.description}</p>
        {/* Altri dettagli del progetto */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Chiudi
        </Button>
        {/* Altri bottoni o azioni del modale */}
      </Modal.Footer>
    </Modal>
  );
};