import ConfettiEffect from '../components/ConfettiEffect';

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Rad Confetti App</h1>
        <p className="text-xl text-white">Click the button to celebrate with confetti!</p>
      </div>
      <ConfettiEffect />
    </div>
  );
};

export default Index;
