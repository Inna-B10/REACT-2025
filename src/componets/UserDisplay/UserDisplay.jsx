import { useUserContext } from "../../contexts/UserContext/UserContext"

export function UserDisplay() {
  const {user, signin, signout} = useUserContext()

  return (
    <div>
      {
        user === null
        ? <button onClick={signin}>Signin</button>
        : (
          <>
            <p>{user.name}</p>
            <button onClick={signout}>SignOut</button>
          </>
        )
      }
    </div>
  )
}