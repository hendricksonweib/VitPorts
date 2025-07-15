import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "../../../public/logo.png"
import { useLogin } from "@/hooks/useLogin"
import { useState } from "react"

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  const { login, loading, error } = useLogin()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await login(email, password)

    if (result) {
      // ✅ Login bem-sucedido
      console.log("Login:", result)
      // Aqui você pode salvar o token ou redirecionar
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col", className)} {...props}>
      <div className="flex flex-col items-center text-center">
        <img src={Logo} alt="Logo" />
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
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </div>
    </form>
  )
}
