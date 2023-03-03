import FlashcardDisplay from "../components/flashcards/FlashcardDisplay";
import FlashcardForm from "../components/flashcards/FlashcardForm";
import { addFlashcardAction } from "../components/flashcards/FlashcardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../components/shared/Modal";

const HomePage = () => {
  const flashcards = useSelector((state) => state.flashcards.flashcards);
  const [flashcardFormMode, setFlashcardFormMode] = useState("");
  const dispatch = useDispatch();

  const setSelectedFlashcardFormMode = ({ mode }) => {
    setFlashcardFormMode(mode);
  };

  const onAddFlashcardHandler = async (flashcardValues) => {
    await dispatch(addFlashcardAction(flashcardValues));
    setFlashcardFormMode("");
  };

  return (
    <>
      {flashcardFormMode === "add" &&
        createPortal(
          <Modal onClose={() => setFlashcardFormMode("")}>
            <FlashcardForm mode="add" onAdd={onAddFlashcardHandler} />
          </Modal>,
          document.getElementById("modal-root")
        )}
      <h2>Flashcards</h2>
      <hr />
      <p>
        Les flashcars sont des fiches de mémorisation. Le principe des flash
        cards est extrêmement simple : sur des petites cartes plus ou moins
        grandes selon tes besoins, tu écris une question et sa réponse. Par
        exemple quelle est la date de la prise de la Bastille ? Un Thérorème /
        Forumule Mathématique ? Une Définition philosophique ou économique ? Ou
        encore un mot de vocabulaire d'allemand, d'anglais ou d'espgnol. Une
        fois que tu as fait ton petit exercice de scribe, tu te testes en
        t'auto-interrogeant carte après carte. Facile non ?
      </p>
      <hr />
      <h3>Listes des Flashcards : </h3>
      <hr />
      {flashcards.length === 0 ? (
        <p>Il n'y a pas de flashcards actuellement !</p>
      ) : (
        <div className="mx-auto row row-cols-2 row-cols-md-3 row-cols-xl-4">
          {flashcards().map((f) => (
            <FlashcardDisplay
              flashcardId={f.id}
              key={f.id}
              setSelectedFlashcardFormMode={setSelectedFlashcardFormMode}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
