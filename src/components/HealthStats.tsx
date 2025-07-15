import { HeartPulse, Thermometer, Activity, Zap } from "lucide-react"

interface HealthStatsProps {
  bpm: number
  spo2: number
  temperature: number
  stressLevel: number
}

export default function HealthStats({ bpm, spo2, temperature, stressLevel }: HealthStatsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Card icon={<HeartPulse />} label="BPM" value={`${bpm} bpm`} />
      <Card icon={<Activity />} label="SpO₂" value={`${spo2}%`} />
      <Card icon={<Thermometer />} label="Temperatura" value={`${temperature.toFixed(1)} °C`} />
      <Card icon={<Zap />} label="Estresse" value={`${stressLevel}%`} />
    </div>
  )
}

function Card({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="bg-white dark:bg-muted rounded-xl p-4 shadow flex flex-col items-center justify-center text-center">
      <div className="text-primary mb-2">{icon}</div>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
