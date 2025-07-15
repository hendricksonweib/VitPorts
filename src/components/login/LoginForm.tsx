import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "../../../public/logo.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface LoginFormProps extends React.ComponentProps<"form"> {
  onLogin: () => void
}

export function LoginForm({ className, onLogin, ...props }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simula login bem-sucedido
    console.log("Login simulado:", { email, password })

    // Atualiza o estado global de login (via App)
    onLogin()

    // Redireciona para o dashboard
    navigate("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center text-center">
        <img src={Logo} alt="Logo" className="w-32 h-auto" />
      </div>

      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="email">Usuário</Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </div>
    </form>
  )
}
