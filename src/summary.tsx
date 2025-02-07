import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './components/ui/button'
import { DialogTrigger } from './components/ui/dialog'
import { InOrbitIcon } from './components/in-orbit-icon'
import { Progress, ProgressIndicator } from './components/ui/progress-bar'
import { Separator } from './components/ui/separator'
import { OutlineButton } from './components/ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold"> 5 a 10 de Agosto</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar Meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span>58%</span>
        </div>
      </div>
      <Separator />
      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Comer uma fruta por dia
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Caminhar 30 minutos
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Dormir cedo
        </OutlineButton>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Domingo{' '}
            <span className="text-zinc-400 text-xs">(15 de setembro)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "{' '}
                <span className="text-zinc-100">Dormir cedo</span>" às
                <span className="text-zinc-100"> 21:30h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "{' '}
                <span className="text-zinc-100">Dormir cedo</span>" às
                <span className="text-zinc-100"> 21:30h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "{' '}
                <span className="text-zinc-100">Dormir cedo</span>" às
                <span className="text-zinc-100"> 21:30h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "{' '}
                <span className="text-zinc-100">Dormir cedo</span>" às
                <span className="text-zinc-100"> 21:30h</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Sábado{' '}
            <span className="text-zinc-400 text-xs">(14 de setembro)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "{' '}
                <span className="text-zinc-100">Dormir cedo</span>" às
                <span className="text-zinc-100"> 21:30h</span>
              </span>
            </li>
           
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Sexta-Feira{' '}
            <span className="text-zinc-400 text-xs">(13 de setembro)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "{' '}
                <span className="text-zinc-100">Dormir cedo</span>" às
                <span className="text-zinc-100"> 21:30h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "{' '}
                <span className="text-zinc-100">Dormir cedo</span>" às
                <span className="text-zinc-100"> 21:30h</span>
              </span>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  )
}
