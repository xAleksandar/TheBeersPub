import useSound from "use-sound";
const soundPath = require("../../audio/soda.mp3");

const useOpeningSound = () => {
  const [play] = useSound(soundPath);

  const playOpeningSound = () => {
    play();
  };

  return playOpeningSound;
};

export default useOpeningSound;
