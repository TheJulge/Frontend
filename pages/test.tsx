import { authInstance } from '@/libs';

export default function Test() {
  const handleClick = () => {
    authInstance.get('/users/8208ae4f-7ed7-4826-9129-75700dc16ff7/alerts');
  };

  return (
    <div>
      <button onClick={handleClick} type="button">
        보내기
      </button>
    </div>
  );
}
