import { useState } from 'react';

export default function LoginForm ({logUser}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    logUser(email,password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your email:
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>Enter your password:
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">se connecter</button>
    </form>
  )
}

