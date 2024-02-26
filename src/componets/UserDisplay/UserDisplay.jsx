import { useUserContext } from "../../contexts/UserContext/UserContext";

export function UserDisplay() {
  const { user, signin, signout } = useUserContext();

  return (
    <div className="flex flex justify-between min-w-md">
      {user === null ? (
        <>
          {/* Spacer */}
          <div></div>
          <button onClick={signin}>Signin</button>
        </>
      ) : (
        <>
          <p>{user.name}</p>
          <button onClick={signout}>SignOut</button>
        </>
      )}
    </div>
  );
}
