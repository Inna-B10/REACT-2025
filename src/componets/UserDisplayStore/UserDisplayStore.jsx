import { useUserStore } from "../../stores/useUserStore";

export function UserDisplayStore() {
  const user = useUserStore((state) => state.user);
  const signin = useUserStore((state) => state.signin);
  const signout = useUserStore((state) => state.signout);

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
