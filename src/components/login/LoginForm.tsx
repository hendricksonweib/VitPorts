import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LogoGrupoMateus from "../../../public/logogrupomateus.png"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <img src={LogoGrupoMateus} alt="" />
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Usuário</Label>
          <Input id="email" type="email" placeholder="Digite seu usuário" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
          </div>
          <Input id="password" type="password" placeholder="Digite sua senha" required />
        </div>
        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </div>
    </form>
  )
}
