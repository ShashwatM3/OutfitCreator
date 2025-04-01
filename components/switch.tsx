export const Switch = ({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (checked: boolean) => void }) => {
    return (
      <button
        onClick={() => onCheckedChange(!checked)}
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition ${
          checked ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
            checked ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    );
  };
  