
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login')
      }
      setChecking(false)
    })
    return () => unsubscribe()
  }, [navigate])

  return children
}

export default ProtectedRoutes
